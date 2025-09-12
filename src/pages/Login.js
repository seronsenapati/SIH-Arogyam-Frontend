import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const result = await login({
        email: formData.email,
        password: formData.password
      });
      
      if (result.success) {
        // Navigation is now handled by the useEffect above
        // when isAuthenticated changes
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
    <LoginContainer>
      <LoginForm className="glassmorphism">
        <FormHeader>
          <Title>Welcome Back</Title>
          <Subtitle>Login to your Arogyam account</Subtitle>
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
          
          <ForgotPassword>
            <Link to="/forgot-password">Forgot Password?</Link>
          </ForgotPassword>
          
          <SubmitButton type="submit" className="rounded-button primary" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </SubmitButton>
        </Form>
        
        <SignupLink>
          Don't have an account? <Link to="/register">Sign up</Link>
        </SignupLink>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 20px;
`;

const LoginForm = styled.div`
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

const ForgotPassword = styled.div`
  text-align: right;
  margin-bottom: 20px;
  
  a {
    color: var(--dark-green);
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
`;

const SignupLink = styled.div`
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