
import React, { useState } from 'react';
import { Calculator, Download, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Accounting = () => {
  const { t, language, isRTL } = useLanguage();
  
  // Déterminer la direction du texte
  const textDirection = isRTL ? 'rtl' : 'ltr';
  const [formData, setFormData] = useState({
    revenue: '',
    expenses: '',
    employees: ''
  });
  const [results, setResults] = useState<any>(null);

  const calculateTaxes = () => {
    const revenue = parseFloat(formData.revenue) || 0;
    const expenses = parseFloat(formData.expenses) || 0;
    const employees = parseInt(formData.employees) || 0;

    const profit = revenue - expenses;
    const irg = profit > 0 ? profit * 0.09 : 0; // 9% IRG
    const cnas = employees * 1500; // Example CNAS rate per employee
    const totalTaxes = irg + cnas;
    const netProfit = profit - totalTaxes;

    setResults({
      revenue,
      expenses,
      profit,
      irg,
      cnas,
      totalTaxes,
      netProfit
    });
  };

  const generatePDF = () => {
    // This would generate a PDF report
    console.log('Generating PDF report with results:', results);
    alert(t('accounting.generating_report'));
  };

  return (
    <div className="min-h-screen bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <Calculator className="h-16 w-16 text-gold-400 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('services.accounting.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('accounting.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {t('accounting.calculator_title')}
                </CardTitle>
                <CardDescription>
                  {t('accounting.calculator_desc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="revenue">{t('accounting.input.revenue')} *</Label>
                  <Input
                    id="revenue"
                    type="number"
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    placeholder={t('accounting.placeholder_revenue')}
                    className="mt-1"
                    dir={textDirection}
                  />
                </div>

                <div>
                  <Label htmlFor="expenses">{t('accounting.input.expenses')} *</Label>
                  <Input
                    id="expenses"
                    type="number"
                    value={formData.expenses}
                    onChange={(e) => setFormData({ ...formData, expenses: e.target.value })}
                    placeholder={t('accounting.placeholder_expenses')}
                    className="mt-1"
                    dir={textDirection}
                  />
                </div>

                <div>
                  <Label htmlFor="employees">{t('accounting.input.employees')}</Label>
                  <Input
                    id="employees"
                    type="number"
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    placeholder={t('accounting.placeholder_employees')}
                    className="mt-1"
                    dir={textDirection}
                  />
                </div>

                <Button
                  onClick={calculateTaxes}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3"
                >
                  <Calculator className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('accounting.calculate')}
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {results ? (
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {t('accounting.results')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-600">{t('accounting.result.revenue')}</span>
                        <p className="text-lg font-bold text-gray-900" dir="ltr">
                          {results.revenue.toLocaleString()} {language === 'ar' ? 'دج' : 'DA'}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">{t('accounting.result.expenses')}</span>
                        <p className="text-lg font-bold text-red-600" dir="ltr">
                          -{results.expenses.toLocaleString()} {language === 'ar' ? 'دج' : 'DA'}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">{t('accounting.result.gross_profit')}</span>
                        <p className="text-lg font-bold text-green-600" dir="ltr">
                          {results.profit.toLocaleString()} {language === 'ar' ? 'دج' : 'DA'}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">{t('accounting.result.irg')}</span>
                        <p className="text-lg font-bold text-orange-600" dir="ltr">
                          -{results.irg.toLocaleString()} {language === 'ar' ? 'دج' : 'DA'}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">{t('accounting.result.cnas')}</span>
                        <p className="text-lg font-bold text-orange-600" dir="ltr">
                          -{results.cnas.toLocaleString()} {language === 'ar' ? 'دج' : 'DA'}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">{t('accounting.result.total_taxes')}</span>
                        <p className="text-lg font-bold text-red-600" dir="ltr">
                          -{results.totalTaxes.toLocaleString()} {language === 'ar' ? 'دج' : 'DA'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="text-center">
                        <span className="font-medium text-gray-600">{t('accounting.result.net_profit')}</span>
                        <p className="text-2xl font-bold text-gold-600" dir="ltr">
                          {results.netProfit.toLocaleString()} {language === 'ar' ? 'دج' : 'DA'}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button
                        onClick={generatePDF}
                        className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3"
                      >
                        <Download className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        {t('accounting.download_report')}
                      </Button>
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-3">
                          {t('accounting.tax_info_title')}
                        </h4>
                        <ul className={`space-y-2 text-sm text-gray-600 ${isRTL ? 'list-disc pr-5' : 'list-disc pl-5'}`} dir={textDirection}>
                          <li>{t('accounting.irg_info')}</li>
                          <li>{t('accounting.cnas_info')}</li>
                          <li>{t('accounting.casnos_info')}</li>
                        </ul>
                        <p className="mt-3 text-sm text-gray-500 italic">
                          {t('accounting.tax_note')}
                        </p>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full mt-4"
                      >
                        <FileText className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        {t('accounting.generate_report')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Informations Fiscales
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-gray-600 space-y-3">
                      <p><strong>IRG:</strong> Impôt sur le Revenu Global (9% sur les bénéfices)</p>
                      <p><strong>CNAS:</strong> Caisse Nationale d'Assurances Sociales</p>
                      <p><strong>CASNOS:</strong> Caisse d'Assurance Sociale des Non-Salariés</p>
                    </div>
                    <div className="bg-gold-50 p-4 rounded-lg border border-gold-200">
                      <p className="text-sm text-gold-800">
                        <strong>Note:</strong> Ces calculs sont approximatifs. 
                        Consultez un expert pour une analyse précise de votre situation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accounting;
