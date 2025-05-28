
import React from 'react';
import { FileText, Clock, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const AdminServices = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      title: t('admin.service.rc.title'),
      description: t('admin.service.rc.desc'),
      delay: '7-15 jours',
      price: 'À partir de 15,000 DA',
      documents: [t('admin.doc.birth'), t('admin.doc.residence'), t('admin.doc.diploma')]
    },
    {
      title: t('admin.service.cf.title'),
      description: t('admin.service.cf.desc'),
      delay: '5-10 jours',
      price: 'À partir de 8,000 DA',
      documents: [t('admin.doc.rc'), t('admin.doc.local'), t('admin.doc.photo')]
    },
    {
      title: t('admin.service.cnas.title'),
      description: t('admin.service.cnas.desc'),
      delay: '3-7 jours',
      price: 'À partir de 12,000 DA',
      documents: [t('admin.doc.rc'), t('admin.doc.contracts'), t('admin.doc.salary')]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <FileText className="h-16 w-16 text-gold-400 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('services.admin.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('admin.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-2'} text-sm`}>
                      <Clock className="h-4 w-4 text-gold-500" />
                      <span className="font-medium">{t('admin.service.delay')}</span>
                      <span className="text-gray-600">{service.delay}</span>
                    </div>
                    
                    <div className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-2'} text-sm`}>
                      <DollarSign className="h-4 w-4 text-gold-500" />
                      <span className="font-medium">{t('admin.service.price')}</span>
                      <span className="text-gray-600">{service.price}</span>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">{t('admin.service.docs')}</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.documents.map((doc, idx) => (
                          <li key={idx} className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-2'}`}>
                            <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold">
                      {t('services.cta')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminServices;
