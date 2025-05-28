
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, FileText, Clock, Download, Bell } from 'lucide-react';

const Dashboard = () => {
  const { t, language } = useLanguage();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [consultations, setConsultations] = useState([]);

  // Mock data
  const mockOrders = [
    {
      id: 1,
      service: t('dashboard.service.registry'),
      description: t('dashboard.service.registry.new'),
      status: 'processing',
      date: '2024-01-15'
    },
    {
      id: 2,
      service: t('dashboard.service.taxCard'),
      description: t('dashboard.service.taxCard.new'),
      status: 'completed',
      date: '2024-01-10'
    }
  ];

  const mockConsultations = [
    {
      id: 1,
      subject: t('dashboard.consultation.contract'),
      problem: t('dashboard.consultation.contract.desc'),
      status: 'completed',
      date: '2024-01-12'
    }
  ];

  useEffect(() => {
    // Force reload of mock data
    setOrders([]);
    setConsultations([]);


    // Simulate loading user data from localStorage
    const userData = localStorage.getItem('legal-tajir-user');
    const orderData = localStorage.getItem('legal-tajir-orders');
    const consultationData = localStorage.getItem('legal-tajir-consultations');

    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } else {
      // Redirect to login if no user data
      window.location.href = '/login';
    }

    if (orderData) {
      setOrders(JSON.parse(orderData));
    } else {
      setOrders(mockOrders);
    }

    if (consultationData) {
      setConsultations(JSON.parse(consultationData));
    } else {
      setConsultations(mockConsultations);
    }
  }, [language]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'processing': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    return t(`dashboard.status.${status}`);
  };

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t('dashboard.welcome')} {user.name}
            </h1>
            <p className="text-gray-600">
              {t('dashboard.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* User Profile */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-gold-500" />
                    <span>{t('dashboard.profile')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('dashboard.name')}</label>
                    <p className="text-gray-900">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('dashboard.email')}</label>
                    <p className="text-gray-900">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('dashboard.phone')}</label>
                    <p className="text-gray-900">{user.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('dashboard.activity')}</label>
                    <p className="text-gray-900">{user.activity || t('dashboard.notSpecified')}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    {t('dashboard.editProfile')}
                  </Button>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-gold-500" />
                    <span>{t('dashboard.notifications')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        {t('dashboard.notification.reminder')}
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">
                        {t('dashboard.notification.consultation')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Orders and Consultations */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-gold-500" />
                    <span>{t('dashboard.recentOrders')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {orders.length > 0 ? (
                    <div className="space-y-4">
                      {orders.map((order, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-gray-900">{order.service}</h3>
                            <Badge className={`${getStatusColor(order.status)} text-white`}>
                              {getStatusText(order.status)}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{order.description}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{order.date}</span>
                            </span>
                            {order.status === 'completed' && (
                              <Button size="sm" variant="outline">
                                <Download className="h-4 w-4 mr-1" />
                                {t('dashboard.download')}
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      {t('dashboard.noOrders')}
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Recent Consultations */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('dashboard.consultations')}</CardTitle>
                </CardHeader>
                <CardContent>
                  {consultations.length > 0 ? (
                    <div className="space-y-4">
                      {consultations.map((consultation, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-gray-900">{consultation.subject}</h3>
                            <Badge className={`${getStatusColor(consultation.status)} text-white`}>
                              {getStatusText(consultation.status)}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{consultation.problem}</p>
                          <div className="text-sm text-gray-500">
                            <span>{consultation.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      {t('dashboard.noConsultations')}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
