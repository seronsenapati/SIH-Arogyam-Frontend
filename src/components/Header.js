import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../assets/logo.svg';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <HeaderContainer className="glassmorphism">
      <LogoContainer>
        <LogoImage src={Logo} alt="Arogyam Logo" />
        <BrandName>Arogyam</BrandName>
      </LogoContainer>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/herbs">Herbs</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {user && <NavLink to="/dashboard">Dashboard</NavLink>}
        {user && <NavLink to="/appointments">Appointments</NavLink>}
      </Nav>
      <AuthSection>
        {user ? (
          <UserSection>
            <WelcomeText>Welcome, {user.email}</WelcomeText>
            <LogoutButton className="rounded-button secondary" onClick={handleLogout}>
              Logout
            </LogoutButton>
          </UserSection>
        ) : (
          <AuthButtons>
            <LoginButton className="rounded-button secondary">
              <Link to="/login">Login</Link>
            </LoginButton>
            <RegisterButton className="rounded-button primary">
              <Link to="/register">Register</Link>
            </RegisterButton>
          </AuthButtons>
        )}
      </AuthSection>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  margin: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  height: 40px;
  width: 40px;
`;

const BrandName = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: var(--dark-green);
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-green);
  }
`;

const AuthSection = styled.div`
  display: flex;
  align-items: center;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const WelcomeText = styled.span`
  font-size: 14px;
  color: var(--text-dark);
`;

const LogoutButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 14px;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 15px;
`;

const LoginButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const RegisterButton = styled.button`
  a {
    text-decoration: none;
    color: inherit;
  }
`;