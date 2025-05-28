
import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, MessageSquare, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, isRTL, language } = useLanguage();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-2">
            <img 
              src="/lovable-uploads/e1e32036-8e52-491e-8a7e-596cbe197568.png" 
              alt="Legal Tajir" 
              className="h-24 w-auto"
            />
            <p className="text-gray-400">
              {language === 'ar' 
                ? 'شريكك الموثوق لجميع احتياجاتك القانونية والإدارية'
                : 'Votre partenaire de confiance pour tous vos besoins juridiques et administratifs.'
              }
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-4">
              {language === 'ar' ? 'الخدمات' : 'Services'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal-consultation" className="text-gray-400 hover:text-gold-400 transition-colors">
                  {t('nav.legal')}
                </Link>
              </li>
              <li>
                <Link to="/admin-services" className="text-gray-400 hover:text-gold-400 transition-colors">
                  {t('nav.admin')}
                </Link>
              </li>
              <li>
                <Link to="/accounting" className="text-gray-400 hover:text-gold-400 transition-colors">
                  {t('nav.accounting')}
                </Link>
              </li>
              <li>
                <Link to="/legal-articles" className="text-gray-400 hover:text-gold-400 transition-colors">
                  {language === 'ar' ? 'المكتبة القانونية' : 'Articles Juridiques'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-4">
              {language === 'ar' ? 'الشركة' : 'Société'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-gold-400 transition-colors">
                  {language === 'ar' ? 'سياسة الخصوصية' : 'Politique de Confidentialité'}
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-gold-400 transition-colors">
                  {t('nav.dashboard')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-4">{t('contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MessageSquare className="h-4 w-4 text-gold-400" />
                <span>+213 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4 text-gold-400" />
                <span>contact@legaltajir.dz</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 text-gold-400" />
                <p className="text-sm text-gray-400">{isRTL ? 'كلية الحقوق - تلمسان منصورة' : t('footer.faculty')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {language === 'ar' 
              ? '© 2025 Legal Tajir. جميع الحقوق محفوظة.'
              : '© 2025 Legal Tajir. Tous droits réservés.'
            }
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-gold-400 transition-colors">
              {language === 'ar' ? 'شروط الاستخدام' : 'Conditions d\'utilisation'}
            </Link>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              {language === 'ar' ? 'الأحكام القانونية' : 'Mentions légales'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
