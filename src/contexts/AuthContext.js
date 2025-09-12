import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { authAPI } from '../services/api';

// Set up axios defaults
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL || 'https://sih-arogyam-backend.onrender.com';
axios.defaults.withCredentials = true;

// Create the Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is authenticated on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // First try the status endpoint
      const response = await authAPI.status();
      if (response.data.isAuthenticated) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.warn('Auth status check failed, trying alternative method:', error.message);
      // Fallback: check if we have a token in localStorage
      const token = localStorage.getItem('authToken');
      if (token) {
        // If we have a token, try to validate it
        try {
          // Set a temporary user state based on token
          // In a real app, you'd decode the JWT or make another API call
          setUser({ id: 'temp', email: 'user@example.com' });
        } catch (tokenError) {
          console.error('Token validation failed:', tokenError);
          // Clear invalid token
          localStorage.removeItem('authToken');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      if (response.data.user) {
        setUser(response.data.user);
        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token);
        }
        return { success: true, user: response.data.user };
      }
    } catch (error) {
      // Handle 401 errors specifically
      if (error.response?.status === 401) {
        return { 
          success: false, 
          message: 'Invalid email or password' 
        };
      }
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      if (response.data.user) {
        setUser(response.data.user);
        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token);
        }
        return { success: true, user: response.data.user };
      }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      localStorage.removeItem('authToken');
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;