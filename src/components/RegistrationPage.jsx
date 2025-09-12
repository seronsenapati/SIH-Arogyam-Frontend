import React from 'react';
import { Stethoscope, User, UserCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function RegistrationPage({ onSelectRole, onNavigate }) {
  return (
    <div className="min-h-screen py-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-800 mb-6">
            Join AyurSutra
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your role to get started on your Ayurvedic wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Doctor Registration */}
          <Card 
            className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-green-300"
            onClick={() => onSelectRole('doctor')}
          >
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-800">Register as Doctor</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Join our network of certified Ayurvedic practitioners and help people discover 
                the power of natural healing.
              </p>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Expand your practice reach</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Connect with patients worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Secure platform with verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Professional profile management</span>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:bg-green-700 transition-colors">
                Register as Doctor
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Consultant Registration */}
          <Card 
            className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-orange-300"
            onClick={() => onSelectRole('consultant')}
          >
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <UserCheck className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-800">Register as Consultant</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Bridge the gap between patients and doctors as a certified Ayurvedic consultant 
                and wellness coordinator.
              </p>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Manage patient-doctor connections</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Schedule consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Assist in diagnosis process</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Flexible working hours</span>
                </div>
              </div>

              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white group-hover:bg-orange-700 transition-colors">
                Register as Consultant
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Patient Registration */}
          <Card 
            className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-blue-300"
            onClick={() => onSelectRole('patient')}
          >
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <User className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-800">Register as Patient</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Begin your journey to natural wellness with personalized Ayurvedic care from 
                verified practitioners.
              </p>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Access to verified doctors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Personalized treatment plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Online & offline consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Health progress tracking</span>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-blue-700 transition-colors">
                Register as Patient
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Already have an account? 
            <span 
              className="text-green-600 cursor-pointer hover:underline ml-1"
              onClick={() => onNavigate('login')}
            >
              Sign in here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}