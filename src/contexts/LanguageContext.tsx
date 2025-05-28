import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    // Legal Articles Page
    'legal.title': 'المكتبة القانونية',
    'legal.subtitle': 'مقالات ونصائح قانونية لدعم نشاطك التجاري',
    'legal.search.placeholder': 'ابحث في المقالات...',
    'legal.categories.all': 'جميع المقالات',
    'legal.categories.legal': 'قانوني',
    'legal.categories.admin': 'إداري',
    'legal.categories.accounting': 'محاسبة',
    'legal.readMore': 'اقرأ المزيد',
    'legal.noArticles.title': 'لا توجد مقالات',
    'legal.noArticles.desc': 'جرب تغيير كلمات البحث أو الفئة',
    'legal.readTime': 'دقائق قراءة',
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.legal': 'الاستشارة القانونية',
    'nav.admin': 'الخدمات الإدارية',
    'nav.accounting': 'المحاسبة',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.dashboard': 'لوحة التحكم',
    'nav.login': 'تسجيل الدخول',

    // Dashboard
    'dashboard.welcome': 'مرحباً',
    'dashboard.subtitle': 'لوحة التحكم الخاصة بك',
    'dashboard.profile': 'الملف الشخصي',
    'dashboard.name': 'الاسم',
    'dashboard.email': 'البريد الإلكتروني',
    'dashboard.phone': 'الهاتف',
    'dashboard.activity': 'نوع النشاط',
    'dashboard.editProfile': 'تعديل الملف',
    'dashboard.notifications': 'الإشعارات',
    'dashboard.recentOrders': 'الطلبات الحديثة',
    'dashboard.consultations': 'الاستشارات القانونية',
    'dashboard.noOrders': 'لا توجد طلبات حتى الآن',
    'dashboard.download': 'تحميل',
    'dashboard.status.pending': 'قيد الانتظار',
    'dashboard.status.processing': 'قيد المعالجة',
    'dashboard.status.completed': 'مكتمل',
    'dashboard.status.cancelled': 'ملغى',
    'dashboard.notSpecified': 'غير محدد',
    'dashboard.notification.reminder': 'تذكير: تجديد السجل التجاري خلال 30 يوم',
    'dashboard.notification.consultation': 'طلبك للاستشارة القانونية قيد المراجعة',
    'dashboard.noConsultations': 'لا توجد استشارات حتى الآن',

    // Services spécifiques
    'dashboard.service.registry': 'السجل التجاري',
    'dashboard.service.registry.new': 'طلب استخراج سجل تجاري جديد',
    'dashboard.service.taxCard': 'البطاقة الجبائية',
    'dashboard.service.taxCard.new': 'طلب الحصول على بطاقة جبائية',

    // Consultations spécifiques
    'dashboard.consultation.contract': 'استشارة حول عقد العمل',
    'dashboard.consultation.contract.desc': 'مشكلة في صياغة عقد عمل جديد',
    
    // Hero Section
    'hero.title': 'حلول قانونية وإدارية للتجار والمقاولين',
    'hero.subtitle': 'نساعدك في الحصول على الاستشارات القانونية والخدمات الإدارية بسهولة وسرعة',
    'hero.cta': 'ابدأ الآن',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'نقدم مجموعة شاملة من الخدمات لدعم نشاطك التجاري',
    'services.legal.title': 'الاستشارة القانونية',
    'services.legal.description': 'احصل على استشارات قانونية مجانية من خبراء متخصصين',
    'services.admin.title': 'الخدمات الإدارية',
    'services.admin.description': 'خدمات السجل التجاري، الضمان الاجتماعي وغيرها',
    'services.accounting.title': 'المحاسبة المبسطة',
    'services.accounting.description': 'أدوات محاسبية بسيطة مع تقارير ضريبية',
    'services.cta': 'اطلب الخدمة',
    
    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.q1': 'هل الاستشارة القانونية مجانية؟',
    'faq.a1': 'نعم، نوفر استشارات قانونية مجانية للمقاولين والتجار',
    'faq.q2': 'كم يستغرق معالجة طلب السجل التجاري؟',
    'faq.a2': 'عادة ما يستغرق من 7 إلى 15 يوم عمل حسب نوع الطلب',
    'faq.q3': 'هل يمكنني تتبع حالة طلبي؟',
    'faq.a3': 'نعم، يمكنك تتبع جميع طلباتك من خلال لوحة التحكم الخاصة بك',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.description': 'نحن هنا لمساعدتك. تواصل معنا عبر الوسائل التالية',
    'contact.whatsapp': 'واتساب',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.location_title': 'موقعنا',
    'contact.location_desc': 'اعثر علينا في كلية الحقوق بتلمسان',
    
    // Forms
    'form.name': 'الاسم الكامل',
    'form.phone': 'رقم الهاتف',
    'form.email': 'البريد الإلكتروني',
    'form.activity': 'نوع النشاط',
    'form.problem': 'طبيعة المشكلة',
    'form.description': 'وصف المشكلة',
    'form.upload': 'رفع الملفات',
    'form.submit': 'إرسال الطلب',
    'form.required': 'حقل إجباري',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.success': 'تم بنجاح',
    'common.error': 'حدث خطأ',
    'common.cancel': 'إلغاء',
    'common.save': 'حفظ',
    'common.back': 'العودة',
    
    // Footer
    'footer.faculty': 'كلية الحقوق - تلمسان المنصورة',
    
    // Accounting
    'accounting.title': 'حاسبة الضرائب والرسوم',
    'accounting.subtitle': 'احسب التزاماتك الضريبية بسهولة وسرعة',
    'accounting.calculator_title': 'الحاسبة الضريبية',
    'accounting.calculator_desc': 'أدخل بياناتك المالية لحساب التزاماتك الضريبية',
    'accounting.revenue': 'الإيراد السنوي (دج)',
    'accounting.expenses': 'المصاريف (دج)',
    'accounting.employees': 'عدد الموظفين',
    'accounting.calculate': 'احسب',
    'accounting.results': 'نتائج الحساب',
    'accounting.revenue_label': 'الإيراد:',
    'accounting.expenses_label': 'المصاريف:',
    'accounting.gross_profit': 'الربح الإجمالي:',
    'accounting.irg': 'ضريبة الدخل الإجمالي (9%):',
    'accounting.cnas': 'الضمان الاجتماعي/الصندوق الوطني للضمان الاجتماعي:',
    'accounting.total_taxes': 'إجمالي الضرائب:',
    'accounting.net_profit': 'صافي الربح:',
    'accounting.download_report': 'تحميل التقرير PDF',
    'accounting.generate_report': 'إنشاء تقرير مفصل',
    'accounting.placeholder_revenue': 'مثال: 5000000',
    'accounting.placeholder_expenses': 'مثال: 2000000',
    'accounting.placeholder_employees': 'مثال: 3',
    'accounting.tax_info_title': 'معلومات ضريبية',
    'accounting.irg_info': 'IRG: ضريبة الدخل الإجمالي (9% على الأرباح)',
    'accounting.cnas_info': 'CNAS: الصندوق الوطني للتأمينات الاجتماعية',
    'accounting.casnos_info': 'CASNOS: صندوق الضمان الاجتماعي لغير الأجراء',
    'accounting.tax_note': 'ملاحظة: هذه الحسابات تقريبية. يرجى استشارة خبير لتحليل دقيق لحالتك.',
    

    // About Page
    'about.title': 'من نحن',
    'about.subtitle': 'فريق من الخبراء القانونيين والمحاسبين',
    'about.team.title': 'فريقنا',
    'about.team.founder': 'د. أحمد بن علي',
    'about.team.founder.role': 'مؤسس ومدير قانوني',
    'about.team.founder.exp': '15 سنة خبرة في القانون التجاري',
    'about.team.accountant': 'أ. فاطمة محمد',
    'about.team.accountant.role': 'خبيرة محاسبة',
    'about.team.accountant.exp': '12 سنة في المحاسبة والضرائب',
    'about.team.developer': 'م. يوسف خالد',
    'about.team.developer.role': 'مطور تقني',
    'about.team.developer.exp': '8 سنوات في تطوير المنصات',
    'about.values.title': 'قيمنا',
    'about.values.transparency': 'الشفافية',
    'about.values.transparency.desc': 'نوفر معلومات واضحة وشفافة حول جميع خدماتنا وأسعارنا',
    'about.values.service': 'الخدمة المتميزة',
    'about.values.service.desc': 'نسعى لتقديم أفضل خدمة ممكنة لعملائنا',
    'about.values.innovation': 'الابتكار',
    'about.values.innovation.desc': 'نستخدم أحدث التقنيات لتسهيل الوصول للخدمات القانونية',
    'about.values.quality': 'الجودة',
    'about.values.quality.desc': 'نلتزم بأعلى معايير الجودة في جميع خدماتنا',
    'about.team.desc': 'خبراء متخصصون في خدمتكم',
    'about.mission.title': 'مهمتنا',
    'about.mission.desc': 'نسعى إلى تبسيط الوصول للخدمات القانونية والإدارية للمقاولين والتجار في الجزائر من خلال منصة رقمية حديثة ومتطورة',
    'about.vision.title': 'رؤيتنا',
    'about.vision.desc': 'أن نصبح المرجع الأول للخدمات القانونية والإدارية الرقمية في الجزائر، ونساهم في نمو وازدهار الاقتصاد المحلي',
    'about.objectives.title': 'أهدافنا',
    'about.objectives.item1': 'تقليل الوقت والتكلفة للحصول على الخدمات',
    'about.objectives.item2': 'توفير منصة موحدة لجميع الاحتياجات القانونية',
    'about.objectives.item3': 'دعم رقمنة الاقتصاد الجزائري',
    'about.objectives.item4': 'تقديم خدمات عالية الجودة',

    // Contact Form Messages
    'contact.toast.success.title': 'تم إرسال الرسالة',
    'contact.toast.success.desc': 'سنجيبك في أقرب وقت ممكن',
    'contact.toast.error.title': 'خطأ',
    'contact.toast.error.desc': 'حدث خطأ. يرجى المحاولة مرة أخرى',

    // Admin Services
    'admin.subtitle': 'نتولى جميع إجراءاتكم الإدارية',
    'admin.service.rc.title': 'السجل التجاري',
    'admin.service.rc.desc': 'إنشاء وتجديد السجل التجاري',
    'admin.service.cf.title': 'البطاقة الجبائية',
    'admin.service.cf.desc': 'الحصول على البطاقة الجبائية لنشاطك',
    'admin.service.cnas.title': 'CNAS / CASNOS',
    'admin.service.cnas.desc': 'التسجيل في الضمان الاجتماعي والتصريحات',
    'admin.service.delay': 'المدة:',
    'admin.service.price': 'السعر:',
    'admin.service.docs': 'الوثائق المطلوبة:',
    'admin.doc.birth': 'شهادة الميلاد',
    'admin.doc.residence': 'شهادة الإقامة',
    'admin.doc.diploma': 'شهادة/تكوين',
    'admin.doc.rc': 'السجل التجاري',
    'admin.doc.local': 'إثبات المحل',
    'admin.doc.photo': 'صورة شخصية',
    'admin.doc.contracts': 'عقود الموظفين',
    'admin.doc.salary': 'كشوف الرواتب',

    
  
   // Login
   'login.title': 'تسجيل الدخول',
   'login.subtitle': 'مرحباً بعودتك',
   'login.cardTitle': 'تسجيل الدخول إلى حسابك',
   'login.cardDesc': 'أدخل بياناتك للوصول إلى لوحة التحكم',
   'login.email': 'البريد الإلكتروني',
   'login.password': 'كلمة المرور',
   'login.submit': 'تسجيل الدخول',
   'login.noAccount': 'ليس لديك حساب؟',
   'login.createAccount': 'إنشاء حساب جديد',
   'login.error': 'خطأ في تسجيل الدخول',
   'login.errorDesc': 'يرجى التحقق من بريدك الإلكتروني وكلمة المرور.',
   'login.accountNotFound': 'لا يوجد حساب بهذه المعلومات. يرجى التسجيل أولاً.',
