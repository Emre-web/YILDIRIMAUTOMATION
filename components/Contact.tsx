
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Email validation regex
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [canSubmit, setCanSubmit] = useState(false);
  const { language, t } = useLanguage();

  // Check if form is valid
  useEffect(() => {
    const isValid = 
      formState.name.trim().length >= 2 && 
      validateEmail(formState.email) && 
      formState.message.trim().length >= 10 && 
      formState.message.trim().length <= 1000;
    setCanSubmit(isValid);
  }, [formState]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (formState.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!validateEmail(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formState.message.trim().length > 1000) {
      newErrors.message = 'Message cannot exceed 1000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || !canSubmit) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          message: formState.message.trim()
        }),
      });

      let data;
      try {
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        const responseText = await response.text();
        console.log('Raw response:', responseText);
        data = JSON.parse(responseText);
        console.log('Parsed data:', data);
      } catch (jsonError) {
        console.error('JSON parsing error:', jsonError);
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitStatus({
        success: true,
        message: data.message || 'Message sent successfully!'
      });
      
      // Clear form
      setFormState({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
      // Cleanup timeout on component unmount
      return () => clearTimeout(timer);
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 relative bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-lg font-bold mb-3">{t.getInTouch}</h3>
              <p className="text-sm text-slate-400 mb-4">
                {t.getInTouchDesc}
              </p>
              
              <div className="space-y-4">
                <a href="mailto:emreyildirimbro@outlook.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-purple-600/20 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">{language === 'en' ? 'Email' : 'E-posta'}</div>
                    <div className="text-base font-medium group-hover:text-purple-400 transition-colors">emreyildirimbro@outlook.com</div>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/emre-yıldırım1998/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600/20 group-hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">{language === 'en' ? 'LinkedIn' : 'LinkedIn'}</div>
                    <div className="text-base font-medium group-hover:text-blue-400 transition-colors">@emre-yıldırım1998</div>
                  </div>
                </a>

                <a href="https://www.upwork.com/freelancers/~01cb9aa725a55d5edf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-green-500/20 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.561 13.158c-1.102 0-2.135-.767-3.322-1.453 1.382-2.921 3.631-8.705 3.801-9.179.029-.073.05-.17.05-.254 0-.196-.13-.272-.312-.272h-2.13c-.586 0-.729.403-.873.878 0 0-1.024 3.205-2.477 5.878l-1.017 1.71c-.13.207-.26.26-.455.26h-3.64c-.364 0-.455-.17-.455-.3 0-.17.13-.43.65-1.503.554-1.12 2.696-5.617 2.696-5.617.13-.272.065-.503-.26-.503h-2.43c-.195 0-.324.13-.39.26 0 0-2.153 4.4-3.51 7.12-.52.883-.732 1.29-1.33 1.29-.13 0-.324-.1-.324-.4v-1.54c0-.34-.13-.5-.422-.5h-2.38c-.26 0-.39.17-.39.34 0 .37.52 2.55 2.41 5.54 1.52 2.41 3.64 3.7 6.24 3.7 1.3 0 1.46-.26 1.46-.71v-1.6c0-.5.13-.6.584-.6h1.24c.52 0 .78.2 1.1.7l1.46 2.5c.195.34.52.5.845.5h2.83c.52 0 .65-.26.52-.6-.13-.3-1.04-2.21-2.6-4.16-.26-.34-.13-.44.13-.7.39-.4 2.12-2.02 2.38-2.8.13-.3.065-.54-.195-.54z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">{language === 'en' ? 'Upwork' : 'Upwork'}</div>
                    <div className="text-base font-medium group-hover:text-green-500 transition-colors">{language === 'en' ? 'Hire me on Upwork' : 'Upwork\'dan işe al'}</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://www.upwork.com/freelancers/~01cb9aa725a55d5edf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-base transition-all transform hover:scale-105 whitespace-nowrap shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M18.561 13.158c-1.102 0-2.135-.767-3.322-1.453 1.382-2.921 3.631-8.705 3.801-9.179.029-.073.05-.17.05-.254 0-.196-.13-.272-.312-.272h-2.13c-.586 0-.729.403-.873.878 0 0-1.024 3.205-2.477 5.878l-1.017 1.71c-.13.207-.26.26-.455.26h-3.64c-.364 0-.455-.17-.455-.3 0-.17.13-.43.65-1.503.554-1.12 2.696-5.617 2.696-5.617.13-.272.065-.503-.26-.503h-2.43c-.195 0-.324.13-.39.26 0 0-2.153 4.4-3.51 7.12-.52.883-.732 1.29-1.33 1.29-.13 0-.324-.1-.324-.4v-1.54c0-.34-.13-.5-.422-.5h-2.38c-.26 0-.39.17-.39.34 0 .37.52 2.55 2.41 5.54 1.52 2.41 3.64 3.7 6.24 3.7 1.3 0 1.46-.26 1.46-.71v-1.6c0-.5.13-.6.584-.6h1.24c.52 0 .78.2 1.1.7l1.46 2.5c.195.34.52.5.845.5h2.83c.52 0 .65-.26.52-.6-.13-.3-1.04-2.21-2.6-4.16-.26-.34-.13-.44.13-.7.39-.4 2.12-2.02 2.38-2.8.13-.3.065-.54-.195-.54z"/>
                </svg>
                {language === 'en' ? 'Hire Me on Upwork' : 'Upwork\'dan İşe Al'}
              </a>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10 rounded-2xl border border-white/5">
            {submitStatus?.success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{language === 'en' ? 'Message Sent Successfully' : 'Mesaj Başarıyla Gönderildi'}</h3>
                <p className="text-slate-400 mb-8 max-w-md">
                  {language === 'en' 
                    ? 'Thank you for reaching out! I\'ve received your message and will get back to you within 24 hours.'
                    : 'İletişim için teşekkürler! Mesajınızı aldım ve 24 saat içinde size geri döneceğim.'
                  }
                </p>
                <button 
                  type="button"
                  onClick={() => {
                    setSubmitStatus(null);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2 group"
                >
                  <span>{language === 'en' ? 'Send another message' : 'Başka bir mesaj gönder'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-lg font-bold mb-2">{language === 'en' ? 'Send a Message' : 'Mesaj Gönder'}</h3>
                <p className="text-slate-400 text-xs mb-4">
                  {language === 'en' 
                    ? 'Fill out the form below to get in touch. I\'ll get back to you as soon as possible.'
                    : 'İletişime geçmek için aşağıdaki formu doldurun. En kısa sürede size geri döneceğim.'
                  }
                </p>
                
                {submitStatus && (
                  <div className={`p-4 rounded-xl ${submitStatus.success ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
                    <div className="flex items-start">
                      {submitStatus.success ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                      )}
                      <span className="text-sm">{submitStatus.message}</span>
                    </div>
                  </div>
                )}
                
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-slate-400">{language === 'en' ? 'Full Name' : 'Ad Soyad'}</label>
                      {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
                    </div>
                    <input 
                      type="text" 
                      value={formState.name}
                      onChange={(e) => {
                        setFormState({...formState, name: e.target.value});
                        if (errors.name) setErrors({...errors, name: ''});
                      }}
                      onBlur={() => validateForm()}
                      className={`w-full bg-slate-800/50 border ${errors.name ? 'border-red-500/50' : 'border-slate-700'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all placeholder-slate-500`}
                      placeholder={language === 'en' ? 'John Doe' : 'Mehmet Yıldız'}
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-slate-400">{language === 'en' ? 'Email Address' : 'E-posta Adresi'}</label>
                      {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
                    </div>
                    <input 
                      type="email" 
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({...formState, email: e.target.value});
                        if (errors.email) setErrors({...errors, email: ''});
                      }}
                      onBlur={() => validateForm()}
                      className={`w-full bg-slate-800/50 border ${errors.email ? 'border-red-500/50' : 'border-slate-700'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all placeholder-slate-500`}
                      placeholder={language === 'en' ? 'john@company.com' : 'mehmet@sirket.com'}
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-slate-400">
                        {language === 'en' ? 'Your Message' : 'Mesajınız'} <span className="text-slate-500 text-xs">({formState.message.length}/1000)</span>
                      </label>
                      {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
                    </div>
                    <textarea 
                      rows={5}
                      value={formState.message}
                      onChange={(e) => {
                        if (e.target.value.length <= 1000) {
                          setFormState({...formState, message: e.target.value});
                          if (errors.message) setErrors({...errors, message: ''});
                        }
                      }}
                      onBlur={() => validateForm()}
                      className={`w-full bg-slate-800/50 border ${errors.message ? 'border-red-500/50' : 'border-slate-700'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all placeholder-slate-500 resize-none`}
                      placeholder={language === 'en' 
    ? 'Tell me about your project and how I can help... (10-1000 characters)' 
    : 'Projeniz hakkında ve nasıl yardımcı olabileceğimi anlatın... (10-1000 karakter)'}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !canSubmit}
                    className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${!canSubmit && !isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {language === 'en' ? 'Sending...' : 'Gönderiliyor...'}
                      </>
                    ) : (
                      <>
                        <span>{language === 'en' ? 'Send Message' : 'Mesaj Gönder'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                          <path d="m22 2-7 20-4-9-9-4Z"/>
                          <path d="M22 2 11 13"/>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
