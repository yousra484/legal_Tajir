
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { Scale, User, Mail, Lock, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérifier si les mots de passe correspondent
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: t('register.error.password'),
        description: t('register.error.passwordMatch'),
        variant: "destructive",
      });
      return;
    }

    // Vérifier si tous les champs requis sont remplis
    if (formData.name && formData.email && formData.password) {
      // Vérifier si l'email est déjà utilisé
      const registeredUsers = JSON.parse(localStorage.getItem('registered-users') || '[]');
      const existingUser = registeredUsers.find(user => user.email === formData.email);

      if (existingUser) {
        toast({
          title: t('register.error.email'),
          description: t('register.error.emailExists'),
          variant: "destructive",
        });
        return;
      }

      // Créer un nouvel utilisateur
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password, // Dans un vrai projet, il faudrait hasher le mot de passe
        activity: 'Commerce général' // Valeur par défaut
      };

      // Ajouter le nouvel utilisateur à la liste
      registeredUsers.push(newUser);
      localStorage.setItem('registered-users', JSON.stringify(registeredUsers));

      toast({
        title: t('register.success'),
        description: t('register.loginPrompt'),
      });

      // Rediriger vers la page de connexion
      navigate('/login');
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
              {t('register.title')}
            </h1>
            <p className="text-gray-600">
              {t('register.subtitle')}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t('register.cardTitle')}</CardTitle>
              <CardDescription>
                {t('register.cardDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">{t('register.fullName')}</Label>
                  <div className="relative">
                    <User className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-gray-400`} />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t('register.fullName.placeholder')}
                      value={formData.name}
                      onChange={handleChange}
                      className={isRTL ? 'pr-10' : 'pl-10'}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">{t('register.email')}</Label>
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
                  <Label htmlFor="phone">{t('register.phone')}</Label>
                  <div className="relative">
                    <Phone className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-gray-400`} />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={t('register.phone.placeholder')}
                      value={formData.phone}
                      onChange={handleChange}
                      className={isRTL ? 'pr-10' : 'pl-10'}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">{t('register.password')}</Label>
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

                <div>
                  <Label htmlFor="confirmPassword">{t('register.confirmPassword')}</Label>
                  <div className="relative">
                    <Lock className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-gray-400`} />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold">
                  {t('register.submit')}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    {t('register.haveAccount')}{' '}
                    <Link to="/login" className="text-gold-600 hover:text-gold-700 font-medium">
                      {t('register.login')}
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

export default Register;
