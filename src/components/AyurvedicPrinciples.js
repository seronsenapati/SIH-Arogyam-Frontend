import React from 'react';
import styled from 'styled-components';

const AyurvedicPrinciples = () => {
  const principles = [
    {
      id: 1,
      title: "Vata",
      description: "Represents movement and governs all bodily functions related to motion.",
      characteristics: "Creative, energetic, slim build, irregular appetite",
      color: "#8E44AD"
    },
    {
      id: 2,
      title: "Pitta",
      description: "Represents transformation and governs digestion, metabolism, and energy production.",
      characteristics: "Intense, focused, medium build, strong appetite",
      color: "#E67E22"
    },
    {
      id: 3,
      title: "Kapha",
      description: "Represents structure and stability, governing growth and immunity.",
      characteristics: "Calm, grounded, sturdy build, steady appetite",
      color: "#27AE60"
    }
  ];

  return (
    <PrinciplesSection>
      <SectionTitle>Understanding Ayurveda</SectionTitle>
      <PrinciplesGrid>
        {principles.map(principle => (
          <PrincipleCard key={principle.id} className="glassmorphism" color={principle.color}>
            <PrincipleIcon color={principle.color}>ॐ</PrincipleIcon>
            <PrincipleTitle>{principle.title}</PrincipleTitle>
            <PrincipleDescription>{principle.description}</PrincipleDescription>
            <PrincipleCharacteristics>{principle.characteristics}</PrincipleCharacteristics>
          </PrincipleCard>
        ))}
      </PrinciplesGrid>
    </PrinciplesSection>
  );
};

export default AyurvedicPrinciples;

const PrinciplesSection = styled.section`
  margin: 60px 0;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: var(--dark-green);
`;

const PrinciplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const PrincipleCard = styled.div`
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const PrincipleIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${props => props.color};
`;

const PrincipleTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: ${props => props.color};
`;

const PrincipleDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-dark);
  margin-bottom: 15px;
`;

const PrincipleCharacteristics = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #666;
  font-style: italic;
`;