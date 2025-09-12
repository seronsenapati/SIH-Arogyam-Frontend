import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, User, Phone, Calendar, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import apiClient from './api';

export function PatientAuthPage({ onBack, onLogin }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    age: '',
    dateOfBirth: '',
    gender: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleLogin = async () => {
    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      if (isSignIn) {
        // Sign in
        const response = await apiClient.post('/api/auth/login', {
          username: formData.email,
          password: formData.password
        });

        if (response.ok) {
          // Extract user data from response
          const userData = {
            id: response.data.user.id,
            email: response.data.user.email,
            role: response.data.user.role,
            token: response.data.accessToken
          };
          
          // Call the onLogin callback with user data
          onLogin(userData.role, userData);
        } else {
          setError(response.error?.message || 'Login failed');
        }
      } else {
        // Registration
        if (!formData.fullName || !formData.password || !formData.confirmPassword) {
          setError('Please fill in all required fields');
          setLoading(false);
          return;
        }

        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }

        if (formData.password.length < 6) {
          setError('Password must be at least 6 characters long');
          setLoading(false);
          return;
        }

        // Make API call to backend for registration
        const response = await apiClient.post('/api/auth/register', {
          email: formData.email,
          password: formData.password,
          role: 'patient',
          profile: {
            name: formData.fullName,
            phone: formData.phone,
            age: parseInt(formData.age) || 0,
            dateOfBirth: formData.dateOfBirth,
            gender: formData.gender
          }
        });

        if (response.ok) {
          // After successful registration, automatically log in the user
          const loginResponse = await apiClient.post('/api/auth/login', {
            username: formData.email,
            password: formData.password
          });

          if (loginResponse.ok) {
            const userData = {
              id: loginResponse.data.user.id,
              email: loginResponse.data.user.email,
              role: loginResponse.data.user.role,
              token: loginResponse.data.accessToken
            };
            
            // Call the onLogin callback with user data
            onLogin(userData.role, userData);
          }
        } else {
          setError(response.error?.message || 'Registration failed');
        }
      }
    } catch (err) {
      console.error('Authentication error:', err);
      
      // Handle CORS and network errors specifically
      if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
        setError('Network error: Unable to connect to the server. Please try again later.');
      } else if (err.message && err.message.includes('CORS')) {
        setError('Connection error: Please contact support.');
      } else if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error.message || 'Authentication failed');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen py-16 flex items-center justify-center bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Registration
        </Button>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-800">
              {isSignIn ? 'Patient Sign In' : 'Patient Registration'}
            </CardTitle>
            <p className="text-gray-600">
              {isSignIn 
                ? 'Welcome back! Access your wellness journey' 
                : 'Begin your journey to natural wellness'}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3 text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Form Fields */}
            <div className="space-y-4">
              {!isSignIn && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input 
                        id="fullName" 
                        type="text" 
                        placeholder="Enter your full name"
                        className="pl-10"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        onKeyPress={handleKeyPress}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Enter your phone number"
                        className="pl-10"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        onKeyPress={handleKeyPress}
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email address"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder={isSignIn ? "Enter your password" : "Create a strong password"}
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {!isSignIn && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input 
                        id="confirmPassword" 
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        onKeyPress={handleKeyPress}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input 
                        id="age" 
                        type="number" 
                        placeholder="Your age"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        onKeyPress={handleKeyPress}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input 
                          id="dateOfBirth" 
                          type="date" 
                          className="pl-10"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          onKeyPress={handleKeyPress}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <select
                      id="gender"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </>
              )}

              <Button 
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
              >
                {loading ? (isSignIn ? 'Signing In...' : 'Registering...') : (isSignIn ? 'Sign In' : 'Register')}
              </Button>
            </div>

            <div className="text-center">
              <Button 
                variant="ghost" 
                onClick={() => setIsSignIn(!isSignIn)}
                className="text-green-600 hover:text-green-700"
              >
                {isSignIn 
                  ? "Don't have an account? Register" 
                  : "Already have an account? Sign In"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}