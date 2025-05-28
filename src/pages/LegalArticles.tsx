
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Search, Calendar, User } from 'lucide-react';

const LegalArticles = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      titleAr: 'دليل السجل التجاري في الجزائر',
      titleFr: 'Guide du registre de commerce en Algérie',
      excerptAr: 'كل ما تحتاج معرفته حول استخراج وتجديد السجل التجاري',
      excerptFr: 'Tout ce que vous devez savoir sur l\'obtention et le renouvellement du registre de commerce',
      category: 'admin',
      authorAr: 'فريق Legal Tajir',
      authorFr: 'Équipe Legal Tajir',
      date: '2024-01-20',
      readTime: '5',
      content: 'محتوى المقال...'
    },
    {
      id: 2,
      titleAr: 'حقوق وواجبات التاجر',
      titleFr: 'Droits et obligations du commerçant',
      excerptAr: 'الإطار القانوني للأنشطة التجارية في الجزائر',
      excerptFr: 'Le cadre juridique des activités commerciales en Algérie',
      category: 'legal',
      authorAr: 'أ. محمد قانوني',
      authorFr: 'Me. Mohammed Kanouni',
      date: '2024-01-18',
      readTime: '7',
      content: 'محتوى المقال...'
    },
    {
      id: 3,
      titleAr: 'الضرائب على الأنشطة التجارية',
      titleFr: 'Fiscalité des activités commerciales',
      excerptAr: 'فهم النظام الضريبي للمقاولين والتجار',
      excerptFr: 'Comprendre le système fiscal pour les entrepreneurs et commerçants',
      category: 'accounting',
      authorAr: 'أ. فاطمة محاسبة',
      authorFr: 'Mme. Fatima Comptable',
      date: '2024-01-15',
      readTime: '6',
      content: 'محتوى المقال...'
    },
    {
      id: 4,
      titleAr: 'عقود العمل والضمان الاجتماعي',
      titleFr: 'Contrats de travail et sécurité sociale',
      excerptAr: 'كيفية تنظيم علاقات العمل بشكل قانوني',
      excerptFr: 'Comment organiser légalement les relations de travail',
      category: 'legal',
      authorAr: 'د. أحمد قانون العمل',
      authorFr: 'Dr. Ahmed Droit du Travail',
      date: '2024-01-12',
      readTime: '8',
      content: 'محتوى المقال...'
    }
  ];

  const categories = [
    { value: 'all', label: t('legal.categories.all') },
    { value: 'legal', label: t('legal.categories.legal') },
    { value: 'admin', label: t('legal.categories.admin') },
    { value: 'accounting', label: t('legal.categories.accounting') }
  ];

  const filteredArticles = articles.filter(article => {
    const title = language === 'ar' ? article.titleAr : article.titleFr;
    const excerpt = language === 'ar' ? article.excerptAr : article.excerptFr;
    const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'legal': return 'bg-blue-100 text-blue-800';
      case 'admin': return 'bg-green-100 text-green-800';
      case 'accounting': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <BookOpen className="h-16 w-16 text-gold-400 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('legal.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('legal.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-gray-400`} />
                <Input
                  placeholder={t('legal.search.placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={isRTL ? 'pr-10' : 'pl-10'}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className={selectedCategory === category.value ? "bg-gold-500 hover:bg-gold-600 text-black" : ""}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge className={getCategoryColor(article.category)}>
                          {categories.find(c => c.value === article.category)?.label}
                        </Badge>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {language === 'ar' ? article.titleAr : article.titleFr}
                      </CardTitle>
                      <CardDescription>
                        {language === 'ar' ? article.excerptAr : article.excerptFr}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-2'}`}>
                          <User className="h-4 w-4" />
                          <span>{language === 'ar' ? article.authorAr : article.authorFr}</span>
                        </div>
                        <div className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-2'}`}>
                          <Calendar className="h-4 w-4" />
                          <span>{article.readTime} {t('legal.readTime')}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-gold-500 hover:bg-gold-600 text-black">
                        {t('legal.readMore')}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {t('legal.noArticles.title')}
                </h3>
                <p className="text-gray-600">
                  {t('legal.noArticles.desc')}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalArticles;
