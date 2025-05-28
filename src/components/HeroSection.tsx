
import React from 'react';
import { ArrowRight, Scale, FileText, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gold-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-gold-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <div className=" flex justify-center">
            <img 
              src="/images/Legal-tajir-logo.png" 
              alt="Legal Tajir Logo" 
              className="w-96 h-auto transform hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
            />
          </div>
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <Link to="/legal-consultation">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-gold-500/25">
                {t('hero.cta')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>

          {/* Quick Service Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-gold-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Scale className="h-8 w-8 text-gold-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">{t('services.legal.title')}</h3>
              <p className="text-white/60 text-sm">{t('services.legal.description')}</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-gold-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <FileText className="h-8 w-8 text-gold-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">{t('services.admin.title')}</h3>
              <p className="text-white/60 text-sm">{t('services.admin.description')}</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-gold-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Calculator className="h-8 w-8 text-gold-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">{t('services.accounting.title')}</h3>
              <p className="text-white/60 text-sm">{t('services.accounting.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
