import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, CheckCircle, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function AppointmentScheduler({ onBack, condition, selectedDoctor: preSelectedDoctor }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(preSelectedDoctor || '');

  const doctors = [
    {
      id: 'dr-sharma',
      name: 'Dr. Rajesh Sharma',
      specialization: 'Panchakarma & Detox',
      experience: '15+ years',
      rating: 4.8,
      availability: ['09:00', '10:30', '14:00', '16:00']
    },
    {
      id: 'dr-patel',
      name: 'Dr. Priya Patel',
      specialization: 'Women\'s Health & Fertility',
      experience: '12+ years',
      rating: 4.9,
      availability: ['11:00', '13:00', '15:30', '17:00']
    },
    {
      id: 'dr-gupta',
      name: 'Dr. Amit Gupta',
      specialization: 'Digestive Health & Nutrition',
      experience: '18+ years',
      rating: 4.7,
      availability: ['08:30', '12:00', '16:30']
    }
  ];

  const generateCalendarDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNumber: date.getDate(),
        monthName: date.toLocaleDateString('en-US', { month: 'short' })
      });
    }
    return dates;
  };

  const availableDates = generateCalendarDates();
  const selectedDoctorData = doctors.find(d => d.id === selectedDoctor);

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime && selectedDoctor) {
      alert(`AyurSutra Appointment booked successfully!\n\nCondition: ${condition}\nDoctor: ${selectedDoctorData?.name}\nDate: ${selectedDate}\nTime: ${selectedTime}`);
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Doctor Selection
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-gray-800 mb-4">Schedule Your Appointment</h1>
          <div className="bg-green-50 p-4 rounded-lg max-w-md mx-auto">
            <p className="text-green-800">
              <span className="font-semibold">Condition:</span> {condition}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Doctor Selection */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Select Doctor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {doctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      onClick={() => setSelectedDoctor(doctor.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedDoctor === doctor.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800">{doctor.name}</h3>
                          <p className="text-sm text-gray-600">{doctor.specialization}</p>
                          <p className="text-xs text-gray-500">{doctor.experience}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-medium">{doctor.rating}</span>
                            <span className="text-yellow-500">★</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Date and Time Selection */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Date Selection */}
              <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Select Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {availableDates.map((date) => (
                    <button
                      key={date.date}
                      onClick={() => setSelectedDate(date.date)}
                      className={`p-3 rounded-lg text-center transition-all ${
                        selectedDate === date.date
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 hover:bg-green-100 text-gray-700'
                      }`}
                    >
                      <div className="text-xs">{date.dayName}</div>
                      <div className="font-medium">{date.dayNumber}</div>
                      <div className="text-xs">{date.monthName}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

              {/* Time Selection */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Select Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedDoctor ? (
                    <div className="grid grid-cols-5 gap-3">
                      {selectedDoctorData?.availability.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg text-center transition-all ${
                            selectedTime === time
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 hover:bg-blue-100 text-gray-700'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      Please select a doctor first to see available time slots
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Appointment Summary */}
              {selectedDate && selectedTime && selectedDoctor && (
                <Card className="shadow-lg bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <CheckCircle className="w-5 h-5" />
                      Appointment Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Condition:</span>
                        <span className="font-medium">{condition}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Doctor:</span>
                        <span className="font-medium">{selectedDoctorData?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between border-t pt-3">
                        <span className="text-gray-600">Consultation Fee:</span>
                        <span className="font-medium text-green-600">₹500</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleBookAppointment}
                      className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white"
                    >
                      Book Appointment
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}