// Register
'register.title': 'إنشاء حساب',
'register.subtitle': 'انضم إلينا اليوم',
'register.cardTitle': 'إنشاء حساب جديد',
'register.cardDesc': 'أدخل بياناتك لإنشاء حساب',
'register.fullName': 'الاسم الكامل',
'register.fullName.placeholder': 'أدخل اسمك الكامل',
'register.email': 'البريد الإلكتروني',
'register.phone': 'رقم الهاتف',
'register.phone.placeholder': '+213 XX XXX XXXX',
'register.password': 'كلمة المرور',
'register.confirmPassword': 'تأكيد كلمة المرور',
'register.error.password': 'خطأ في كلمة المرور',
'register.error.passwordMatch': 'كلمات المرور غير متطابقة',
'register.error.email': 'خطأ في البريد الإلكتروني',
'register.error.emailExists': 'هذا البريد الإلكتروني مسجل مسبقاً',
'register.submit': 'إنشاء الحساب',
'register.success': 'تم التسجيل بنجاح',
'register.welcome': 'مرحباً بك في تاجر ليجال',
'register.loginPrompt': 'تم إنشاء حسابك بنجاح. يمكنك الآن تسجيل الدخول.',
'register.haveAccount': 'لديك حساب بالفعل؟',
'register.login': 'تسجيل الدخول',


