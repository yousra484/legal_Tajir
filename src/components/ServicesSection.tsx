
import React from 'react';
import { Scale, FileText, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Scale,
      title: t('services.legal.title'),
      description: t('services.legal.description'),
      link: '/legal-consultation',
      color: 'from-gold-500 to-gold-600'
    },
    {
      icon: FileText,
      title: t('services.admin.title'),
      description: t('services.admin.description'),
      link: '/admin-services',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calculator,
      title: t('services.accounting.title'),
      description: t('services.accounting.description'),
      link: '/accounting',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Link to={service.link}>
                  <Button 
                    className="w-full bg-gray-900 hover:bg-gold-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:bg-gold-500"
                  >
                    {t('services.cta')}
                    <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">500+</div>
              <div className="text-white/80">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">24h</div>
              <div className="text-white/80">Temps de Réponse</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">100%</div>
              <div className="text-white/80">Confidentialité</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
