
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Scale, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('legal-tajir-user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [location]);

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/legal-consultation', label: t('nav.legal') },
    { href: '/admin-services', label: t('nav.admin') },
    { href: '/accounting', label: t('nav.accounting') },
    { href: '/legal-articles', label: language === 'ar' ? 'المكتبة القانونية' : 'Articles Juridiques' },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'fr' : 'ar');
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem('legal-tajir-user');
    localStorage.removeItem('legal-tajir-orders');
    localStorage.removeItem('legal-tajir-consultations');
    setUser(null);
    toast({
      title: language === 'ar' ? 'تم تسجيل الخروج بنجاح' : 'Déconnexion réussie',
      description: language === 'ar' ? 'نراكم قريباً' : 'À bientôt',
    });
    window.location.href = '/';
  };

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gold-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/e1e32036-8e52-491e-8a7e-596cbe197568.png" 
              alt="Legal Tajir" 
              className="h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                  isActivePath(item.href) 
                    ? 'text-gold-400 border-b-2 border-gold-400' 
                    : 'text-white/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-white hover:text-gold-400 hover:bg-gold-400/10"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>
            
            {user ? (
              <div className="flex items-center space-x-3">
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm" className="text-white hover:text-gold-400">
                    <User className="h-4 w-4 mr-1" />
                    {user.name?.split(' ')[0] || (language === 'ar' ? 'المستخدم' : 'Utilisateur')}
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-red-400"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  {language === 'ar' ? 'خروج' : 'Déconnexion'}
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-white hover:text-gold-400">
                    {language === 'ar' ? 'دخول' : 'Connexion'}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-black font-semibold">
                    {language === 'ar' ? 'تسجيل' : 'S\'inscrire'}
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-gold-400"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold-500/20">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-gold-400 px-2 py-1 rounded ${
                    isActivePath(item.href) 
                      ? 'text-gold-400 bg-gold-400/10' 
                      : 'text-white/80'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-3 border-t border-gold-500/20">
                <Button
                  onClick={toggleLanguage}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-gold-400"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  {language.toUpperCase()}
                </Button>
                
                {user ? (
                  <div className="flex items-center space-x-2">
                    <Link to="/dashboard">
                      <Button variant="ghost" size="sm" className="text-white hover:text-gold-400">
                        {t('nav.dashboard')}
                      </Button>
                    </Link>
                    <Button
                      onClick={handleLogout}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:text-red-400"
                    >
                      {language === 'ar' ? 'خروج' : 'Déconnexion'}
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Link to="/login">
                      <Button variant="ghost" size="sm" className="text-white hover:text-gold-400">
                        {language === 'ar' ? 'دخول' : 'Connexion'}
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button className="bg-gold-500 hover:bg-gold-600 text-black font-semibold">
                        {language === 'ar' ? 'تسجيل' : 'S\'inscrire'}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
