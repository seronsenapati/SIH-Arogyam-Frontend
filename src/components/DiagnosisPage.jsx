import React, { useState } from 'react';
import { ArrowLeft, User, Calendar, Clock, FileText, Pill, Heart, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { BackButton } from './BackButton';

export function DiagnosisPage({ onBack, onBackToHome }) {
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [showDoctorDetails, setShowDoctorDetails] = useState(false);

  // Mock diagnosis data
  const diagnosisData = {
    sessionDate: '2024-12-15',
    sessionTime: '10:00 AM - 11:00 AM',
    consultantName: 'Dr. Sarah Wilson',
    patientName: 'John Doe',
    primaryDiagnosis: 'Vata Dosha Imbalance with Digestive Issues',
    symptoms: ['Anxiety', 'Digestive discomfort', 'Sleep irregularity', 'Joint stiffness'],
    doshaImbalance: 'Vata (Primary), Pitta (Secondary)',
    prescriptions: [
      {
        id: '1',
        medicine: 'Ashwagandha Churna',
        dosage: '1 tsp twice daily',
        duration: '30 days',
        instructions: 'Mix with warm milk, take before meals'
      },
      {
        id: '2',
        medicine: 'Triphala Tablets',
        dosage: '2 tablets',
        duration: '21 days',
        instructions: 'Take with warm water before bedtime'
      },
      {
        id: '3',
        medicine: 'Brahmi Oil',
        dosage: 'External application',
        duration: '30 days',
        instructions: 'Gentle head massage before sleep'
      }
    ],
    doctorReferral: {
      doctorName: 'Dr. Rajesh Kumar',
      specialization: 'Panchakarma Specialist',
      experience: '15 years',
      consultationDate: '2024-12-20',
      consultationTime: '2:00 PM - 3:00 PM',
      contactInfo: '+91 98765 43210',
      location: 'AyurSutra Wellness Center, Block A'
    },
    lifestyle: [
      'Follow regular sleep schedule (10 PM - 6 AM)',
      'Practice daily meditation for 15 minutes',
      'Warm oil self-massage (Abhyanga) 3 times a week',
      'Avoid cold drinks and raw foods',
      'Include warm spices in meals (ginger, cumin, fennel)'
    ],
    followUpDate: '2024-12-25'
  };

  const handlePrescriptionClick = (prescription) => {
    setSelectedPrescription(prescription);
    if (diagnosisData.doctorReferral) {
      setShowDoctorDetails(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 p-6">
      <BackButton onBack={onBackToHome} />
      
      <div className="max-w-4xl mx-auto pt-12 space-y-6">
        {/* Header */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Diagnosis Report
                </CardTitle>
                <p className="text-green-100 mt-2">
                  Session Date: {new Date(diagnosisData.sessionDate).toLocaleDateString()} | {diagnosisData.sessionTime}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-100">Consultant</p>
                <p className="font-medium">{diagnosisData.consultantName}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Patient Name</h3>
                <p className="text-lg text-gray-900">{diagnosisData.patientName}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Primary Diagnosis</h3>
                <p className="text-lg text-gray-900">{diagnosisData.primaryDiagnosis}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dosha Analysis */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Heart className="w-5 h-5" />
              Dosha Analysis & Symptoms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Dosha Imbalance</h4>
              <Badge variant="outline" className="text-lg px-3 py-1">
                {diagnosisData.doshaImbalance}
              </Badge>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Observed Symptoms</h4>
              <div className="grid md:grid-cols-2 gap-2">
                {diagnosisData.symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-700">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prescriptions */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Pill className="w-5 h-5" />
              Prescribed Medicines
            </CardTitle>
            <p className="text-sm text-gray-600">Click on any prescription to view doctor referral details</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {diagnosisData.prescriptions.map((prescription) => (
              <Card 
                key={prescription.id} 
                className="cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
                onClick={() => handlePrescriptionClick(prescription)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-2">{prescription.medicine}</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Dosage: </span>
                          <span className="font-medium">{prescription.dosage}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Duration: </span>
                          <span className="font-medium">{prescription.duration}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{prescription.instructions}</p>
                    </div>
                    <Badge variant="secondary">Click for Doctor Details</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Doctor Referral Details */}
        {showDoctorDetails && diagnosisData.doctorReferral && (
          <Card className="shadow-lg border-0 bg-blue-50 border-blue-200">
            <CardHeader className="bg-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Doctor Referral Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Doctor Name</h4>
                    <p className="text-lg text-gray-900">{diagnosisData.doctorReferral.doctorName}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Specialization</h4>
                    <p className="text-gray-900">{diagnosisData.doctorReferral.specialization}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Experience</h4>
                    <p className="text-gray-900">{diagnosisData.doctorReferral.experience}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Consultation Schedule</h4>
                    <div className="flex items-center gap-2 text-gray-900">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{new Date(diagnosisData.doctorReferral.consultationDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-900 mt-1">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{diagnosisData.doctorReferral.consultationTime}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Contact</h4>
                    <p className="text-gray-900">{diagnosisData.doctorReferral.contactInfo}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Location</h4>
                    <p className="text-gray-900">{diagnosisData.doctorReferral.location}</p>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
                <Button variant="outline" onClick={() => setShowDoctorDetails(false)}>
                  Close Details
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Lifestyle Recommendations */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Heart className="w-5 h-5" />
              Lifestyle Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {diagnosisData.lifestyle.map((recommendation, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-700 text-sm font-medium">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Follow-up */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="font-medium text-gray-800 mb-2">Next Follow-up Session</h3>
              <p className="text-lg text-green-700 font-medium">
                {new Date(diagnosisData.followUpDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Please continue the prescribed treatment and maintain the lifestyle recommendations
              </p>
              <Button 
                onClick={onBack}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white"
              >
                Return to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}