// Privacy
'privacy.title': 'سياسة الخصوصية',
'privacy.subtitle': 'نحن نأخذ خصوصيتك على محمل الجد',
'privacy.data.collection.title': 'جمع البيانات',
'privacy.data.collection.description': 'نقوم بجمع المعلومات التالية عند استخدامك لخدماتنا:',
'privacy.data.collection.list.item1': 'المعلومات الشخصية: الاسم، البريد الإلكتروني، رقم الهاتف',
'privacy.data.collection.list.item2': 'معلومات النشاط التجاري: نوع النشاط، عنوان المؤسسة',
'privacy.data.collection.list.item3': 'بيانات الاستخدام: صفحات الويب المزارة، الوقت المستغرق',
'privacy.data.collection.list.item4': 'المستندات المرفوعة للاستشارات والخدمات',
'privacy.data.usage.title': 'استخدام البيانات',
'privacy.data.usage.description': 'نستخدم بياناتك للأغراض التالية:',
'privacy.data.usage.list.item1': 'تقديم الخدمات القانونية والإدارية المطلوبة',
'privacy.data.usage.list.item2': 'التواصل معك بخصوص طلباتك واستشاراتك',
'privacy.data.usage.list.item3': 'تحسين جودة خدماتنا وتطوير المنصة',
'privacy.data.usage.list.item4': 'إرسال إشعارات مهمة متعلقة بحسابك',
'privacy.data.usage.list.item5': 'الامتثال للمتطلبات القانونية والتنظيمية',
'privacy.data.protection.title': 'حماية البيانات',
'privacy.data.protection.description': 'نتخذ التدابير التالية لحماية بياناتك:',
'privacy.data.protection.list.item1': 'تشفير البيانات أثناء النقل والتخزين',
'privacy.data.protection.list.item2': 'الوصول المحدود للبيانات للموظفين المخولين فقط',
'privacy.data.protection.list.item3': 'نسخ احتياطية منتظمة وآمنة',
'privacy.data.protection.list.item4': 'مراقبة الأمان والحماية من الاختراق',
'privacy.data.protection.list.item5': 'التحديث المستمر لأنظمة الحماية',
'privacy.rights.title': 'حقوقك',
'privacy.rights.description': 'لديك الحق في:',
'privacy.rights.list.item1': 'الوصول إلى بياناتك الشخصية وتحديثها',
'privacy.rights.list.item2': 'طلب حذف بياناتك',
'privacy.rights.list.item3': 'إيقاف معالجة بياناتك',
'privacy.rights.list.item4': 'نقل بياناتك إلى مزود خدمة آخر',
'privacy.rights.list.item5': 'تقديم شكوى للسلطات المختصة',
'privacy.contact.title': 'تواصل معنا',
'privacy.contact.description': 'لأي استفسارات حول هذه السياسة، يرجى التواصل معنا على:',
'privacy.contact.email': 'privacy@legaltajir.dz',
'privacy.contact.phone': '+213 123 456 789',
'privacy.contact.address': 'كلية الحقوق - تلمسان منصورة', 
'privacy.lastUpdate': 'آخر تحديث: ماي 2025',

  },
   
  fr: {

    // Accounting Page
    
    'accounting.input.revenue': 'Revenus',
    'accounting.input.expenses': 'Dépenses',
    'accounting.input.employees': 'Nombre d\'employés',
   
    'accounting.result.revenue': 'Revenus',
    'accounting.result.expenses': 'Dépenses',
    'accounting.result.gross_profit': 'Bénéfice brut',
    'accounting.result.irg': 'IRG',
    'accounting.result.cnas': 'Cotisations CNAS',
    'accounting.result.total_taxes': 'Total des taxes',
    'accounting.result.net_profit': 'Bénéfice net',
    
    'accounting.generating_report': 'Génération du rapport PDF... (Fonctionnalité à implémenter)',
    // Legal Articles Page
    'legal.title': 'Bibliothèque Juridique',
    'legal.subtitle': 'Articles et conseils juridiques pour soutenir votre activité commerciale',
    'legal.search.placeholder': 'Rechercher des articles...',
    'legal.categories.all': 'Tous les articles',
    'legal.categories.legal': 'Juridique',
    'legal.categories.admin': 'Administratif',
    'legal.categories.accounting': 'Comptabilité',
    'legal.readMore': 'Lire plus',
    'legal.noArticles.title': 'Aucun article trouvé',
    'legal.noArticles.desc': 'Essayez de modifier vos critères de recherche',
    'legal.readTime': 'min de lecture',
    // Navigation
    'nav.home': 'Accueil',
    'nav.legal': 'Consultation Juridique',
    'nav.admin': 'Services Administratifs',
    'nav.accounting': 'Comptabilité',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.dashboard': 'Tableau de Bord',
    'nav.login': 'Connexion',
    
    // Hero Section
    'hero.title': 'Solutions Juridiques et Administratives pour Commerçants',
    'hero.subtitle': 'Nous vous aidons à accéder facilement aux consultations juridiques et services administratifs',
    'hero.cta': 'Commencer',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Une gamme complète de services pour soutenir votre activité commerciale',
    'services.legal.title': 'Consultation Juridique',
    'services.legal.description': 'Obtenez des conseils juridiques gratuits d\'experts spécialisés',
    'services.admin.title': 'Services Administratifs',
    'services.admin.description': 'Registre de commerce, sécurité sociale et autres services',
    'services.accounting.title': 'Comptabilité Simplifiée',
    'services.accounting.description': 'Outils comptables simples avec rapports fiscaux',
    'services.cta': 'Demander le Service',
    
    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.q1': 'La consultation juridique est-elle gratuite ?',
    'faq.a1': 'Oui, nous proposons des consultations juridiques gratuites pour les entrepreneurs et commerçants',
    'faq.q2': 'Combien de temps prend le traitement du registre de commerce ?',
    'faq.a2': 'Généralement entre 7 et 15 jours ouvrables selon le type de demande',
    'faq.q3': 'Puis-je suivre l\'état de ma demande ?',
    'faq.a3': 'Oui, vous pouvez suivre toutes vos demandes via votre tableau de bord personnel',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.description': 'Nous sommes là pour vous aider. Contactez-nous par les moyens suivants',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.address': 'Adresse',
    'accounting.title': 'Calculateur Fiscal',
    'accounting.subtitle': 'Calculez facilement vos impôts et charges sociales',
    'accounting.calculator_title': 'Calculateur Fiscal',
    'accounting.calculator_desc': 'Entrez vos données financières pour calculer vos obligations fiscales',
    'accounting.revenue': 'Chiffre d\'affaires annuel (DA)',
    'accounting.expenses': 'Charges et dépenses (DA)',
    'accounting.employees': 'Nombre d\'employés',
    'accounting.calculate': 'Calculer',
    'accounting.results': 'Résultats du Calcul',
    'accounting.revenue_label': 'Chiffre d\'affaires:',
    'accounting.expenses_label': 'Charges:',
    'accounting.gross_profit': 'Bénéfice brut:',
    'accounting.irg': 'IRG (9%):',
    'accounting.cnas': 'CNAS/CASNOS:',
    'accounting.total_taxes': 'Total Impôts:',
    'accounting.net_profit': 'Bénéfice net:',
    'accounting.download_report': 'Télécharger le Rapport PDF',
    'accounting.generate_report': 'Générer un rapport détaillé',
    'accounting.placeholder_revenue': 'Ex: 5000000',
    'accounting.placeholder_expenses': 'Ex: 2000000',
    'accounting.placeholder_employees': 'Ex: 3',
    'accounting.tax_info_title': 'Informations Fiscales',
    'accounting.irg_info': 'IRG: Impôt sur le Revenu Global (9% sur les bénéfices)',
    'accounting.cnas_info': 'CNAS: Caisse Nationale d\'Assurances Sociales',
    'accounting.casnos_info': 'CASNOS: Caisse d\'Assurance Sociale des Non-Salariés',
    'accounting.tax_note': 'Note: Ces calculs sont approximatifs. Consultez un expert pour une analyse précise de votre situation.',

    // About Page
    'about.title': 'À Propos de Nous',
    'about.subtitle': 'Une équipe d\'experts juridiques et comptables',
    'about.team.title': 'Notre Équipe',
    'about.team.founder': 'Dr. Ahmed Ben Ali',
    'about.team.founder.role': 'Fondateur et Directeur Juridique',
    'about.team.founder.exp': '15 ans d\'expérience en droit commercial',
    'about.team.accountant': 'Mme. Fatima Mohamed',
    'about.team.accountant.role': 'Experte Comptable',
    'about.team.accountant.exp': '12 ans en comptabilité et fiscalité',
    'about.team.developer': 'M. Youssef Khaled',
    'about.team.developer.role': 'Développeur Technique',
    'about.team.developer.exp': '8 ans en développement de plateformes',
    'about.values.title': 'Nos Valeurs',
    'about.values.transparency': 'Transparence',
    'about.values.transparency.desc': 'Nous fournissons des informations claires et transparentes sur tous nos services et tarifs',
    'about.values.service': 'Service d\'Excellence',
    'about.values.service.desc': 'Nous nous efforçons de fournir le meilleur service possible à nos clients',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Nous utilisons les dernières technologies pour faciliter l\'accès aux services juridiques',
    'about.values.quality': 'Qualité',
    'about.values.quality.desc': 'Nous nous engageons à respecter les plus hauts standards de qualité dans tous nos services',
    'about.team.desc': 'Des experts spécialisés à votre service',
    'about.mission.title': 'Notre Mission',
    'about.mission.desc': 'Nous simplifions l\'accès aux services juridiques et administratifs pour les entrepreneurs et commerçants algériens grâce à une plateforme numérique moderne et innovante.',
    'about.vision.title': 'Notre Vision',
    'about.vision.desc': 'Devenir la référence en matière de services juridiques et administratifs numériques en Algérie, et contribuer à la croissance de l\'économie locale.',
    'about.objectives.title': 'Nos Objectifs',
    'about.objectives.item1': 'Réduire le temps et le coût d\'accès aux services',
    'about.objectives.item2': 'Fournir une plateforme unifiée pour tous les besoins juridiques',
    'about.objectives.item3': 'Soutenir la numérisation de l\'économie algérienne',
    'about.objectives.item4': 'Offrir des services de haute qualité',

    // Contact Form Messages
    'contact.toast.success.title': 'Message envoyé',
    'contact.toast.success.desc': 'Nous vous répondrons dans les plus brefs délais.',
    'contact.toast.error.title': 'Erreur',
    'contact.toast.error.desc': 'Une erreur s\'est produite. Veuillez réessayer.',

    // Admin Services
    'admin.subtitle': 'Nous nous occupons de toutes vos démarches administratives',
    'admin.service.rc.title': 'Registre de Commerce',
    'admin.service.rc.desc': 'Création et renouvellement du registre de commerce',
    'admin.service.cf.title': 'Carte Fiscale',
    'admin.service.cf.desc': 'Obtention de la carte fiscale pour votre activité',
    'admin.service.cnas.title': 'CNAS / CASNOS',
    'admin.service.cnas.desc': 'Inscription sécurité sociale et déclarations',
    'admin.service.delay': 'Délai:',
    'admin.service.price': 'Prix:',
    'admin.service.docs': 'Documents requis:',
    'admin.doc.birth': 'Acte de naissance',
    'admin.doc.residence': 'Certificat de résidence',
    'admin.doc.diploma': 'Diplôme/Formation',
    'admin.doc.rc': 'Registre de commerce',
    'admin.doc.local': 'Justificatif local',
    'admin.doc.photo': 'Photo d\'identité',
    'admin.doc.contracts': 'Contrats employés',
    'admin.doc.salary': 'Bulletins salaires',

    // Forms
    'form.name': 'Votre nom complet',
    'form.phone': 'Votre numéro de téléphone',
    'form.email': 'Votre adresse email',
    'form.activity': 'Secteur d\'activité',
    'form.problem': 'Type de problème juridique',
    'form.description': 'Décrivez votre situation',
    'form.upload': 'Joindre des documents',
    'form.submit': 'Envoyer ma demande',
    'form.required': 'Champ obligatoire',


     // Login
     'login.title': 'Connexion',
     'login.subtitle': 'Bon retour parmi nous',
     'login.cardTitle': 'Connectez-vous à votre compte',
     'login.cardDesc': 'Entrez vos identifiants pour accéder à votre tableau de bord',
     'login.email': 'Adresse email',
     'login.password': 'Mot de passe',
     'login.submit': 'Se connecter',
     'login.error': 'Erreur de connexion',
     'login.errorDesc': 'Veuillez vérifier votre email et mot de passe.',
     'login.accountNotFound': 'Aucun compte trouvé avec ces informations. Veuillez vous inscrire d\'abord.',
     'login.noAccount': 'Vous n\'avez pas de compte ?',
     'login.createAccount': 'Créer un compte',

     // Register
     'register.title': 'Inscription', 
     'register.subtitle': 'Rejoignez-nous aujourd\'hui',
     'register.cardTitle': 'Créer un nouveau compte',
     'register.cardDesc': 'Entrez vos informations pour créer votre compte',
     'register.fullName': 'Nom complet',
     'register.fullName.placeholder': 'Entrez votre nom complet',
     'register.email': 'Adresse email',
     'register.phone': 'Numéro de téléphone',
     'register.phone.placeholder': '+213 XX XXX XXXX',
     'register.password': 'Mot de passe',
     'register.confirmPassword': 'Confirmer le mot de passe',
     'register.error.password': 'Erreur de mot de passe',
     'register.error.passwordMatch': 'Les mots de passe ne correspondent pas',
     'register.error.email': 'Erreur d\'email',
     'register.error.emailExists': 'Cet email est déjà utilisé',
     'register.submit': 'Créer mon compte',
     'register.haveAccount': 'Vous avez déjà un compte ?',
     'register.login': 'Se connecter',

     // Footer
    'footer.faculty': 'Faculté de droit - Tlemcen Mansourah',

     // Privacy
     'privacy.title': 'Politique de Confidentialité',
     'privacy.subtitle': 'Nous prenons votre vie privée au sérieux',
     'privacy.data.collection.title': 'Collecte des Données',
     'privacy.data.collection.description': 'Nous collectons les informations suivantes lors de votre utilisation de nos services :',
     'privacy.data.collection.list.item1': 'Informations personnelles : nom, email, téléphone',
     'privacy.data.collection.list.item2': 'Informations d\'activité : type d\'activité, adresse',
     'privacy.data.collection.list.item3': 'Données d\'utilisation : pages visitées, temps passé',
     'privacy.data.collection.list.item4': 'Documents téléchargés pour consultations et services',
     'privacy.data.usage.title': 'Utilisation des Données',
     'privacy.data.usage.description': 'Nous utilisons vos données pour :',
     'privacy.data.usage.list.item1': 'Fournir les services juridiques et administratifs',
     'privacy.data.usage.list.item2': 'Communiquer concernant vos demandes',
     'privacy.data.usage.list.item3': 'Améliorer nos services et développer la plateforme',
     'privacy.data.usage.list.item4': 'Envoyer des notifications importantes',
     'privacy.data.usage.list.item5': 'Respecter les obligations légales',
     'privacy.data.protection.title': 'Protection des Données',
     'privacy.data.protection.description': 'Nous prenons les mesures suivantes pour protéger vos données :',
     'privacy.data.protection.list.item1': 'Chiffrement des données en transit et au repos',
     'privacy.data.protection.list.item2': 'Accès limité aux employés autorisés',
     'privacy.data.protection.list.item3': 'Sauvegardes régulières et sécurisées',
     'privacy.data.protection.list.item4': 'Surveillance de sécurité et protection contre les intrusions',
     'privacy.data.protection.list.item5': 'Mise à jour continue des systèmes de protection',
     'privacy.rights.title': 'Vos Droits',
     'privacy.rights.description': 'Vous avez le droit de :',
     'privacy.rights.list.item1': 'Accéder et mettre à jour vos données personnelles',
     'privacy.rights.list.item2': 'Demander la suppression de vos données',
     'privacy.rights.list.item3': 'Arrêter le traitement de vos données',
     'privacy.rights.list.item4': 'Transférer vos données vers un autre prestataire',
     'privacy.rights.list.item5': 'Porter plainte auprès des autorités compétentes',
     'privacy.contact.title': 'Nous Contacter',
     'privacy.contact.description': 'Pour toute question concernant cette politique, contactez-nous :',
     'privacy.contact.email': 'privacy@legaltajir.dz',
     'privacy.contact.phone': '+213 123 456 789',
     'privacy.contact.address': 'Faculté de droit - Tlemcen Mansourah',
     'privacy.lastUpdate': 'Dernière mise à jour : Mai 2025',


     // Dashboard
'dashboard.welcome': 'Bienvenue',
'dashboard.subtitle': 'Votre tableau de bord',
'dashboard.profile': 'Profil',
'dashboard.name': 'Nom',
'dashboard.email': 'Email',
'dashboard.phone': 'Téléphone',
'dashboard.activity': 'Type d\'activité',
'dashboard.editProfile': 'Modifier le profil',
'dashboard.notifications': 'Notifications',
'dashboard.recentOrders': 'Commandes récentes',
'dashboard.consultations': 'Consultations juridiques',
'dashboard.noOrders': 'Aucune commande pour le moment',
'dashboard.download': 'Télécharger',
'dashboard.status.pending': 'En attente',
'dashboard.status.processing': 'En cours',
'dashboard.status.completed': 'Terminé',
'dashboard.status.cancelled': 'Annulé',
'dashboard.notSpecified': 'Non spécifié',
'dashboard.notification.reminder': 'Rappel : Renouvellement du registre de commerce dans 30 jours',
'dashboard.notification.consultation': 'Votre demande de consultation juridique est en cours d\'examen',
'dashboard.noConsultations': 'Aucune consultation pour le moment',

     // Services spécifiques
     'dashboard.service.registry': 'Registre de commerce',
     'dashboard.service.registry.new': 'Demande d\'extraction d\'un nouveau registre de commerce',
     'dashboard.service.taxCard': 'Carte fiscale',
     'dashboard.service.taxCard.new': 'Demande d\'obtention d\'une carte fiscale',

     // Consultations spécifiques
     'dashboard.consultation.contract': 'Consultation sur contrat de travail',
     'dashboard.consultation.contract.desc': 'Problème de rédaction d\'un nouveau contrat de travail',

  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('legal-tajir-language') as Language;
    if (savedLanguage && ['ar', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('legal-tajir-language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};