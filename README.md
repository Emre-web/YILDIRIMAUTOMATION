# Emre YILDIRIM - RPA Portfolio

<div align="center">
  <img width="1200" alt="Portfolio Banner" src="/public/images/banner.jpg" />
</div>

## 🚀 Features

- Modern and responsive design
- Contact form with email functionality
- Project showcase section
- Skills and experience highlights
- Built with Next.js and TypeScript

## 🛠️ Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager
- Git

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your environment variables:
   ```
   # Email Configuration
   EMAIL_SERVER=your-email-server
   EMAIL_PORT=587
   EMAIL_USER=your-email@example.com
   EMAIL_PASSWORD=your-email-password
   EMAIL_FROM=your-email@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Deployment

### Vercel

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
3. Click on "New Project"
4. Import your GitHub repository
5. Add your environment variables in the Vercel dashboard
6. Click "Deploy"

### Environment Variables for Production

Make sure to set these environment variables in your Vercel project settings:

- `EMAIL_SERVER` - Your SMTP server
- `EMAIL_PORT` - SMTP port (usually 587 for TLS)
- `EMAIL_USER` - Your email address
- `EMAIL_PASSWORD` - Your email password
- `EMAIL_FROM` - Sender email address

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
