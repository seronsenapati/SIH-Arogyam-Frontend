import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('appointments');
  
  // Sample data
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Ayurveda Sharma",
      date: "March 20, 2024",
      time: "10:00 AM",
      type: "Consultation"
    },
    {
      id: 2,
      doctor: "Dr. Priya Patel",
      date: "March 25, 2024",
      time: "2:30 PM",
      type: "Follow-up"
    }
  ];
  
  const recentPrescriptions = [
    {
      id: 1,
      doctor: "Dr. Ayurveda Sharma",
      date: "March 10, 2024",
      medicines: "Ashwagandha, Turmeric"
    },
    {
      id: 2,
      doctor: "Dr. Priya Patel",
      date: "February 28, 2024",
      medicines: "Triphala, Brahmi"
    }
  ];

  // If user is not authenticated, show access denied message
  if (!isAuthenticated) {
    return (
      <DashboardContainer>
        <PageHeader>
          <Title>Access Denied</Title>
          <Subtitle>Please log in to view your dashboard</Subtitle>
          <button onClick={() => navigate('/login')}>Go to Login</button>
        </PageHeader>
      </DashboardContainer>
    );
  }

  // If user is authenticated but user object is not available
  if (!user) {
    return (
      <DashboardContainer>
        <PageHeader>
          <Title>Loading...</Title>
          <Subtitle>Please wait while we load your dashboard</Subtitle>
        </PageHeader>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <PageHeader>
        <Title>My Dashboard</Title>
        <Subtitle>Welcome back, {user.email}!</Subtitle>
      </PageHeader>
      
      <DashboardContent>
        <Sidebar className="glassmorphism">
          <NavSection>
            <NavItem 
              active={activeTab === 'appointments'} 
              onClick={() => setActiveTab('appointments')}
            >
              📅 Appointments
            </NavItem>
            <NavItem 
              active={activeTab === 'prescriptions'} 
              onClick={() => setActiveTab('prescriptions')}
            >
              💊 Prescriptions
            </NavItem>
            <NavItem 
              active={activeTab === 'health'} 
              onClick={() => setActiveTab('health')}
            >
              🧘 Health Records
            </NavItem>
            <NavItem 
              active={activeTab === 'profile'} 
              onClick={() => setActiveTab('profile')}
            >
              👤 Profile
            </NavItem>
          </NavSection>
          
          <QuickActions>
            <ActionTitle>Quick Actions</ActionTitle>
            <ActionButton className="rounded-button primary">
              <Link to="/appointments">Book Appointment</Link>
            </ActionButton>
            <ActionButton className="rounded-button secondary">
              <Link to="/services">View Services</Link>
            </ActionButton>
          </QuickActions>
        </Sidebar>
        
        <MainContent>
          {activeTab === 'appointments' && (
            <TabContent className="glassmorphism">
              <SectionHeader>
                <SectionTitle>Upcoming Appointments</SectionTitle>
                <ViewAllButton className="rounded-button secondary">
                  <Link to="/appointments">View All</Link>
                </ViewAllButton>
              </SectionHeader>
              
              <AppointmentsList>
                {upcomingAppointments.map(appointment => (
                  <AppointmentCard key={appointment.id}>
                    <AppointmentHeader>
                      <DoctorName>{appointment.doctor}</DoctorName>
                      <AppointmentType>{appointment.type}</AppointmentType>
                    </AppointmentHeader>
                    <AppointmentDetails>
                      <Date>{appointment.date}</Date>
                      <Time>{appointment.time}</Time>
                    </AppointmentDetails>
                    <AppointmentActions>
                      <ActionButton className="rounded-button secondary small">
                        Reschedule
                      </ActionButton>
                      <ActionButton className="rounded-button accent small">
                        Join Session
                      </ActionButton>
                    </AppointmentActions>
                  </AppointmentCard>
                ))}
              </AppointmentsList>
            </TabContent>
          )}
          
          {activeTab === 'prescriptions' && (
            <TabContent className="glassmorphism">
              <SectionHeader>
                <SectionTitle>Recent Prescriptions</SectionTitle>
                <ViewAllButton className="rounded-button secondary">
                  View All
                </ViewAllButton>
              </SectionHeader>
              
              <PrescriptionsList>
                {recentPrescriptions.map(prescription => (
                  <PrescriptionCard key={prescription.id}>
                    <PrescriptionHeader>
                      <DoctorName>{prescription.doctor}</DoctorName>
                      <PrescriptionDate>{prescription.date}</PrescriptionDate>
                    </PrescriptionHeader>
                    <MedicinesList>
                      <MedicinesTitle>Prescribed Medicines:</MedicinesTitle>
                      <Medicines>{prescription.medicines}</Medicines>
                    </MedicinesList>
                    <PrescriptionActions>
                      <ActionButton className="rounded-button secondary small">
                        View Details
                      </ActionButton>
                      <ActionButton className="rounded-button primary small">
                        Order Medicines
                      </ActionButton>
                    </PrescriptionActions>
                  </PrescriptionCard>
                ))}
              </PrescriptionsList>
            </TabContent>
          )}
          
          {activeTab === 'health' && (
            <TabContent className="glassmorphism">
              <SectionHeader>
                <SectionTitle>Health Records</SectionTitle>
              </SectionHeader>
              
              <HealthRecords>
                <RecordCard>
                  <RecordTitle>Prakriti Assessment</RecordTitle>
                  <RecordValue>Vata-Pitta</RecordValue>
                  <RecordDate>Last updated: Feb 15, 2024</RecordDate>
                </RecordCard>
                
                <RecordCard>
                  <RecordTitle>Blood Pressure</RecordTitle>
                  <RecordValue>120/80 mmHg</RecordValue>
                  <RecordDate>Last checked: Mar 10, 2024</RecordDate>
                </RecordCard>
                
                <RecordCard>
                  <RecordTitle>Weight</RecordTitle>
                  <RecordValue>65 kg</RecordValue>
                  <RecordDate>Last updated: Mar 10, 2024</RecordDate>
                </RecordCard>
              </HealthRecords>
            </TabContent>
          )}
          
          {activeTab === 'profile' && (
            <TabContent className="glassmorphism">
              <SectionHeader>
                <SectionTitle>My Profile</SectionTitle>
              </SectionHeader>
              
              <ProfileContent>
                <ProfileHeader>
                  <Avatar>👤</Avatar>
                  <ProfileInfo>
                    <ProfileName>Patient Name</ProfileName>
                    <ProfileEmail>patient@example.com</ProfileEmail>
                  </ProfileInfo>
                </ProfileHeader>
                
                <ProfileDetails>
                  <DetailRow>
                    <DetailLabel>Phone:</DetailLabel>
                    <DetailValue>+91 9876543210</DetailValue>
                  </DetailRow>
                  <DetailRow>
                    <DetailLabel>Date of Birth:</DetailLabel>
                    <DetailValue>January 1, 1990</DetailValue>
                  </DetailRow>
                  <DetailRow>
                    <DetailLabel>Gender:</DetailLabel>
                    <DetailValue>Female</DetailValue>
                  </DetailRow>
                  <DetailRow>
                    <DetailLabel>Address:</DetailLabel>
                    <DetailValue>Bangalore, India</DetailValue>
                  </DetailRow>
                </ProfileDetails>
                
                <EditButton className="rounded-button primary">
                  Edit Profile
                </EditButton>
              </ProfileContent>
            </TabContent>
          )}
        </MainContent>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const PageHeader = styled.div`
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

const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
`;

const Sidebar = styled.div`
  padding: 30px;
  height: fit-content;
`;

const NavSection = styled.div`
  margin-bottom: 30px;
`;

const NavItem = styled.div`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(76, 175, 80, 0.1);
  }
  
  ${props => props.active && `
    background: rgba(76, 175, 80, 0.2);
    color: var(--dark-green);
  `}
`;

const QuickActions = styled.div``;

const ActionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--dark-green);
`;

const ActionButton = styled.button`
  width: 100%;
  margin-bottom: 10px;
  
  a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
  }
