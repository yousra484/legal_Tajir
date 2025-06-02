
import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Phone, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleMap from '@/components/SimpleMap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de l\'email');
      }
      
      toast({
        title: t('contact.toast.success.title'),
        description: t('contact.toast.success.desc'),
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: t('contact.toast.error.title'),
        description: t('contact.toast.error.desc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Contact Form and Info Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {language === 'ar' ? 'أرسل لنا رسالة' : 'Envoyez-nous un message'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">{t('form.name')} *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">{t('form.email')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">
                        {language === 'ar' ? 'الرسالة' : 'Message'} *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={language === 'ar' ? 'رسالتك...' : 'Votre message...'}
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3"
                    >
                      {isSubmitting ? (
                        t('common.loading')
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          {language === 'ar' ? 'إرسال الرسالة' : 'Envoyer le message'}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {language === 'ar' ? 'معلومات الاتصال' : 'Informations de contact'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                   
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">contact@legaltajir.online</p>
                        <p className="text-sm text-gray-500">
                          {language === 'ar' ? 'رد خلال 24 ساعة' : 'Réponse sous 24h'}
                        </p>
                      </div>
                    </div>


                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                        <p className="text-gray-600">+213 xxx xxx xxx</p>
                        <p className="text-sm text-gray-500">
                          {language === 'ar' ? 'متاح 24/7' : 'Disponible 24h/7j'}
                        </p>
                      </div>
                    </div>



                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {language === 'ar' ? 'هاتف' : 'Téléphone'}
                        </h3>
                        <p className="text-gray-600">+213 xxx xxx xxx</p>
                        
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {language === 'ar' ? 'العنوان' : 'Adresse'}
                        </h3>
                        <p className="text-gray-600">
                          {language === 'ar' 
                            ? 'كلية الحقوق - تلمسان\nمنصورة 13000، الجزائر'
                            : 'Faculté de Droit - Tlemcen\nMansourah 13000, Algérie'
                          }
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                
              </div>
            </div>

            {/* Location Map Section */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                  <MapPin className="w-5 h-5 text-gold-600" />
                  {language === 'ar' ? 'موقعنا' : 'Notre localisation'}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' 
                    ? 'اعثر علينا في كلية الحقوق بتلمسان'
                    : 'Retrouvez-nous à la Faculté de Droit de Tlemcen'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl p-6 border border-gold-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-gold-800">
                      {language === 'ar' ? 'تلمسان، الجزائر' : 'Tlemcen, Algérie'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {language === 'ar' 
                        ? 'كلية الحقوق - VJHR+RJG، منصورة'
                        : 'Faculté de Droit - VJHR+RJG, Mansourah'
                      }
                    </p>
                  </div>
                  
                  <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                    <SimpleMap 
                      lat={34.879571}
                      lng={-1.3945041}
                      zoom={17}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
