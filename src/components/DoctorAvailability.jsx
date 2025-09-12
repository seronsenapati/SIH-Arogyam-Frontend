import React, { useState } from 'react';
import { ArrowLeft, Clock, Star, Calendar, User, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function DoctorAvailability({ onBack, condition, onSelectDoctor }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const doctors = [
    {
      id: 'dr-sharma',
      name: 'Dr. Rajesh Sharma',
      specialization: 'Panchakarma & Detox',
      dosha: 'Vata',
      rating: 4.8,
      experience: 15,
      availability: [
        { date: '2024-01-15', slots: ['09:00 AM', '10:30 AM', '02:00 PM', '04:00 PM'] },
        { date: '2024-01-16', slots: ['09:00 AM', '11:00 AM', '03:00 PM'] },
        { date: '2024-01-17', slots: ['10:00 AM', '02:30 PM', '04:30 PM'] }
      ],
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      consultationFee: 150
    },
    {
      id: 'dr-patel',
      name: 'Dr. Priya Patel',
      specialization: 'Women\'s Health & Fertility',
      dosha: 'Pitta',
      rating: 4.9,
      experience: 12,
      availability: [
        { date: '2024-01-15', slots: ['11:00 AM', '01:00 PM', '03:30 PM'] },
        { date: '2024-01-16', slots: ['09:30 AM', '02:00 PM', '04:00 PM', '05:00 PM'] },
        { date: '2024-01-17', slots: ['10:30 AM', '01:30 PM'] }
      ],
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      consultationFee: 180
    },
    {
      id: 'dr-gupta',
      name: 'Dr. Amit Gupta',
      specialization: 'Digestive Health & Nutrition',
      dosha: 'Kapha',
      rating: 4.7,
      experience: 18,
      availability: [
        { date: '2024-01-15', slots: ['08:30 AM', '12:00 PM', '04:30 PM'] },
        { date: '2024-01-16', slots: ['09:00 AM', '01:30 PM', '03:00 PM'] },
        { date: '2024-01-17', slots: ['11:00 AM', '02:00 PM', '05:00 PM'] }
      ],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      consultationFee: 160
    }
  ];

  const availableDates = ['2024-01-15', '2024-01-16', '2024-01-17'];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getDoshaColor = (dosha) => {
    switch (dosha.toLowerCase()) {
      case 'vata':
        return 'bg-blue-100 text-blue-800';
      case 'pitta':
        return 'bg-red-100 text-red-800';
      case 'kapha':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailableSlots = (doctor, date) => {
    const dayAvailability = doctor.availability.find(a => a.date === date);
    return dayAvailability ? dayAvailability.slots : [];
  };

  const handleBookAppointment = (doctorId) => {
    setSelectedDoctor(doctorId);
    onSelectDoctor(doctorId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Consultation
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Available Doctors</h1>
              <p className="text-gray-600">Specialists for {condition}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Date Selection */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Select Date</h2>
          <div className="flex gap-3">
            {availableDates.map(date => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-4 py-3 rounded-lg border-2 transition-colors ${
                  selectedDate === date
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{formatDate(date)}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Doctors List */}
        <div className="space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Available Doctors</h2>
          
          {doctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Doctor Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                        <Badge className={getDoshaColor(doctor.dosha)}>
                          {doctor.dosha} Specialist
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{doctor.specialization}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{doctor.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{doctor.experience} years exp.</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Leaf className="w-4 h-4" />
                          <span>${doctor.consultationFee} consultation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability Slots */}
                <div className="lg:w-96">
                  {selectedDate ? (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Available on {formatDate(selectedDate)}
                      </h4>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {getAvailableSlots(doctor, selectedDate).map(slot => (
                          <button
                            key={slot}
                            className="px-3 py-2 text-sm border border-green-200 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                      <Button
                        onClick={() => handleBookAppointment(doctor.id)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        disabled={getAvailableSlots(doctor, selectedDate).length === 0}
                      >
                        {getAvailableSlots(doctor, selectedDate).length > 0 
                          ? 'Book Appointment' 
                          : 'No Slots Available'
                        }
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p>Please select a date to view available slots</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Leaf className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-medium text-green-900 mb-2">About AyurSutra Consultations</h3>
              <p className="text-green-800 text-sm leading-relaxed">
                Our experienced Ayurvedic doctors specialize in different dosha types and treatment approaches. 
                Each consultation includes personalized dosha assessment, treatment recommendations, and lifestyle guidance 
                based on ancient Ayurvedic principles combined with modern medical knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}