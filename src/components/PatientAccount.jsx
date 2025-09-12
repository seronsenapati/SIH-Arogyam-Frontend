import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, Calendar, Shield, LogOut, Gift, Edit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar } from './ui/avatar';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';

export function PatientAccount({ onBack, onLogout, userProfile, onUpdateProfile }) {
  const [privacySettings, setPrivacySettings] = useState({
    shareHealthData: true,
    emailNotifications: true,
    smsNotifications: false,
    profileVisibility: true
  });

  // Safely extract user data with fallbacks
  const getPatientData = () => {
    if (!userProfile) {
      return {
        name: 'Patient',
        email: 'N/A',
        phone: 'N/A',
        age: 'N/A',
        gender: 'Not specified',
        dateOfBirth: 'N/A',
        address: 'N/A',
        emergencyContact: 'N/A',
        bloodGroup: 'N/A',
        dosha: 'Not assessed',
        allergies: 'Not specified',
        memberSince: 'N/A'
      };
    }

    return {
      name: userProfile.name || 
            (userProfile.firstName || userProfile.lastName ? 
              `${userProfile.firstName || ''} ${userProfile.lastName || ''}`.trim() : 
              userProfile.email || 'Patient'),
      email: userProfile.email || 'N/A',
      phone: userProfile.phone || 'N/A',
      age: userProfile.age || (userProfile.meta && userProfile.meta.age) || 'N/A',
      gender: userProfile.gender || 'Not specified',
      dateOfBirth: userProfile.dateOfBirth || 'N/A',
      address: userProfile.address || 'N/A',
      emergencyContact: userProfile.emergencyContact || 'N/A',
      bloodGroup: userProfile.bloodGroup || 'N/A',
      dosha: userProfile.dosha || 'Not assessed',
      allergies: userProfile.allergies || 'Not specified',
      memberSince: userProfile.memberSince || 'N/A'
    };
  };

  const patientData = getPatientData();

  const handlePrivacyChange = (setting, value) => {
    setPrivacySettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
          </Avatar>
          <h1 className="text-3xl text-gray-800 mb-2">{patientData.name}</h1>
          <p className="text-gray-600">Member since {patientData.memberSince}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Personal Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Personal Information
                  </div>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600">Full Name</label>
                      <p className="font-medium">{patientData.name}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Date of Birth</label>
                      <p className="font-medium">{patientData.dateOfBirth}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Gender</label>
                      <p className="font-medium">{patientData.gender}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Blood Group</label>
                      <p className="font-medium">{patientData.bloodGroup}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600">Email</label>
                      <p className="font-medium">{patientData.email}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Phone</label>
                      <p className="font-medium">{patientData.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Emergency Contact</label>
                      <p className="font-medium">{patientData.emergencyContact}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Address</label>
                      <p className="font-medium">{patientData.address}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Information */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Health Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600">Ayurvedic Constitution</label>
                      <p className="font-medium text-green-600">{patientData.dosha}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Known Allergies</label>
                      <p className="font-medium">{patientData.allergies}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600">Total Sessions</label>
                      <p className="font-medium">24 sessions</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Current Treatment</label>
                      <p className="font-medium">Digestive Health Program</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reports and Documents */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  Reports & Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Initial Consultation Report</p>
                      <p className="text-sm text-gray-600">March 15, 2024</p>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Treatment Progress Report</p>
                      <p className="text-sm text-gray-600">August 20, 2024</p>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Dosha Assessment Results</p>
                      <p className="text-sm text-gray-600">January 10, 2024</p>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Privacy Settings */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Privacy Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium">Share Health Data</label>
                      <p className="text-xs text-gray-600">Allow anonymized data for research</p>
                    </div>
                    <Switch 
                      checked={privacySettings.shareHealthData}
                      onCheckedChange={(value) => handlePrivacyChange('shareHealthData', value)}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium">Email Notifications</label>
                      <p className="text-xs text-gray-600">Appointment reminders & updates</p>
                    </div>
                    <Switch 
                      checked={privacySettings.emailNotifications}
                      onCheckedChange={(value) => handlePrivacyChange('emailNotifications', value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium">SMS Notifications</label>
                      <p className="text-xs text-gray-600">Text message alerts</p>
                    </div>
                    <Switch 
                      checked={privacySettings.smsNotifications}
                      onCheckedChange={(value) => handlePrivacyChange('smsNotifications', value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium">Profile Visibility</label>
                      <p className="text-xs text-gray-600">Show in community forums</p>
                    </div>
                    <Switch 
                      checked={privacySettings.profileVisibility}
                      onCheckedChange={(value) => handlePrivacyChange('profileVisibility', value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refer a Friend */}
            <Card className="shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-800">
                  <Gift className="w-5 h-5" />
                  Refer a Friend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-amber-700 mb-4">
                  Share AyurSutra with friends and family. Both you and your friend get special benefits!
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-amber-200">
                    <p className="text-xs text-amber-600 mb-1">Your Referral Code</p>
                    <p className="font-mono font-medium">PRIYA2024</p>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Share Referral Link
                  </Button>
                </div>
                <div className="mt-4 text-xs text-amber-600">
                  <p>🎁 You: Get ₹200 credit</p>
                  <p>🎁 Friend: Get 20% off first session</p>
                </div>
              </CardContent>
            </Card>

            {/* Account Actions */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Update Contact Info
                  </Button>
                  
                  <Separator />
                  
                  <Button 
                    onClick={onLogout}
                    variant="destructive" 
                    className="w-full justify-start"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Log Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}