import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AppointmentBooking = () => {
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');

  // Sample data
  const services = [
    { id: 1, name: "General Consultation", duration: "30 mins", price: "₹500" },
    { id: 2, name: "Specialized Treatment", duration: "45 mins", price: "₹800" },
    { id: 3, name: "Panchakarma Therapy", duration: "60 mins", price: "₹1500" }
  ];

  const doctors = [
    { id: 1, name: "Dr. Ayurveda Sharma", specialization: "General Medicine", rating: 4.8 },
    { id: 2, name: "Dr. Priya Patel", specialization: "Panchakarma", rating: 4.9 },
    { id: 3, name: "Dr. Rajesh Kumar", specialization: "Herbal Medicine", rating: 4.7 }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  if (!user) {
    return (
      <BookingContainer>
        <PageHeader>
          <Title>Access Denied</Title>
          <Subtitle>Please log in to book an appointment</Subtitle>
          <Link to="/login">Go to Login</Link>
        </PageHeader>
      </BookingContainer>
    );
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit this data to your backend
    alert('Appointment booked successfully!');
    // Reset form
    setStep(1);
    setSelectedService('');
    setSelectedDoctor('');
    setSelectedDate('');
    setSelectedTime('');
    setNotes('');
  };

  return (
    <BookingContainer>
      <PageHeader>
        <Title>Book an Appointment</Title>
        <Subtitle>Schedule a consultation with our Ayurvedic experts</Subtitle>
      </PageHeader>
      
      <ProgressBar>
        <Step completed={step >= 1} active={step === 1}>
          <StepNumber>1</StepNumber>
          <StepLabel>Service</StepLabel>
        </Step>
        <Step completed={step >= 2} active={step === 2}>
          <StepNumber>2</StepNumber>
          <StepLabel>Doctor</StepLabel>
        </Step>
        <Step completed={step >= 3} active={step === 3}>
          <StepNumber>3</StepNumber>
          <StepLabel>Date & Time</StepLabel>
        </Step>
        <Step completed={step >= 4} active={step === 4}>
          <StepNumber>4</StepNumber>
          <StepLabel>Confirm</StepLabel>
        </Step>
      </ProgressBar>
      
      <BookingForm className="glassmorphism">
        {step === 1 && (
          <StepContent>
            <StepTitle>Select a Service</StepTitle>
            <ServicesGrid>
              {services.map(service => (
                <ServiceCard 
                  key={service.id}
                  selected={selectedService === service.id}
                  onClick={() => setSelectedService(service.id)}
                  className="glassmorphism"
                >
                  <ServiceName>{service.name}</ServiceName>
                  <ServiceDetails>
                    <span>{service.duration}</span>
                    <span>{service.price}</span>
                  </ServiceDetails>
                </ServiceCard>
              ))}
            </ServicesGrid>
            <StepActions>
              <NextButton 
                className="rounded-button primary" 
                onClick={handleNext}
                disabled={!selectedService}
              >
                Next
              </NextButton>
            </StepActions>
          </StepContent>
        )}
        
        {step === 2 && (
          <StepContent>
            <StepTitle>Select a Doctor</StepTitle>
            <DoctorsGrid>
              {doctors.map(doctor => (
                <DoctorCard 
                  key={doctor.id}
                  selected={selectedDoctor === doctor.id}
                  onClick={() => setSelectedDoctor(doctor.id)}
                  className="glassmorphism"
                >
                  <DoctorAvatar>👨‍⚕️</DoctorAvatar>
                  <DoctorInfo>
                    <DoctorName>{doctor.name}</DoctorName>
                    <DoctorSpecialization>{doctor.specialization}</DoctorSpecialization>
                    <DoctorRating>⭐ {doctor.rating}</DoctorRating>
                  </DoctorInfo>
                </DoctorCard>
              ))}
            </DoctorsGrid>
            <StepActions>
              <PreviousButton className="rounded-button secondary" onClick={handlePrevious}>
                Previous
              </PreviousButton>
              <NextButton 
                className="rounded-button primary" 
                onClick={handleNext}
                disabled={!selectedDoctor}
              >
                Next
              </NextButton>
            </StepActions>
          </StepContent>
        )}
        
        {step === 3 && (
          <StepContent>
            <StepTitle>Select Date & Time</StepTitle>
            <DateTimeContainer>
              <DateSelector>
                <Label>Select Date</Label>
                <Input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </DateSelector>
              
              <TimeSelector>
                <Label>Select Time</Label>
                <TimeGrid>
                  {timeSlots.map(time => (
                    <TimeSlot 
                      key={time}
                      selected={selectedTime === time}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </TimeSlot>
                  ))}
                </TimeGrid>
              </TimeSelector>
            </DateTimeContainer>
            <StepActions>
              <PreviousButton className="rounded-button secondary" onClick={handlePrevious}>
                Previous
              </PreviousButton>
              <NextButton 
                className="rounded-button primary" 
                onClick={handleNext}
                disabled={!selectedDate || !selectedTime}
              >
                Next
              </NextButton>
            </StepActions>
          </StepContent>
        )}
        
        {step === 4 && (
          <StepContent>
            <StepTitle>Confirm Appointment</StepTitle>
            <ConfirmationDetails>
              <DetailRow>
                <DetailLabel>Service:</DetailLabel>
                <DetailValue>
                  {services.find(s => s.id === selectedService)?.name}
                </DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Doctor:</DetailLabel>
                <DetailValue>
                  {doctors.find(d => d.id === selectedDoctor)?.name}
                </DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Date:</DetailLabel>
                <DetailValue>{selectedDate}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Time:</DetailLabel>
                <DetailValue>{selectedTime}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Price:</DetailLabel>
                <DetailValue>
                  {services.find(s => s.id === selectedService)?.price}
                </DetailValue>
              </DetailRow>
            </ConfirmationDetails>
            
            <NotesSection>
              <Label>Additional Notes (Optional)</Label>
              <TextArea 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any specific concerns or requests..."
              />
            </NotesSection>
            
            <StepActions>
              <PreviousButton className="rounded-button secondary" onClick={handlePrevious}>
                Previous
              </PreviousButton>
              <SubmitButton className="rounded-button primary" onClick={handleSubmit}>
                Confirm Booking
              </SubmitButton>
            </StepActions>
          </StepContent>
        )}
      </BookingForm>
    </BookingContainer>
  );
};

export default AppointmentBooking;

const BookingContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--dark-green);
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-dark);
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--glass-border);
    z-index: 1;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  
  ${props => props.completed && `
    .step-number {
      background: var(--primary-green);
      color: white;
    }
  `}
  
  ${props => props.active && `
    .step-label {
      color: var(--dark-green);
      font-weight: 600;
    }
  `}
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e0e0e0;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 10px;
  z-index: 2;
