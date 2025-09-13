import React, { useState } from 'react';
import { User, Calendar, Clock, Activity, Award, TrendingUp, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar } from './ui/avatar';
import { Progress } from './ui/progress';
import { PatientRecoveryGraph } from './PatientRecoveryGraph';

export function PatientDashboard({ 
  onConsultDosha, 
  onOpenCalendar, 
  onOpenUpcoming,
  onViewAccount,
  onShowFeedback,
  userProfile,
  onBackToHome
}) {
  const [consistency] = useState(75); // Example consistency percentage
  const [recovery] = useState(80); // Example recovery percentage

  // Safely extract user name with improved personalization
  const getUserName = () => {
    if (!userProfile) return 'Patient';
    
    // Check if userProfile has a name property
    if (userProfile.name) {
      return userProfile.name.split(' ')[0];
    }
    
    // Check if userProfile has firstName
    if (userProfile.firstName) {
      return userProfile.firstName;
    }
    
    // Fallback to email-based name
    if (userProfile.email) {
      return userProfile.email.split('@')[0];
    }
    
    return 'Patient';
  };

  // Safely extract full name with improved personalization
  const getUserFullName = () => {
    if (!userProfile) return 'Patient';
    
    if (userProfile.name) {
      return userProfile.name;
    }
    
    if (userProfile.firstName || userProfile.lastName) {
      return `${userProfile.firstName || ''} ${userProfile.lastName || ''}`.trim();
    }
    
    if (userProfile.email) {
      return userProfile.email;
    }
    
    return 'Patient';
  };

  // Safely extract age with fallback
  const getUserAge = () => {
    if (!userProfile) return 'N/A';
    
    if (userProfile.age) {
      return userProfile.age;
    }
    
    if (userProfile.meta && userProfile.meta.age) {
      return userProfile.meta.age;
    }
    
    return 'N/A';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-sm">
            <div className="relative">
              <Avatar className="w-20 h-20">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl text-gray-800 mb-2">Welcome back, {getUserName()}!</h1>
              <p className="text-gray-600">Continue your wellness journey with personalized Ayurvedic care</p>
            </div>
            <Button 
              onClick={onConsultDosha}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
            >
              Consult Dosha
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Calendar and Sessions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calendar and Upcoming Sessions Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Calendar */}
              <Card 
                className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={onOpenCalendar}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    Session Calendar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                        <div key={index} className="py-2 font-medium text-gray-600">{day}</div>
                      ))}
                      {Array.from({ length: 31 }, (_, i) => {
                        const date = i + 1;
                        const isToday = date === 15;
                        const hasSession = [3, 10, 17, 24].includes(date);
                        const isCompleted = [3, 10].includes(date);
                        
                        return (
                          <div
                            key={date}
                            className={`
                              py-2 text-sm rounded cursor-pointer
                              ${isToday ? 'bg-blue-500 text-white' : ''}
                              ${hasSession && !isToday ? (isCompleted ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800') : ''}
                              ${!hasSession && !isToday ? 'text-gray-400 hover:bg-gray-100' : ''}
                            `}
                          >
                            {date}
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-200 rounded"></div>
                        <span>Completed</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-200 rounded"></div>
                        <span>Missed</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Sessions */}
              <Card 
                className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={onOpenUpcoming}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Upcoming Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800">Dr. Priya Sharma</h4>
                          <p className="text-sm text-gray-600">AyurSutra Consultation</p>
                        </div>
                        <span className="text-xs text-gray-500">Today</span>
                      </div>
                      <p className="text-sm text-green-600">4:00 PM - 5:00 PM</p>
                    </div>
                    
                    <div className="border-l-4 border-amber-500 pl-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800">Dr. Rajesh Kumar</h4>
                          <p className="text-sm text-gray-600">Panchakarma Session</p>
                        </div>
                        <span className="text-xs text-gray-500">Tomorrow</span>
                      </div>
                      <p className="text-sm text-amber-600">10:00 AM - 11:00 AM</p>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      Schedule New Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress and Recovery */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Consistency Graph */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-600" />
                    Consistency Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Overall Progress</span>
                      <span className="text-lg font-semibold text-purple-600">{consistency}%</span>
                    </div>
                    <Progress value={consistency} className="h-3" />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Diet Compliance</span>
                        <span className="text-green-600">85%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Medicine Schedule</span>
                        <span className="text-amber-600">70%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Session Attendance</span>
                        <span className="text-blue-600">90%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recovery Progress */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Recovery Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <div className="absolute inset-0 bg-green-100 rounded-full"></div>
                        <div className="absolute inset-2 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">{recovery}%</span>
                        </div>
                      </div>
                      <p className="text-green-600 font-medium">You have made it this far!!</p>
                      <p className="text-sm text-gray-600">Almost {recovery}% done</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800 text-center">
                        Keep up the excellent work! Your dedication to the treatment plan is showing great results.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Account and Feedback */}
          <div className="space-y-6">
            {/* Account Section */}
            <Card 
              className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-blue-50 border-blue-200"
              onClick={onViewAccount}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <User className="w-5 h-5" />
                  ACCOUNT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Name</span>
                    <span className="text-sm font-medium">{getUserFullName()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Age</span>
                    <span className="text-sm font-medium">{getUserAge()} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Gender</span>
                    <span className="text-sm font-medium">Female</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Dosha</span>
                    <span className="text-sm font-medium text-green-600">Vata-Pitta</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recovery Progress Graph */}
            <PatientRecoveryGraph className="mb-6" />

            {/* Feedback History */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-600" />
                  Feedback History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-3">Latest Assessment</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Headache</span>
                        <span className="text-sm font-medium text-amber-600">4/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Cough</span>
                        <span className="text-sm font-medium text-green-600">2/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Body Pain</span>
                        <span className="text-sm font-medium text-green-600">1/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Nausea</span>
                        <span className="text-sm font-medium text-red-600">7/10</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={onShowFeedback}
                  >
                    Submit New Feedback
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