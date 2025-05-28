
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Scale, Users, Target, Award, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: t('about.team.founder'),
      role: t('about.team.founder.role'),
      experience: t('about.team.founder.exp'),
      image: '/api/placeholder/150/150'
    },
    {
      name: t('about.team.accountant'),
      role: t('about.team.accountant.role'),
      experience: t('about.team.accountant.exp'),
      image: '/api/placeholder/150/150'
    },
    {
      name: t('about.team.developer'),
      role: t('about.team.developer.role'),
      experience: t('about.team.developer.exp'),
      image: '/api/placeholder/150/150'
    }
  ];

  const values = [
    {
      icon: Scale,
      title: t('about.values.transparency'),
      description: t('about.values.transparency.desc')
    },
    {
      icon: Users,
      title: t('about.values.service'),
      description: t('about.values.service.desc')
    },
    {
      icon: Target,
      title: t('about.values.innovation'),
      description: t('about.values.innovation.desc')
    },
    {
      icon: Award,
      title: t('about.values.quality'),
      description: t('about.values.quality.desc')
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
              <Scale className="h-16 w-16 text-gold-400 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('about.mission.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('about.mission.desc')}
              </p>
             
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>{t('about.vision.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.vision.desc')}
                  </p>
                  
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('about.objectives.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• {t('about.objectives.item1')}</li>
                    <li>• {t('about.objectives.item2')}</li>
                    <li>• {t('about.objectives.item3')}</li>
                    <li>• {t('about.objectives.item4')}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('about.values.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <value.icon className="h-12 w-12 text-gold-500" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
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

export default About;
