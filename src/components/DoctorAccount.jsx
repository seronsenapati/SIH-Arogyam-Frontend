import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, Calendar, Shield, LogOut, Award, Edit, Stethoscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar } from './ui/avatar';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { BackButton } from './BackButton';

export function DoctorAccount({ onBack, onLogout, userProfile, onBackToHome }) {
  const [privacySettings, setPrivacySettings] = useState({
    shareProfileData: true,
    emailNotifications: true,
    smsNotifications: true,
    profileVisibility: true,
    patientDataAccess: true
  });

  // Safely extract doctor data with fallbacks
  const getDoctorData = () => {
    if (!userProfile) {
      return {
        name: 'Doctor',
        email: 'N/A',
        doctorId: 'N/A',
        specialization: 'Not specified',
        experience: 'N/A',
        phone: 'N/A',
        qualification: 'N/A',
        registrationNumber: 'N/A',
        clinicAddress: 'N/A',
        languages: ['English'],
        consultationFee: 'N/A',
        rating: 0,
        totalPatients: 0,
        memberSince: 'N/A'
      };
    }

    return {
      name: userProfile.name || 
            (userProfile.firstName || userProfile.lastName ? 
              `Dr. ${userProfile.firstName || ''} ${userProfile.lastName || ''}`.trim() : 
              'Doctor'),
      email: userProfile.email || 'N/A',
      doctorId: userProfile.doctorId || 'N/A',
      specialization: userProfile.specialization || 'Not specified',
      experience: userProfile.experience || 'N/A',
      phone: userProfile.phone || '+91 98765 43210',
      qualification: userProfile.qualification || 'N/A',
      registrationNumber: userProfile.registrationNumber || 'N/A',
      clinicAddress: userProfile.clinicAddress || 'N/A',
      languages: userProfile.languages || ['English'],
      consultationFee: userProfile.consultationFee || 'N/A',
      rating: userProfile.rating || 0,
      totalPatients: userProfile.totalPatients || 0,
      memberSince: userProfile.memberSince || 'N/A'
    };
  };

  const doctorData = getDoctorData();

  const handlePrivacyChange = (setting, value) => {
    setPrivacySettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 p-6">
      <BackButton onBack={onBackToHome} />
      
      <div className="max-w-4xl mx-auto pt-12 space-y-6">
        {/* Header */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
            <div className="flex items-center gap-6">
              <Avatar className="w-20 h-20 border-4 border-white">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Stethoscope className="w-10 h-10 text-white" />
                </div>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">{doctorData.name}</CardTitle>
                <p className="text-green-100">{doctorData.specialization}</p>
                <p className="text-green-200 text-sm">{doctorData.experience} Experience</p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    ID: {doctorData.doctorId}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-300">★</span>
                    <span className="text-white">{doctorData.rating}</span>
                  </div>
                </div>
              </div>
              <Button
                onClick={onBack}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Professional Information */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Award className="w-5 h-5" />
              Professional Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <p className="text-lg text-gray-900">{doctorData.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Qualification</label>
                  <p className="text-lg text-gray-900">{doctorData.qualification}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Registration Number</label>
                  <p className="text-lg text-gray-900">{doctorData.registrationNumber}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Specialization</label>
                  <p className="text-lg text-gray-900">{doctorData.specialization}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Experience</label>
                  <p className="text-lg text-gray-900">{doctorData.experience}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Consultation Fee</label>
                  <p className="text-lg text-gray-900">{doctorData.consultationFee}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Languages</label>
                  <div className="flex gap-2 mt-1">
                    {doctorData.languages.map((lang, index) => (
                      <Badge key={index} variant="outline">{lang}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Total Patients Treated</label>
                  <p className="text-lg text-gray-900">{doctorData.totalPatients}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <User className="w-5 h-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <p className="text-gray-900">{doctorData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-gray-900">{doctorData.phone}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Clinic Address</label>
                  <p className="text-gray-900">{doctorData.clinicAddress}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <div>
                    <label className="text-sm font-medium text-gray-700">Member Since</label>
                    <p className="text-gray-900">{doctorData.memberSince}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Shield className="w-5 h-5" />
              Privacy & Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Share Profile Data</p>
                  <p className="text-sm text-gray-600">Allow other healthcare professionals to view your profile</p>
                </div>
                <Switch
                  checked={privacySettings.shareProfileData}
                  onCheckedChange={(checked) => handlePrivacyChange('shareProfileData', checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive appointment and patient updates via email</p>
                </div>
                <Switch
                  checked={privacySettings.emailNotifications}
                  onCheckedChange={(checked) => handlePrivacyChange('emailNotifications', checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">SMS Notifications</p>
                  <p className="text-sm text-gray-600">Receive urgent notifications via SMS</p>
                </div>
                <Switch
                  checked={privacySettings.smsNotifications}
                  onCheckedChange={(checked) => handlePrivacyChange('smsNotifications', checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Profile Visibility</p>
                  <p className="text-sm text-gray-600">Make your profile visible to patients for booking</p>
                </div>
                <Switch
                  checked={privacySettings.profileVisibility}
                  onCheckedChange={(checked) => handlePrivacyChange('profileVisibility', checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Patient Data Access</p>
                  <p className="text-sm text-gray-600">Access comprehensive patient health records</p>
                </div>
                <Switch
                  checked={privacySettings.patientDataAccess}
                  onCheckedChange={(checked) => handlePrivacyChange('patientDataAccess', checked)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Award className="w-5 h-5" />
              Professional Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-medium text-green-700">{doctorData.totalPatients}</p>
                <p className="text-sm text-gray-600">Total Patients</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-medium text-blue-700">{doctorData.rating}</p>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-2xl font-medium text-purple-700">98%</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" className="flex-1">
                Download Certificates
              </Button>
              <Button 
                variant="destructive" 
                onClick={onLogout}
                className="flex-1"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}