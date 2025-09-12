import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'patient'
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    
    setLoading(true);
    
    try {
      const result = await register({
        email: formData.email,
        password: formData.password,
        role: formData.role
      });
      
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm className="glassmorphism">
        <FormHeader>
          <Title>Create Account</Title>
          <Subtitle>Join the Arogyam community today</Subtitle>
        </FormHeader>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Form onSubmit={handleSubmit}>
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
            <Label htmlFor="role">Account Type</Label>
            <Select 
              id="role" 
              name="role" 
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <PasswordContainer>
              <Input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
                required
              />
              <TogglePassword onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </TogglePassword>
            </PasswordContainer>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <PasswordContainer>
              <Input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirmPassword" 
                name="confirmPassword" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <TogglePassword onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </TogglePassword>
            </PasswordContainer>
          </FormGroup>
          
          <Terms>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
            </label>
          </Terms>
          
          <SubmitButton type="submit" className="rounded-button primary" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </SubmitButton>
        </Form>
        
        <LoginLink>
          Already have an account? <Link to="/login">Log in</Link>
        </LoginLink>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 20px;
`;

const RegisterForm = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 40px;
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--dark-green);
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: var(--text-dark);
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

const Select = styled.select`
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

const PasswordContainer = styled.div`
  position: relative;
`;

const TogglePassword = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

const Terms = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 10px;
  
  input {
    margin-top: 5px;
  }
  
  label {
    font-size: 0.9rem;
    color: var(--text-dark);
    
    a {
      color: var(--dark-green);
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
`;

const LoginLink = styled.div`
  text-align: center;
  font-size: 0.9rem;
  
  a {
    color: var(--dark-green);
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: #c62828;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  text-align: center;
`;