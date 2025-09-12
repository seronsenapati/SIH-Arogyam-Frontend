import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Herbs = () => {
  const herbs = [
    {
      id: 1,
      name: "Ashwagandha",
      scientificName: "Withania somnifera",
      benefits: "Reduces stress, improves sleep, boosts energy",
      image: "🌿"
    },
    {
      id: 2,
      name: "Turmeric",
      scientificName: "Curcuma longa",
      benefits: "Anti-inflammatory, antioxidant, supports joint health",
      image: "💛"
    },
    {
      id: 3,
      name: "Tulsi (Holy Basil)",
      scientificName: "Ocimum tenuiflorum",
      benefits: "Boosts immunity, reduces respiratory issues, manages stress",
      image: "🪻"
    },
    {
      id: 4,
      name: "Triphala",
      scientificName: "Terminalia chebula, Terminalia bellerica, Emblica officinalis",
      benefits: "Digestive support, detoxification, eye health",
      image: "🍃"
    },
    {
      id: 5,
      name: "Brahmi",
      scientificName: "Bacopa monnieri",
      benefits: "Enhances memory, reduces anxiety, supports brain health",
      image: "🧠"
    },
    {
      id: 6,
      name: "Shatavari",
      scientificName: "Asparagus racemosus",
      benefits: "Supports female reproductive health, boosts immunity",
      image: "🌸"
    }
  ];

  return (
    <HerbsContainer>
      <PageHeader>
        <Title>Ayurvedic Herbs & Remedies</Title>
        <Subtitle>Discover the healing power of nature's pharmacy</Subtitle>
      </PageHeader>
      
      <IntroSection className="glassmorphism">
        <IntroTitle>The Wisdom of Plants</IntroTitle>
        <IntroText>
          Ayurveda has utilized the healing properties of herbs for thousands of years. Each herb has unique 
          qualities that can help restore balance to the body's doshas (Vata, Pitta, Kapha) and promote overall wellness. 
          Our practitioners carefully select and combine herbs to create personalized remedies for your specific health needs.
        </IntroText>
      </IntroSection>
      
      <HerbsGrid>
        {herbs.map(herb => (
          <HerbCard key={herb.id} className="glassmorphism">
            <HerbIcon>{herb.image}</HerbIcon>
            <HerbName>{herb.name}</HerbName>
            <ScientificName>{herb.scientificName}</ScientificName>
            <HerbBenefits>{herb.benefits}</HerbBenefits>
            <ConsultButton className="rounded-button primary small">
              <Link to="/appointments">Consult Expert</Link>
            </ConsultButton>
          </HerbCard>
        ))}
      </HerbsGrid>
      
      <Disclaimer className="glassmorphism">
        <DisclaimerTitle>Important Note</DisclaimerTitle>
        <DisclaimerText>
          While these herbs have been used in Ayurvedic medicine for centuries, it's essential to consult with 
          a qualified Ayurvedic practitioner before using any herbal remedies. Individual needs vary, and professional 
          guidance ensures safe and effective treatment tailored to your unique constitution.
        </DisclaimerText>
      </Disclaimer>
    </HerbsContainer>
  );
};

export default Herbs;

const HerbsContainer = styled.div`
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

const IntroSection = styled.section`
  padding: 40px;
  margin-bottom: 40px;
  text-align: center;
`;

const IntroTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--dark-green);
  margin-bottom: 20px;
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-dark);
  max-width: 800px;
  margin: 0 auto;
`;

const HerbsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const HerbCard = styled.div`
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const HerbIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const HerbName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: var(--dark-green);
`;

const ScientificName = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: #666;
  margin-bottom: 15px;
`;

const HerbBenefits = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-dark);
  margin-bottom: 20px;
`;

const ConsultButton = styled.button`
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }
`;

const Disclaimer = styled.section`
  padding: 30px;
  margin-top: 20px;
`;

const DisclaimerTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: var(--dark-green);
  margin-bottom: 15px;
  text-align: center;
`;

const DisclaimerText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-dark);
  text-align: center;
`;