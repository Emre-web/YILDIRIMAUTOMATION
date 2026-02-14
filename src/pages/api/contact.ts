import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Rate limiting configuration
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5, // limit each IP to 5 requests per windowMs
};

// Simple in-memory rate limiter
const requestCounts = new Map();

const rateLimit = (ip: string) => {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowMs;
  
  // Clean up old entries
  requestCounts.forEach((timestamp, key) => {
    if (timestamp < windowStart) {
      requestCounts.delete(key);
    }
  });

  const userRequests = Array.from(requestCounts.entries())
    .filter(([key]) => key.startsWith(ip))
    .map(([_, timestamp]) => timestamp);

  if (userRequests.length >= RATE_LIMIT.maxRequests) {
    return false;
  }

  requestCounts.set(`${ip}-${now}`, now);
  return true;
};

// Enable CORS middleware with security headers
const allowCors = (fn: Function) => async (req: NextApiRequest, res: NextApiResponse) => {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'same-origin');
  
  // CORS headers
  const allowedOrigins = [
    'https://yourdomain.com', // Replace with your actual domain
    'http://localhost:3000'  // For local development
  ];
  
  const origin = req.headers.origin || '';
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Requested-With'
  );
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Apply rate limiting
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress) as string;
  if (!rateLimit(ip)) {
    return res.status(429).json({ 
      success: false, 
      message: 'Too many requests, please try again later.' 
    });
  }
  
  return await fn(req, res);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please enter a valid email address' 
    });
  }

  // Email configuration with environment variables
  const emailConfig = {
    host: process.env.EMAIL_SERVER || 'smtp.office365.com',
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    // TLS configuration moved to root level
    minVersion: 'TLSv1.2',
    ciphers: 'TLS_AES_256_GCM_SHA384',
    rejectUnauthorized: process.env.NODE_ENV === 'production',
    debug: process.env.NODE_ENV !== 'production',
    logger: true // Log to console
  };

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport(emailConfig);

  // Validate required environment variables
  if (!process.env.EMAIL_SERVER || !process.env.EMAIL_PORT || 
      !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('Missing required email configuration');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Verify connection configuration
    await transporter.verify((error, success) => {
      if (error) {
        console.error('Server verification failed:', error);
        throw new Error('Failed to verify email server configuration');
      } else {
        console.log('Server is ready to take our messages');
      }
    });

    // Send email to yourself
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'emreyildirimbro@outlook.com',
      replyTo: email,
      subject: `New Contact: ${name}`,
      text: message,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: `"YILDIRIM AUTOMATION" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for your message!',
      html: `
        <h2>Thank you for contacting us, ${name}!</h2>
        <p>We've received your message and will get back to you soon.</p>
        <p>Your message:</p>
        <blockquote>${message.replace(/\n/g, '<br>')}</blockquote>
        <p>Best regards,<br>Emre YILDIRIM</p>
      `,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
    });
  }
};

export default allowCors(handler);
