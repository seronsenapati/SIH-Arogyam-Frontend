import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <PageHeader>
        <Title>About Arogyam</Title>
        <Subtitle>Bringing Ayurveda to the Digital Age</Subtitle>
      </PageHeader>
      
      <ContentSection className="glassmorphism">
        <SectionTitle>Our Mission</SectionTitle>
        <Paragraph>
          At Arogyam, we are dedicated to making the ancient wisdom of Ayurveda accessible to everyone through modern technology. 
          Our mission is to bridge the gap between traditional healing practices and contemporary healthcare needs, providing 
          personalized, holistic wellness solutions that are rooted in thousands of years of Ayurvedic knowledge.
        </Paragraph>
      </ContentSection>
      
      <ContentSection className="glassmorphism">
        <SectionTitle>Our Vision</SectionTitle>
        <Paragraph>
          We envision a world where everyone has access to personalized Ayurvedic healthcare, regardless of their location or 
          circumstances. By leveraging technology, we aim to preserve and promote the authentic principles of Ayurveda while 
          making them relevant and accessible in today's fast-paced world.
        </Paragraph>
      </ContentSection>
      
      <ContentSection className="glassmorphism">
        <SectionTitle>The Science of Ayurveda</SectionTitle>
        <Paragraph>
          Ayurveda, meaning "science of life" in Sanskrit, is one of the world's oldest holistic healing systems. Developed more than 
          3,000 years ago in India, it's based on the belief that health and wellness depend on a delicate balance between mind, body, 
          and spirit. The primary goal of Ayurveda is to promote good health, not fight disease. But treatments may be geared toward 
          specific health problems.
        </Paragraph>
        <Paragraph>
          Ayurvedic medicine uses a combination of diet, herbal remedies, exercise, meditation, and lifestyle changes to restore balance 
          in the body. It recognizes that each person is unique and that what works for one person may not work for another.
        </Paragraph>
      </ContentSection>
      
      <TeamSection>
        <SectionTitle>Our Approach</SectionTitle>
        <ApproachGrid>
          <ApproachCard className="glassmorphism">
            <ApproachIcon>🌱</ApproachIcon>
            <ApproachTitle>Holistic Healing</ApproachTitle>
            <ApproachDescription>
              We focus on treating the root cause of health issues rather than just symptoms, addressing the body, mind, and spirit as interconnected entities.
            </ApproachDescription>
          </ApproachCard>
          
          <ApproachCard className="glassmorphism">
            <ApproachIcon>🔬</ApproachIcon>
            <ApproachTitle>Scientific Validation</ApproachTitle>
            <ApproachDescription>
              Our practitioners combine traditional Ayurvedic knowledge with modern scientific understanding to provide evidence-based treatments.
            </ApproachDescription>
          </ApproachCard>
          
          <ApproachCard className="glassmorphism">
            <ApproachIcon>🌿</ApproachIcon>
            <ApproachTitle>Natural Solutions</ApproachTitle>
            <ApproachDescription>
              We emphasize the use of natural remedies, lifestyle modifications, and preventive care to promote long-term health and wellness.
            </ApproachDescription>
          </ApproachCard>
        </ApproachGrid>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
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

const ContentSection = styled.section`
  padding: 40px;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--dark-green);
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-dark);
`;

const TeamSection = styled.section`
  margin-top: 50px;
`;

const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const ApproachCard = styled.div`
  padding: 30px;
  text-align: center;
`;

const ApproachIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const ApproachTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--dark-green);
`;

const ApproachDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-dark);
`;