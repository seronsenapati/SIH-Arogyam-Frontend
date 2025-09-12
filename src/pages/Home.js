import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero-bg.svg';
import AyurvedicPrinciples from '../components/AyurvedicPrinciples';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Experience the Power of Ayurveda</HeroTitle>
          <HeroSubtitle>
            Connect with certified Ayurvedic practitioners for personalized health solutions
          </HeroSubtitle>
          <CTAButton className="rounded-button primary">
            <Link to="/appointments">Book Consultation</Link>
          </CTAButton>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <SectionTitle>Our Services</SectionTitle>
        <FeaturesGrid>
          <FeatureCard className="glassmorphism">
            <FeatureIcon>🌿</FeatureIcon>
            <FeatureTitle>Expert Consultation</FeatureTitle>
            <FeatureDescription>
              Connect with certified Ayurvedic doctors for personalized health advice
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard className="glassmorphism">
            <FeatureIcon>💊</FeatureIcon>
            <FeatureTitle>Herbal Remedies</FeatureTitle>
            <FeatureDescription>
              Get authentic Ayurvedic medicines and supplements delivered to your doorstep
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard className="glassmorphism">
            <FeatureIcon>🧘</FeatureIcon>
            <FeatureTitle>Yoga & Meditation</FeatureTitle>
            <FeatureDescription>
              Learn traditional yoga and meditation techniques for holistic wellness
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
      
      <AyurvedicPrinciples />
      
      <HowItWorksSection>
        <SectionTitle>How It Works</SectionTitle>
        <StepsContainer>
          <Step>
            <StepNumber>1</StepNumber>
            <StepTitle>Register</StepTitle>
            <StepDescription>Create your account and complete your health profile</StepDescription>
          </Step>
          
          <Step>
            <StepNumber>2</StepNumber>
            <StepTitle>Consult</StepTitle>
            <StepDescription>Book an appointment with an Ayurvedic practitioner</StepDescription>
          </Step>
          
          <Step>
            <StepNumber>3</StepNumber>
            <StepTitle>Heal</StepTitle>
            <StepDescription>Follow your personalized Ayurvedic treatment plan</StepDescription>
          </Step>
        </StepsContainer>
      </HowItWorksSection>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${HeroImage});
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 40px;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: var(--text-light);
  margin-bottom: 30px;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }
`;

const FeaturesSection = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: var(--dark-green);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const FeatureCard = styled.div`
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--dark-green);
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-dark);
`;

const HowItWorksSection = styled.section`
  margin-bottom: 60px;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

const Step = styled.div`
  flex: 1;
  min-width: 250px;
  text-align: center;
  padding: 30px;
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-green), var(--dark-green));
  color: var(--text-light);
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--dark-green);
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-dark);
`;