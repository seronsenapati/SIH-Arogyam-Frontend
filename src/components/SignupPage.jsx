import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, User, Phone, Calendar, UserCircle, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import axios from 'axios';

export function SignupPage({ onBack, onRegister }) {
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
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleRegister = async () => {
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Make API call to backend for registration
      const response = await axios.post('/api/auth/register', {
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

      if (response.data.ok) {
        setSuccess(true);
        // After successful registration, automatically log in the user
        const loginResponse = await axios.post('/api/auth/login', {
          username: formData.email,
          password: formData.password
        });

        if (loginResponse.data.ok) {
          const userData = {
            id: loginResponse.data.data.user.id,
            email: loginResponse.data.data.user.email,
            role: loginResponse.data.data.user.role,
            token: loginResponse.data.data.accessToken
          };
          
          // Call the onRegister callback with user data
          onRegister(userData.role, userData);
        }
      } else {
        setError(response.data.error?.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error.message || 'Registration failed');
      } else {
        setError('An error occurred during registration. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRegister();
    }
  };

  if (success) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center bg-gradient-to-b from-blue-50 to-green-50">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Card className="shadow-lg">
            <CardContent className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h2>
              <p className="text-gray-600 mb-6">
                Your account has been created successfully. You are now logged in.
              </p>
              <Button 
                onClick={() => onRegister('patient', { email: formData.email })}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Continue to Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
          Back to Home
        </Button>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-800">
              Patient Registration
            </CardTitle>
            <p className="text-gray-600">
              Begin your journey to natural wellness
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

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
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

              <Button 
                onClick={handleRegister}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
              >
                {loading ? 'Registering...' : 'Register'}
              </Button>
            </div>

            <div className="text-center">
              <Button 
                variant="ghost" 
                onClick={() => window.location.hash = '#/login'}
                className="text-green-600 hover:text-green-700"
              >
                Already have an account? Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
