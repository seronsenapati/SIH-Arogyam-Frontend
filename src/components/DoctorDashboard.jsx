import React, { useState } from 'react';
import { Calendar, Users, Clock, FileText, Star, Video, MessageSquare, Settings, User } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { DoctorAccount } from './DoctorAccount';

export function DoctorDashboard({ userProfile, onBackToHome, onLogout }) {
  const [activeTab, setActiveTab] = useState('calendar');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    userBehaviour: 5,
    consultationQuality: 5,
    overallProfessionalism: 5,
    comments: ''
  });

  // Patient data
  const patients = [
    {
      id: '1',
      name: 'Rahul Sharma',
      age: 32,
      dosha: 'Vata',
      condition: 'Anxiety & Stress',
      profileImage: '/api/placeholder/60/60',
      lastConsultation: '2024-12-10',
      nextAppointment: '2024-12-15 10:00'
    },
    {
      id: '2',
      name: 'Priya Patel',
      age: 28,
      dosha: 'Pitta',
      condition: 'Digestive Issues',
      profileImage: '/api/placeholder/60/60',
      lastConsultation: '2024-12-08',
      nextAppointment: '2024-12-16 14:00'
    },
    {
      id: '3',
      name: 'Amit Kumar',
      age: 45,
      dosha: 'Kapha',
      condition: 'Weight Management',
      profileImage: '/api/placeholder/60/60',
      lastConsultation: '2024-12-05',
      nextAppointment: '2024-12-17 11:00'
    },
    {
      id: '4',
      name: 'Sneha Reddy',
      age: 29,
      dosha: 'Pitta-Vata',
      condition: 'Skin Issues',
      profileImage: '/api/placeholder/60/60',
      lastConsultation: '2024-12-07'
    }
  ];

  // Session data
  const upcomingSessions = [
    {
      id: '1',
      date: '2024-12-15',
      time: '10:00 - 11:00',
      patient: 'Rahul Sharma',
      type: 'Follow-up Consultation',
      status: 'upcoming',
      zoomLink: 'https://zoom.us/j/1234567890'
    },
    {
      id: '2',
      date: '2024-12-15',
      time: '15:00 - 16:00',
      patient: 'Maya Singh',
      type: 'Initial Assessment',
      status: 'upcoming',
      zoomLink: 'https://zoom.us/j/1234567891'
    },
    {
      id: '3',
      date: '2024-12-16',
      time: '14:00 - 15:00',
      patient: 'Priya Patel',
      type: 'Treatment Review',
      status: 'upcoming',
      zoomLink: 'https://zoom.us/j/1234567892'
    },
    {
      id: '4',
      date: '2024-12-17',
      time: '11:00 - 12:00',
      patient: 'Amit Kumar',
      type: 'Progress Evaluation',
      status: 'upcoming',
      zoomLink: 'https://zoom.us/j/1234567893'
    }
  ];

  // Calendar data
  const weeklyCalendar = [
    { date: '2024-12-15', day: 'Mon', sessions: 3 },
    { date: '2024-12-16', day: 'Tue', sessions: 2 },
    { date: '2024-12-17', day: 'Wed', sessions: 4 },
    { date: '2024-12-18', day: 'Thu', sessions: 1 },
    { date: '2024-12-19', day: 'Fri', sessions: 3 },
    { date: '2024-12-20', day: 'Sat', sessions: 2 },
    { date: '2024-12-21', day: 'Sun', sessions: 0 }
  ];

  // Handler functions
  const handleStartSession = (session) => {
    if (session.zoomLink) {
      // Simulate Zoom meeting start
      alert(`Starting Zoom meeting for ${session.patient}...\nMeeting ID: ${session.zoomLink.split('/').pop()}`);
      
      // After some time, show feedback form
      setTimeout(() => {
        setSelectedSession(session);
        setShowFeedbackForm(true);
      }, 3000);
    }
  };

  const handleSubmitFeedback = () => {
    alert('Feedback submitted successfully!');
    setShowFeedbackForm(false);
    setSelectedSession(null);
    setFeedbackData({
      userBehaviour: 5,
      consultationQuality: 5,
      overallProfessionalism: 5,
      comments: ''
    });
  };

  const handleScheduleSession = (patient) => {
    alert(`New session scheduled for ${patient.name}\nDate: Tomorrow, 2:00 PM\nType: Follow-up Consultation`);
  };

  const handleStartTherapySurvey = (patient) => {
    alert(`Therapy survey initiated for ${patient.name}\nSurvey link sent to patient's registered email.`);
  };

  // Safely extract user data with fallbacks
  const getUserName = () => {
    if (!userProfile) return 'Doctor';
    
    if (userProfile.name) {
      return userProfile.name;
    }
    
    if (userProfile.firstName || userProfile.lastName) {
      return `${userProfile.firstName || ''} ${userProfile.lastName || ''}`.trim();
    }
    
    if (userProfile.email) {
      return userProfile.email.split('@')[0];
    }
    
    return 'Doctor';
  };

  const getUserSpecialization = () => {
    if (!userProfile) return 'Ayurveda Specialist';
    
    if (userProfile.specialization) {
      return userProfile.specialization;
    }
    
    return 'Ayurveda Specialist';
  };

  const getUserExperience = () => {
    if (!userProfile) return '5+ Years';
    
    if (userProfile.experience) {
      return userProfile.experience;
    }
    
    return '5+ Years';
  };

  const getUserDoctorId = () => {
    if (!userProfile) return 'DOC-001';
    
    if (userProfile.doctorId) {
      return userProfile.doctorId;
    }
    
    return 'DOC-001';
  };

  // Render account view if requested
  if (showAccount && onBackToHome && onLogout) {
    return (
      <DoctorAccount
        onBack={() => setShowAccount(false)}
        onLogout={onLogout}
        userProfile={userProfile}
        onBackToHome={onBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6 pt-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl text-green-800 mb-2">Doctor Dashboard</h1>
            <p className="text-gray-600">Welcome back, {getUserName()}</p>
            <p className="text-sm text-gray-500">
              {getUserSpecialization()} | {getUserExperience()} Experience | ID: {getUserDoctorId()}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button 
              variant="outline" 
              className="border-orange-300 text-orange-700 hover:bg-orange-50"
              onClick={() => setShowAccount(true)}
            >
              <User className="w-4 h-4 mr-2" />
              Account
            </Button>
            {onLogout && (
              <Button 
                variant="outline" 
                className="border-red-300 text-red-700 hover:bg-red-50"
                onClick={onLogout}
              >
                Logout
              </Button>
            )}
          </div>
        </div>

        {/* My Patients Section */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Users className="w-5 h-5" />
              My Patients
            </CardTitle>
            <CardDescription>Manage your patient consultations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {patients.map((patient) => (
                <Card 
                  key={patient.id} 
                  className="hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
                  onClick={() => setSelectedPatient(patient)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-700 font-medium">
                          {patient.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium">{patient.name}</h4>
                        <p className="text-sm text-gray-600">Age: {patient.age}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Dosha:</span>
                        <Badge variant="outline">{patient.dosha}</Badge>
                      </div>
                      <p className="text-sm text-gray-700">{patient.condition}</p>
                      <p className="text-xs text-gray-500">
                        Last: {new Date(patient.lastConsultation).toLocaleDateString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard Tabs */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="border-b">
                <TabsList className="w-full justify-start h-12 bg-transparent rounded-none">
                  <TabsTrigger value="calendar" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
                    <Calendar className="w-4 h-4 mr-2" />
                    Calendar
                  </TabsTrigger>
                  <TabsTrigger value="upcoming" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
                    <Clock className="w-4 h-4 mr-2" />
                    Upcoming Sessions
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="calendar" className="p-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-green-800">Weekly Calendar View</h3>
                  
                  {/* Weekly Calendar */}
                  <div className="grid grid-cols-7 gap-4">
                    {weeklyCalendar.map((day) => (
                      <div key={day.date} className="text-center">
                        <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          <p className="font-medium text-gray-800">{day.day}</p>
                          <p className="text-sm text-gray-600 mb-2">
                            {new Date(day.date).getDate()}
                          </p>
                          <Badge variant={day.sessions > 0 ? 'default' : 'secondary'}>
                            {day.sessions} sessions
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Today's Sessions */}
                  <div>
                    <h4 className="text-md font-medium text-green-700 mb-3">Today's Sessions</h4>
                    <div className="space-y-3">
                      {upcomingSessions.filter(session => session.date === '2024-12-15').map((session) => (
                        <div key={session.id} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div>
                            <p className="font-medium">{session.patient}</p>
                            <p className="text-sm text-gray-600">{session.type}</p>
                            <p className="text-sm text-blue-600 font-medium">{session.time}</p>
                          </div>
                          <Button 
                            onClick={() => handleStartSession(session)}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            <Video className="w-4 h-4 mr-2" />
                            Start Session
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-green-800">Upcoming Sessions</h3>
                  
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <Card key={session.id} className="border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">{session.patient}</h4>
                              <p className="text-sm text-gray-600">{session.type}</p>
                              <p className="text-sm text-gray-500">
                                {new Date(session.date).toLocaleDateString()} at {session.time}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                Reschedule
                              </Button>
                              <Button 
                                onClick={() => handleStartSession(session)}
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white"
                              >
                                <Video className="w-4 h-4 mr-2" />
                                Join Session
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Patient Profile Dialog */}
        {selectedPatient && (
          <Dialog open={!!selectedPatient} onOpenChange={() => setSelectedPatient(null)}>
            <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Patient Profile - {selectedPatient.name}</DialogTitle>
                <DialogDescription className="text-base">Complete patient information and consultation history</DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                {/* Patient Bio Data */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Name</label>
                      <p className="text-lg font-semibold">{selectedPatient.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Age</label>
                      <p className="text-lg font-semibold">{selectedPatient.age} years</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Primary Dosha</label>
                      <Badge variant="default" className="text-lg py-1 px-3">
                        {selectedPatient.dosha}
                      </Badge>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Condition</label>
                      <p className="text-lg font-semibold">{selectedPatient.condition}</p>
                    </div>
                  </div>
                </div>

                {/* Past Reports & History */}
                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-4 text-xl">Past Reports & History</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="font-semibold text-base">Initial Assessment - {selectedPatient.lastConsultation}</p>
                      <p className="text-sm text-gray-600 mt-2">Primary dosha imbalance identified. Recommended Panchakarma therapy.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="font-semibold text-base">Follow-up - 2024-12-01</p>
                      <p className="text-sm text-gray-600 mt-2">Patient showing positive response to treatment. Continue current regimen.</p>
                    </div>
                  </div>
                </div>

                {/* Patient Calendar */}
                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-4 text-xl">Patient Calendar</h4>
                  <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                    {selectedPatient.nextAppointment ? (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-base">Next Appointment</p>
                          <p className="text-lg text-gray-800">{selectedPatient.nextAppointment}</p>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => alert('Appointment rescheduled successfully!')}
                          className="whitespace-nowrap mt-2 sm:mt-0"
                        >
                          Reschedule
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-gray-600 mb-4">No upcoming appointments</p>
                        <Button 
                          onClick={() => handleScheduleSession(selectedPatient)}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          Schedule Session
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    onClick={() => handleScheduleSession(selectedPatient)}
                    className="bg-green-600 hover:bg-green-700 text-white flex-1 py-6"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Session
                  </Button>
                  <Button 
                    onClick={() => handleStartTherapySurvey(selectedPatient)}
                    variant="outline"
                    className="border-orange-300 text-orange-700 hover:bg-orange-50 flex-1 py-6"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Start Therapy Survey
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Feedback Form Dialog */}
        {showFeedbackForm && selectedSession && (
          <Dialog open={showFeedbackForm} onOpenChange={() => setShowFeedbackForm(false)}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Post-Session Feedback</DialogTitle>
                <DialogDescription>
                  Session with {selectedSession.patient} completed
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">User Behaviour (/10)</label>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={feedbackData.userBehaviour}
                      onChange={(e) => setFeedbackData(prev => ({...prev, userBehaviour: parseInt(e.target.value)}))}
                      className="flex-1"
                    />
                    <span className="w-8 text-center">{feedbackData.userBehaviour}</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Consultation Quality (/10)</label>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={feedbackData.consultationQuality}
                      onChange={(e) => setFeedbackData(prev => ({...prev, consultationQuality: parseInt(e.target.value)}))}
                      className="flex-1"
                    />
                    <span className="w-8 text-center">{feedbackData.consultationQuality}</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Overall Professionalism (/10)</label>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={feedbackData.overallProfessionalism}
                      onChange={(e) => setFeedbackData(prev => ({...prev, overallProfessionalism: parseInt(e.target.value)}))}
                      className="flex-1"
                    />
                    <span className="w-8 text-center">{feedbackData.overallProfessionalism}</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Additional Comments</label>
                  <Textarea
                    value={feedbackData.comments}
                    onChange={(e) => setFeedbackData(prev => ({...prev, comments: e.target.value}))}
                    placeholder="Any additional notes about the session..."
                    rows={3}
                    className="mt-1"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setShowFeedbackForm(false)}>
                    Skip
                  </Button>
                  <Button onClick={handleSubmitFeedback} className="bg-green-600 hover:bg-green-700 text-white">
                    Submit Feedback
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}