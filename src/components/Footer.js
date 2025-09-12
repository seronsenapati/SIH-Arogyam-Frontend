import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer className="glassmorphism">
      <FooterContent>
        <FooterSection>
          <FooterLogo>Arogyam</FooterLogo>
          <FooterText>
            Bringing the ancient wisdom of Ayurveda to modern healthcare through technology.
          </FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/herbs">Ayurvedic Herbs</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Services</FooterTitle>
          <FooterLink to="/services">Consultation</FooterLink>
          <FooterLink to="/services">Herbal Remedies</FooterLink>
          <FooterLink to="/services">Diet Plans</FooterLink>
          <FooterLink to="/services">Yoga Therapy</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactInfo>
            <p>Email: info@arogyam.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Address: Ayurveda Health Center, Bangalore, India</p>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Arogyam. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  margin: 20px;
  padding: 30px 40px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FooterLogo = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-green);
  margin: 0;
`;

const FooterText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-dark);
  margin: 0;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--dark-green);
  margin: 0 0 10px 0;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: var(--text-dark);
  font-size: 14px;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-green);
  }
`;

const ContactInfo = styled.div`
  p {
    margin: 5px 0;
    font-size: 14px;
    color: var(--text-dark);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid var(--glass-border);
  padding-top: 20px;
  text-align: center;
  
  p {
    margin: 0;
    font-size: 14px;
    color: var(--text-dark);
  }
`;