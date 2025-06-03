import React, { useState } from 'react';
import { Scale, Upload, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

// Types d'activités et de problèmes
const activityTypes = [
  { value: 'commerce', label: { fr: 'Commerce', ar: 'تجارة' } },
  { value: 'services', label: { fr: 'Services', ar: 'خدمات' } },
  { value: 'artisanat', label: { fr: 'Artisanat', ar: 'حرفية' } },
  { value: 'agriculture', label: { fr: 'Agriculture', ar: 'فلاحة' } },
  { value: 'industrie', label: { fr: 'Industrie', ar: 'صناعة' } },
  { value: 'autre', label: { fr: 'Autre', ar: 'أخرى' } },
];

const problemTypes = [
  { value: 'contrat', label: { fr: 'Contrat commercial', ar: 'عقد تجاري' } },
  { value: 'emploi', label: { fr: 'Droit du travail', ar: 'قانون العمل' } },
  { value: 'fiscal', label: { fr: 'Fiscalité', ar: 'جباية' } },
  { value: 'social', label: { fr: 'Sécurité sociale', ar: 'الضمان الاجتماعي' } },
  { value: 'litige', label: { fr: 'Litige commercial', ar: 'نزاع تجاري' } },
  { value: 'autre', label: { fr: 'Autre', ar: 'أخرى' } },
];

const LegalConsultation = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    activity: '',
    problemType: '',
    description: '',
    file: null as File | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Consultation request submitted:', formData);
      
      toast({
        title: t('common.success'),
        description: language === 'ar' 
          ? 'سيتم الاتصال بك في أقرب وقت ممكن.' 
          : 'Nous vous contacterons dans les plus brefs délais.',
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        activity: '',
        problemType: '',
        description: '',
        file: null
      });
    } catch (error) {
      toast({
        title: t('common.error'),
        description: language === 'ar'
          ? 'حدث خطأ. يرجى المحاولة مرة أخرى.'
          : 'Une erreur s\'est produite. Veuillez réessayer.',
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      setFormData({ ...formData, file });
    } else {
      toast({
        title: language === 'ar' ? 'ملف كبير جداً' : 'Fichier trop volumineux',
        description: language === 'ar'
          ? 'يجب ألا يتجاوز حجم الملف 5 ميجابايت.'
          : 'La taille du fichier ne doit pas dépasser 5 Mo.',
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

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
              {t('services.legal.title')}
            </h1>
            <p className="text-xl text-white/80">
              {language === 'ar' 
                ? 'احصل على استشارات قانونية مجانية من خبرائنا المتخصصين'
                : 'Obtenez des conseils juridiques gratuits de nos experts spécialisés'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {language === 'ar' ? 'طلب استشارة' : 'Demande de Consultation'}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' 
                    ? 'املأ هذا النموذج للحصول على استشارة قانونية مجانية'
                    : 'Remplissez ce formulaire pour obtenir une consultation juridique gratuite'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{t('form.name')} <span className="text-red-500">*</span></Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder={t('form.name')}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t('form.phone')} <span className="text-red-500">*</span></Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+213 123 456 789"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">{t('form.email')} <span className="text-red-500">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="exemple@email.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="activity">{t('form.activity')} <span className="text-red-500">*</span></Label>
                    <Select
                      value={formData.activity}
                      onValueChange={(value) => handleInputChange('activity', value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder={t('form.activity')} />
                      </SelectTrigger>
                      <SelectContent>
                        {activityTypes.map((activity) => (
                          <SelectItem key={activity.value} value={activity.value}>
                            {activity.label[language as keyof typeof activity.label]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="problemType">{t('form.problem')} <span className="text-red-500">*</span></Label>
                    <Select
                      value={formData.problemType}
                      onValueChange={(value) => handleInputChange('problemType', value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder={t('form.problem')} />
                      </SelectTrigger>
                      <SelectContent>
                        {problemTypes.map((problem) => (
                          <SelectItem key={problem.value} value={problem.value}>
                            {problem.label[language as keyof typeof problem.label]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">{t('form.description')} <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="description"
                      required
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder={t('form.description')}
                      className="mt-1 h-32"
                    />
                  </div>

                  <div>
                    <Label htmlFor="file">{t('form.upload')}</Label>
                    <div className="mt-2">
                      <Input
                        id="file"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById('file')?.click()}
                        className="w-full"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        {t('form.upload')}
                      </Button>
                    </div>
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
                        {t('form.submit')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Panel */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {language === 'ar' ? 'لماذا تختار استشارتنا؟' : 'Pourquoi choisir nos consultations ?'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-black text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {language === 'ar' ? 'مجانية وسرية' : 'Gratuit et confidentiel'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'ar' 
                          ? 'الاستشارة الأولى مجانية مع ضمان السرية.'
                          : 'Première consultation entièrement gratuite avec confidentialité garantie'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-black text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {language === 'ar' ? 'خبراء مؤهلون' : 'Experts qualifiés'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'ar' 
                          ? 'فريق من الخبراء القانونيين ذوي الخبرة في مجال القانون التجاري.'
                          : 'Avocats et juristes spécialisés dans le droit commercial'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-black text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {language === 'ar' ? 'رد سريع' : 'Réponse rapide'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'ar' 
                          ? 'الرد على استشارتك في غضون 24 ساعة.'
                          : 'Réponse dans les 24h ouvrables'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {language === 'ar' ? 'كيف يعمل؟' : 'Comment ça marche ?'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gold-100 text-gold-600 rounded-full p-2">
                        <span className="font-bold">1</span>
                      </div>
                      <div className={language === 'ar' ? 'mr-4' : 'ml-4'}>
                        <h4 className="font-semibold text-gray-900">
                          {language === 'ar' ? 'املأ النموذج' : 'Remplissez le formulaire'}
                        </h4>
                        <p className="mt-1 text-gray-600">
                          {language === 'ar' 
                            ? 'صف مشكلتك بالتفصيل وأرفق المستندات اللازمة.'
                            : 'Décrivez votre problème en détail et joignez les documents nécessaires.'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gold-100 text-gold-600 rounded-full p-2">
                        <span className="font-bold">2</span>
                      </div>
                      <div className={language === 'ar' ? 'mr-4' : 'ml-4'}>
                        <h4 className="font-semibold text-gray-900">
                          {language === 'ar' ? 'تحليل من قبل خبرائنا' : 'Analyse par nos experts'}
                        </h4>
                        <p className="mt-1 text-gray-600">
                          {language === 'ar'
                            ? 'يقوم خبراؤنا بدراسة طلبك خلال 24 إلى 48 ساعة.'
                            : 'Nos juristes examinent votre demande sous 24 à 48 heures.'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gold-100 text-gold-600 rounded-full p-2">
                        <span className="font-bold">3</span>
                      </div>
                      <div className={language === 'ar' ? 'mr-4' : 'ml-4'}>
                        <h4 className="font-semibold text-gray-900">
                          {language === 'ar' ? 'رد مخصص' : 'Réponse personnalisée'}
                        </h4>
                        <p className="mt-1 text-gray-600">
                          {language === 'ar'
                            ? 'احصل على إجابة شاملة مع نصائح مخصصة لموقفك.'
                            : 'Recevez une réponse complète avec des conseils adaptés à votre situation.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {language === 'ar' ? 'اتصل بنا مباشرة' : 'Contactez-nous directement'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    WhatsApp: +213 xxx xxx xxx 
                  </Button>
                  <Button variant="outline" className="w-full">
                    Email: contact@legaltajir.online
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalConsultation;
