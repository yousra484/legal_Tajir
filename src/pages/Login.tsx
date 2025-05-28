
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { Scale, Mail, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérifier si l'utilisateur existe dans le localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registered-users') || '[]');
    const user = registeredUsers.find(u => u.email === formData.email && u.password === formData.password);

    if (user) {
      // Stocker les informations de l'utilisateur connecté
      localStorage.setItem('legal-tajir-user', JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        activity: user.activity
      }));
      
      // Create some mock data
      const mockOrders = [
        {
          id: 1,
          service: 'السجل التجاري / Registre de commerce',
          description: 'طلب استخراج سجل تجاري جديد',
          status: 'processing',
          date: '2024-01-15'
        },
        {
          id: 2,
          service: 'البطاقة الجبائية / Carte fiscale',
          description: 'طلب الحصول على بطاقة جبائية',
          status: 'completed',
          date: '2024-01-10'
        }
      ];

      const mockConsultations = [
        {
          id: 1,
          subject: 'استشارة حول عقد العمل',
          problem: 'مشكلة في صياغة عقد عمل جديد',
          status: 'completed',
          date: '2024-01-12'
        }
      ];

      localStorage.setItem('legal-tajir-orders', JSON.stringify(mockOrders));
      localStorage.setItem('legal-tajir-consultations', JSON.stringify(mockConsultations));

      toast({
        title: t('login.success'),
        description: t('login.welcome'),
      });

      navigate('/dashboard');
    } else {
      toast({
        title: t('login.error'),
        description: t('login.accountNotFound'),
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Scale className="h-12 w-12 text-gold-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {t('login.title')}
            </h1>
            <p className="text-gray-600">
              {t('login.subtitle')}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t('login.cardTitle')}</CardTitle>
              <CardDescription>
                {t('login.cardDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">{t('login.email')}</Label>
                  <div className="relative">
                    <Mail className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-gray-400`} />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">{t('login.password')}</Label>
                  <div className="relative">
                    <Lock className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-gray-400`} />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold">
                  {t('login.submit')}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    {t('login.noAccount')}{' '}
                    <Link to="/register" className="text-gold-600 hover:text-gold-700 font-medium">
                      {t('login.createAccount')}
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