`;

const MainContent = styled.div``;

const TabContent = styled.div`
  padding: 30px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--dark-green);
`;

const ViewAllButton = styled.button`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const AppointmentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AppointmentCard = styled.div`
  padding: 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
`;

const AppointmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const DoctorName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--dark-green);
`;

const AppointmentType = styled.span`
  background: var(--light-green);
  color: var(--dark-green);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const AppointmentDetails = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Date = styled.span`
  font-weight: 500;
`;

const Time = styled.span`
  font-weight: 500;
`;

const AppointmentActions = styled.div`
  display: flex;
  gap: 10px;
`;

const PrescriptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PrescriptionCard = styled.div`
  padding: 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
`;

const PrescriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const PrescriptionDate = styled.span`
  color: #666;
`;

const MedicinesList = styled.div`
  margin-bottom: 20px;
`;

const MedicinesTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 5px;
  color: var(--dark-green);
`;

const Medicines = styled.p`
  font-size: 0.9rem;
`;

const PrescriptionActions = styled.div`
  display: flex;
  gap: 10px;
`;

const HealthRecords = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const RecordCard = styled.div`
  padding: 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  text-align: center;
`;

const RecordTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: var(--dark-green);
`;

const RecordValue = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const RecordDate = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

const ProfileContent = styled.div``;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const Avatar = styled.div`
  font-size: 3rem;
`;

const ProfileInfo = styled.div``;

const ProfileName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: var(--dark-green);
`;

const ProfileEmail = styled.p`
  color: #666;
`;

const ProfileDetails = styled.div`
  margin-bottom: 30px;
`;

const DetailRow = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid var(--glass-border);
`;

const DetailLabel = styled.span`
  font-weight: 500;
  width: 150px;
`;

const DetailValue = styled.span``;

const EditButton = styled.button`
  display: block;
  margin: 0 auto;
`;