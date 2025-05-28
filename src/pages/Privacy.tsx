
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <Shield className="h-16 w-16 text-gold-400 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('privacy.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              
              {/* Data Collection */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-6 w-6 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t('privacy.data.collection.title')}
                  </h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.data.collection.description')}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• {t('privacy.data.collection.list.item1')}</li>
                    <li>• {t('privacy.data.collection.list.item2')}</li>
                    <li>• {t('privacy.data.collection.list.item3')}</li>
                    <li>• {t('privacy.data.collection.list.item4')}</li>
                  </ul>
                  

                </div>
              </div>

              {/* Data Usage */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-6 w-6 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t('privacy.data.usage.title')}
                  </h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.data.usage.description')}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• {t('privacy.data.usage.list.item1')}</li>
                    <li>• {t('privacy.data.usage.list.item2')}</li>
                    <li>• {t('privacy.data.usage.list.item3')}</li>
                    <li>• {t('privacy.data.usage.list.item4')}</li>
                    <li>• {t('privacy.data.usage.list.item5')}</li>
                  </ul>
                  

                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="h-6 w-6 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t('privacy.data.protection.title')}
                  </h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.data.protection.description')}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• {t('privacy.data.protection.list.item1')}</li>
                    <li>• {t('privacy.data.protection.list.item2')}</li>
                    <li>• {t('privacy.data.protection.list.item3')}</li>
                    <li>• {t('privacy.data.protection.list.item4')}</li>
                    <li>• {t('privacy.data.protection.list.item5')}</li>
                  </ul>
                  

                </div>
              </div>

              {/* Rights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('privacy.rights.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('privacy.rights.description')}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• {t('privacy.rights.list.item1')}</li>
                    <li>• {t('privacy.rights.list.item2')}</li>
                    <li>• {t('privacy.rights.list.item3')}</li>
                    <li>• {t('privacy.rights.list.item4')}</li>
                    <li>• {t('privacy.rights.list.item5')}</li>
                  </ul>
                  

                </div>
              </div>

              {/* Contact */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('privacy.contact.title')}
                </h3>
                <p className="text-gray-600">
                  {t('privacy.contact.description')}
                </p>
                <div className="mt-4 space-y-1 text-gray-600">
                  <p>📧 {t('privacy.contact.email')}</p>
                  <p>📞 {t('privacy.contact.phone')}</p>
                  <p>📍 {t('privacy.contact.address')}</p>
                </div>
              </div>

              <div className="mt-8 text-sm text-gray-500 text-center">
                {t('privacy.lastUpdate')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
