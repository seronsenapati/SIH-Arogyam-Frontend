import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      <PageHeader>
        <Title>Contact Us</Title>
        <Subtitle>We'd love to hear from you</Subtitle>
      </PageHeader>
      
      <ContactContent>
        <ContactInfo className="glassmorphism">
          <SectionTitle>Get In Touch</SectionTitle>
          <ContactDetail>
            <Icon>📍</Icon>
            <Detail>
              <DetailTitle>Our Location</DetailTitle>
              <DetailText>Ayurveda Health Center, Bangalore, India</DetailText>
            </Detail>
          </ContactDetail>
          
          <ContactDetail>
            <Icon>📧</Icon>
            <Detail>
              <DetailTitle>Email Us</DetailTitle>
              <DetailText>info@arogyam.com</DetailText>
              <DetailText>support@arogyam.com</DetailText>
            </Detail>
          </ContactDetail>
          
          <ContactDetail>
            <Icon>📞</Icon>
            <Detail>
              <DetailTitle>Call Us</DetailTitle>
              <DetailText>+91 9876543210</DetailText>
              <DetailText>+91 9876543211</DetailText>
            </Detail>
          </ContactDetail>
          
          <ContactDetail>
            <Icon>🕒</Icon>
            <Detail>
              <DetailTitle>Working Hours</DetailTitle>
              <DetailText>Monday - Friday: 9:00 AM - 7:00 PM</DetailText>
              <DetailText>Saturday: 10:00 AM - 4:00 PM</DetailText>
              <DetailText>Sunday: Closed</DetailText>
            </Detail>
          </ContactDetail>
        </ContactInfo>
        
        <ContactForm className="glassmorphism">
          <SectionTitle>Send us a Message</SectionTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit" className="rounded-button primary">
              Send Message
            </SubmitButton>
          </Form>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ContactInfo = styled.div`
  padding: 40px;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--dark-green);
  margin-bottom: 30px;
`;

const ContactDetail = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  margin-right: 15px;
`;

const Detail = styled.div`
  flex: 1;
`;

const DetailTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--dark-green);
`;

const DetailText = styled.p`
  margin: 5px 0;
  color: var(--text-dark);
`;

const ContactForm = styled.div`
  padding: 40px;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  
  &:focus {
    outline: none;
    border-color: var(--primary-green);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
`;