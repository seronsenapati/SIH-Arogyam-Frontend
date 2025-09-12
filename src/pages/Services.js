import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Personalized Consultation",
      description: "One-on-one sessions with certified Ayurvedic practitioners to assess your unique constitution (Prakriti) and create a personalized health plan.",
      icon: "👨‍⚕️",
      price: "₹500/session"
    },
    {
      id: 2,
      title: "Herbal Medicine",
      description: "Authentic Ayurvedic formulations and herbal remedies prescribed based on your specific health needs and constitution.",
      icon: "🌿",
      price: "Starting at ₹300"
    },
    {
      id: 3,
      title: "Diet & Nutrition",
      description: "Customized Ayurvedic diet plans that align with your dosha type and health goals for optimal digestion and vitality.",
      icon: "🥗",
      price: "₹800/plan"
    },
    {
      id: 4,
      title: "Yoga Therapy",
      description: "Personalized yoga sequences and breathing techniques (pranayama) to balance your doshas and enhance physical and mental well-being.",
      icon: "🧘",
      price: "₹1000/month"
    },
    {
      id: 5,
      title: "Panchakarma",
      description: "Traditional Ayurvedic detoxification and rejuvenation therapies performed by experienced practitioners.",
      icon: "🌸",
      price: "₹5000/session"
    },
    {
      id: 6,
      title: "Wellness Programs",
      description: "Comprehensive wellness programs that combine multiple Ayurvedic modalities for specific health conditions or goals.",
      icon: "🌟",
      price: "₹3000/program"
    }
  ];

  return (
    <ServicesContainer>
      <PageHeader>
        <Title>Our Ayurvedic Services</Title>
        <Subtitle>Holistic healing approaches for mind, body, and spirit</Subtitle>
      </PageHeader>
      
      <ServicesGrid>
        {services.map(service => (
          <ServiceCard key={service.id} className="glassmorphism">
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServicePrice>{service.price}</ServicePrice>
            <BookButton className="rounded-button primary">
              <Link to="/appointments">Book Now</Link>
            </BookButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
      
      <TestimonialSection>
        <SectionTitle>What Our Patients Say</SectionTitle>
        <TestimonialCard className="glassmorphism">
          <TestimonialText>
            "Arogyam transformed my approach to health. The personalized Ayurvedic plan helped me overcome chronic digestive issues 
            that I had been struggling with for years. The practitioners are knowledgeable and genuinely caring."
          </TestimonialText>
          <TestimonialAuthor>- Priya Sharma, Bangalore</TestimonialAuthor>
        </TestimonialCard>
      </TestimonialSection>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: var(--dark-green);
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-dark);
  max-width: 800px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
`;

const ServiceCard = styled.div`
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--dark-green);
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-dark);
  margin-bottom: 20px;
`;

const ServicePrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--dark-green);
  margin-bottom: 20px;
`;

const BookButton = styled.button`
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }
`;

const TestimonialSection = styled.section`
  margin-top: 50px;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  text-align: center;
  color: var(--dark-green);
  margin-bottom: 30px;
`;

const TestimonialCard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.8;
  color: var(--text-dark);
  margin-bottom: 20px;
`;

const TestimonialAuthor = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--dark-green);
`;