`;

const StepLabel = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const BookingForm = styled.div`
  padding: 40px;
`;

const StepContent = styled.div``;

const StepTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--dark-green);
  text-align: center;
  margin-bottom: 30px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const ServiceCard = styled.div`
  padding: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.selected && `
    border: 2px solid var(--primary-green);
    background: rgba(76, 175, 80, 0.1);
  `}
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--dark-green);
`;

const ServiceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
`;

const DoctorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const DoctorCard = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.selected && `
    border: 2px solid var(--primary-green);
    background: rgba(76, 175, 80, 0.1);
  `}
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const DoctorAvatar = styled.div`
  font-size: 2rem;
  margin-right: 15px;
`;

const DoctorInfo = styled.div``;

const DoctorName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: var(--dark-green);
`;

const DoctorSpecialization = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
`;

const DoctorRating = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const DateTimeContainer = styled.div`
  margin-bottom: 30px;
`;

const DateSelector = styled.div`
  margin-bottom: 30px;
`;

const TimeSelector = styled.div``;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  color: var(--text-dark);
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-green);
  }
`;

const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`;

const TimeSlot = styled.div`
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.selected && `
    background: var(--primary-green);
    color: white;
  `}
  
  &:hover {
    background: var(--light-green);
  }
`;

const NotesSection = styled.div`
  margin-bottom: 30px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-green);
  }
`;

const ConfirmationDetails = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
`;

const DetailRow = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid var(--glass-border);
  
  &:last-child {
    border-bottom: none;
  }
`;

const DetailLabel = styled.span`
  font-weight: 500;
  width: 120px;
  color: var(--text-dark);
`;

const DetailValue = styled.span`
  flex: 1;
  color: var(--dark-green);
  font-weight: 500;
`;

const StepActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const PreviousButton = styled.button``;

const NextButton = styled.button`
  ${props => props.disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

const SubmitButton = styled.button``;