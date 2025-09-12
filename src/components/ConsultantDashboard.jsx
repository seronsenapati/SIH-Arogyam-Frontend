import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, FileText, AlertCircle, Video, Stethoscope, ChevronDown, ChevronRight, Star, User, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Alert, AlertDescription } from './ui/alert';
import { DiagnosisPage } from './DiagnosisPage';

export function ConsultantDashboard({ userProfile, onBackToHome, onLogout }) {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showDiagnosis, setShowDiagnosis] = useState(false);
  const [showDocCodes, setShowDocCodes] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showDiagnosisPage, setShowDiagnosisPage] = useState(false);
  const [assignDocCode, setAssignDocCode] = useState('');
  const [grievanceForm, setGrievanceForm] = useState('');
  const [showGrievance, setShowGrievance] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const todaySlots = [
    { id: '1', time: '09:00 - 10:00', date: 'Today', status: 'available' },
    { id: '2', time: '10:00 - 11:00', date: 'Today', status: 'booked', patient: { name: 'Rahul Sharma', docCode: 'DR123', dosha: 'Vata', age: 32, condition: 'Anxiety' } },
    { id: '3', time: '11:00 - 12:00', date: 'Today', status: 'available' },
    { id: '4', time: '14:00 - 15:00', date: 'Today', status: 'booked', patient: { name: 'Priya Patel', docCode: 'DR272', dosha: 'Pitta', age: 28, condition: 'Digestive Issues' } },
    { id: '5', time: '15:00 - 16:00', date: 'Today', status: 'late' },
    { id: '6', time: '16:00 - 17:00', date: 'Today', status: 'available' },
  ];

  const tomorrowSlots = [
    { id: '7', time: '09:00 - 10:00', date: 'Tomorrow', status: 'available' },
    { id: '8', time: '10:00 - 11:00', date: 'Tomorrow', status: 'available' },
    { id: '9', time: '11:00 - 12:00', date: 'Tomorrow', status: 'booked', patient: { name: 'Amit Kumar', docCode: 'DR888', dosha: 'Kapha', age: 45, condition: 'Weight Management' } },
    { id: '10', time: '14:00 - 15:00', date: 'Tomorrow', status: 'available' },
    { id: '11', time: '15:00 - 16:00', date: 'Tomorrow', status: 'available' },
    { id: '12', time: '16:00 - 17:00', date: 'Tomorrow', status: 'available' },
  ];

  const waitingPatients = [
    { id: '1', name: 'Anjali Mehta', age: 35, condition: 'Stress Management', dosha: 'Vata-Pitta', waitingTime: '15 mins', profileImage: '/api/placeholder/40/40' },
    { id: '2', name: 'Vikram Singh', age: 42, condition: 'Joint Pain', dosha: 'Vata-Kapha', waitingTime: '8 mins', profileImage: '/api/placeholder/40/40' },
    { id: '3', name: 'Sneha Reddy', age: 29, condition: 'Skin Issues', dosha: 'Pitta', waitingTime: '22 mins', profileImage: '/api/placeholder/40/40' },
    { id: '4', name: 'Rajesh Gupta', age: 38, condition: 'Sleep Disorders', dosha: 'Vata', waitingTime: '5 mins', profileImage: '/api/placeholder/40/40' },
  ];

  const doctorCodes = [
    { name: 'Dr. Sharma', code: '123', specialization: 'Panchakarma' },
    { name: 'Dr. Sahani', code: '272', specialization: 'Digestive Health' },
    { name: 'Dr. Ayush', code: '888', specialization: 'Weight Management' },
    { name: 'Dr. Priya', code: '456', specialization: 'Skin & Beauty' },
    { name: 'Dr. Kumar', code: '789', specialization: 'Respiratory Health' },
    { name: 'Dr. Meena', code: '555', specialization: 'Mental Wellness' },
  ];

  const handleTimeSlotClick = (slot) => {
    if (slot.status === 'late') {
      return;
    }
    
    setSelectedTimeSlot(slot);
    
    // Start 15-minute timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    const newTimeoutId = setTimeout(() => {
      setSelectedTimeSlot(prev => prev ? { ...prev, status: 'late' } : null);
    }, 15 * 60 * 1000); // 15 minutes
    
    setTimeoutId(newTimeoutId);
  };

  const handleLiveClassEnd = () => {
    setShowDiagnosis(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  const handleAssignDoctor = (patient) => {
    if (!assignDocCode) {
      alert('Please enter a doctor code');
      return;
    }
    
    const doctor = doctorCodes.find(doc => doc.code === assignDocCode);
    if (!doctor) {
      alert('Invalid doctor code');
      return;
    }
    
    // Show confirmation popup
    alert(`Consultation booked successfully!\n\nPatient: ${patient.name}\nDoctor: ${doctor.name}\nDate: Tomorrow\nTime: 10:00 AM - 11:00 AM`);
    
    setSelectedPatient(null);
    setAssignDocCode('');
  };

  const upcomingSessions = [
    { date: '2024-12-15', time: '10:00 AM', patient: 'Rahul Sharma', type: 'Follow-up' },
    { date: '2024-12-16', time: '2:00 PM', patient: 'Priya Patel', type: 'Initial Consultation' },
    { date: '2024-12-17', time: '11:00 AM', patient: 'Amit Kumar', type: 'Progress Review' },
  ];

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  if (showDiagnosisPage) {
    return (
      <DiagnosisPage
        onBack={() => setShowDiagnosisPage(false)}
        onBackToHome={onBackToHome || (() => setShowDiagnosisPage(false))}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6 pt-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl text-green-800 mb-2">Consultant Dashboard</h1>
            <p className="text-gray-600">Welcome back, {userProfile.name}</p>
            <p className="text-sm text-gray-500">ID: {userProfile.consultantId} | {userProfile.specialization}</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setShowGrievance(true)} variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
              <FileText className="w-4 h-4 mr-2" />
              Grievance Form
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              <User className="w-4 h-4 mr-2" />
              Account
            </Button>
            {onLogout && (
              <Button 
                variant="outline" 
                className="border-red-300 text-red-700 hover:bg-red-50"
                onClick={onLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            )}
          </div>
        </div>

        {/* Schedule Appointments */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Calendar className="w-5 h-5" />
              Schedule Your Appointments
            </CardTitle>
            <CardDescription>Manage your consultation time slots</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Today's Slots */}
              <div>
                <h3 className="mb-4 text-green-700">Today's Slots</h3>
                <div className="space-y-2">
                  {todaySlots.map((slot) => (
                    <div
                      key={slot.id}
                      onClick={() => handleTimeSlotClick(slot)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        slot.status === 'available' 
                          ? 'border-green-200 bg-green-50 hover:bg-green-100' 
                          : slot.status === 'booked'
                          ? 'border-blue-200 bg-blue-50 hover:bg-blue-100'
                          : slot.status === 'late'
                          ? 'border-red-200 bg-red-50 cursor-not-allowed'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{slot.time}</span>
                        <Badge variant={
                          slot.status === 'available' ? 'secondary' : 
                          slot.status === 'booked' ? 'default' :
                          slot.status === 'late' ? 'destructive' : 'outline'
                        }>
                          {slot.status === 'late' ? 'LATE' : slot.status}
                        </Badge>
                      </div>
                      {slot.patient && (
                        <p className="text-sm text-gray-600 mt-1">
                          {slot.patient.name} - {slot.patient.condition}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tomorrow's Slots */}
              <div>
                <h3 className="mb-4 text-green-700">Tomorrow's Slots</h3>
                <div className="space-y-2">
                  {tomorrowSlots.map((slot) => (
                    <div
                      key={slot.id}
                      onClick={() => handleTimeSlotClick(slot)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        slot.status === 'available' 
                          ? 'border-green-200 bg-green-50 hover:bg-green-100' 
                          : slot.status === 'booked'
                          ? 'border-blue-200 bg-blue-50 hover:bg-blue-100'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{slot.time}</span>
                        <Badge variant={slot.status === 'available' ? 'secondary' : 'default'}>
                          {slot.status}
                        </Badge>
                      </div>
                      {slot.patient && (
                        <p className="text-sm text-gray-600 mt-1">
                          {slot.patient.name} - {slot.patient.condition}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Assign Patients */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Users className="w-5 h-5" />
                Assign Patients
              </CardTitle>
              <CardDescription>Patients waiting for consultation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {waitingPatients.map((patient) => (
                  <div key={patient.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-700 font-medium">
                            {patient.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium">{patient.name}</h4>
                          <p className="text-sm text-gray-600">{patient.condition}</p>
                          <p className="text-xs text-gray-500">Age: {patient.age} | Dosha: {patient.dosha}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-orange-600 font-medium">Waiting: {patient.waitingTime}</p>
                        <Button 
                          size="sm" 
                          onClick={() => setSelectedPatient(patient)}
                          className="mt-2 bg-green-600 hover:bg-green-700 text-white"
                        >
                          Assign Doctor
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Doctor Code List & Upcoming Sessions */}
          <div className="space-y-6">
            {/* Doctor Code List */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle 
                  className="flex items-center justify-between cursor-pointer text-green-800"
                  onClick={() => setShowDocCodes(!showDocCodes)}
                >
                  <span className="flex items-center gap-2">
                    <Stethoscope className="w-5 h-5" />
                    Doctor Code List
                  </span>
                  {showDocCodes ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </CardTitle>
              </CardHeader>
              {showDocCodes && (
                <CardContent>
                  <div className="space-y-2">
                    {doctorCodes.map((doctor) => (
                      <div key={doctor.code} className="flex justify-between items-center p-2 border-b border-gray-100">
                        <div>
                          <span className="font-medium">{doctor.name}</span>
                          <p className="text-sm text-gray-600">{doctor.specialization}</p>
                        </div>
                        <Badge variant="outline">{doctor.code}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Upcoming Sessions */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Clock className="w-5 h-5" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingSessions.map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium">{session.patient}</p>
                        <p className="text-sm text-gray-600">{session.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{session.date}</p>
                        <p className="text-sm text-gray-600">{session.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Time Slot Action Dialog */}
        {selectedTimeSlot && selectedTimeSlot.status !== 'late' && (
          <Dialog open={!!selectedTimeSlot} onOpenChange={() => setSelectedTimeSlot(null)}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Session Options</DialogTitle>
                <DialogDescription>
                  {selectedTimeSlot.date} - {selectedTimeSlot.time}
                  {selectedTimeSlot.patient && (
                    <div className="mt-2 p-2 bg-gray-50 rounded">
                      Patient: {selectedTimeSlot.patient.name}<br/>
                      Condition: {selectedTimeSlot.patient.condition}
                    </div>
                  )}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3">
                <Button 
                  onClick={handleLiveClassEnd}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Start Live Class
                </Button>
                <Button 
                  onClick={() => setShowDiagnosisPage(true)}
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Go to Diagnosis
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Diagnosis Dialog */}
        {showDiagnosis && selectedTimeSlot?.patient && (
          <Dialog open={showDiagnosis} onOpenChange={() => setShowDiagnosis(false)}>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Patient Diagnosis</DialogTitle>
                <DialogDescription>Complete patient details and dosha analysis</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Patient Name</label>
                    <p className="text-lg">{selectedTimeSlot.patient.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Age</label>
                    <p className="text-lg">{selectedTimeSlot.patient.age}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Primary Dosha</label>
                    <Badge variant="outline" className="text-lg">{selectedTimeSlot.patient.dosha}</Badge>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Condition</label>
                    <p className="text-lg">{selectedTimeSlot.patient.condition}</p>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Dosha Analysis</label>
                  <div className="mt-2 p-4 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <h4 className="font-medium text-green-700">Vata</h4>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: selectedTimeSlot.patient.dosha.includes('Vata') ? '70%' : '30%' }}></div>
                        </div>
                        <p className="text-sm mt-1">{selectedTimeSlot.patient.dosha.includes('Vata') ? '70%' : '30%'}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-700">Pitta</h4>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: selectedTimeSlot.patient.dosha.includes('Pitta') ? '65%' : '25%' }}></div>
                        </div>
                        <p className="text-sm mt-1">{selectedTimeSlot.patient.dosha.includes('Pitta') ? '65%' : '25%'}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-700">Kapha</h4>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: selectedTimeSlot.patient.dosha.includes('Kapha') ? '60%' : '35%' }}></div>
                        </div>
                        <p className="text-sm mt-1">{selectedTimeSlot.patient.dosha.includes('Kapha') ? '60%' : '35%'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Treatment Notes</label>
                  <Textarea 
                    placeholder="Enter treatment recommendations and notes..."
                    className="mt-1"
                    rows={4}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline" onClick={() => setShowDiagnosis(false)}>
                  Cancel
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Save Diagnosis
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Late Session Alert */}
        {selectedTimeSlot && selectedTimeSlot.status === 'late' && (
          <Alert className="border-red-300 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-700 text-lg font-medium">
              "LATE" - Session link was not accessed within 15 minutes
            </AlertDescription>
          </Alert>
        )}

        {/* Patient Assignment Dialog */}
        {selectedPatient && (
          <Dialog open={!!selectedPatient} onOpenChange={() => setSelectedPatient(null)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Assign Doctor to Patient</DialogTitle>
                <DialogDescription>
                  Assigning doctor for {selectedPatient.name}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Enter Doctor Code</label>
                  <Input
                    value={assignDocCode}
                    onChange={(e) => setAssignDocCode(e.target.value)}
                    placeholder="e.g., 123, 272, 888"
                    className="mt-1"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setSelectedPatient(null)}>
                    Cancel
                  </Button>
                  <Button 
                    onClick={() => handleAssignDoctor(selectedPatient)}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Assign Doctor
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Grievance Form Dialog */}
        {showGrievance && (
          <Dialog open={showGrievance} onOpenChange={() => setShowGrievance(false)}>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Grievance Form</DialogTitle>
                <DialogDescription>
                  Submit your concerns or feedback
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Describe your grievance</label>
                  <Textarea
                    value={grievanceForm}
                    onChange={(e) => setGrievanceForm(e.target.value)}
                    placeholder="Please describe your concern in detail..."
                    rows={6}
                    className="mt-1"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowGrievance(false)}>
                    Cancel
                  </Button>
                  <Button 
                    onClick={() => {
                      alert('Grievance submitted successfully. We will review and respond within 24 hours.');
                      setShowGrievance(false);
                      setGrievanceForm('');
                    }}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Submit Grievance
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