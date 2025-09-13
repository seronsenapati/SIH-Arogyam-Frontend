import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, Key, Chrome, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { apiClient } from './api'; // Import the API client

export function DoctorAuthPage({ onBack, onLogin }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    specialization: '',
    experience: '',
    doctorKey: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [error, setError] = useState(''); // Add error state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      if (isSignIn) {
        // Handle login with real API call
        const loginData = {
          email: formData.email,
          password: formData.password
        };
        
        const response = await apiClient.post('/api/auth/login', loginData);
        
        // Handle successful login
        const userProfile = {
          id: response.id || response.userId,
          email: response.email,
          name: response.name || response.fullName || 'Dr. ' + (response.email?.split('@')[0] || 'Doctor'),
          firstName: response.firstName,
          lastName: response.lastName,
          doctorId: response.doctorId || response.id,
          specialization: response.specialization || 'Ayurveda Specialist',
          experience: response.experience || '5+ Years'
        };
        
        // Call the onLogin callback with role and user profile
        onLogin('doctor', userProfile);
      } else {
        // Handle registration with real API call
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        
        const registerData = {
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          specialization: formData.specialization,
          experience: parseInt(formData.experience),
          doctorKey: formData.doctorKey
        };
        
        const response = await apiClient.post('/api/auth/register', registerData);
        
        // Handle successful registration
        const userProfile = {
          id: response.id || response.userId,
          email: response.email,
          name: response.name || response.fullName || 'Dr. ' + (response.email?.split('@')[0] || 'Doctor'),
          firstName: response.firstName,
          lastName: response.lastName,
          doctorId: response.doctorId || response.id,
          specialization: response.specialization || formData.specialization,
          experience: response.experience || formData.experience + ' years'
        };
        
        // Call the onLogin callback with role and user profile
        onLogin('doctor', userProfile);
      }
    } catch (err) {
      console.error('Authentication error:', err);
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    // For now, we'll keep the mock data for Google sign-in
    // In a real implementation, this would trigger Google OAuth flow
    const userProfile = {
      name: 'Dr. Rajesh Kumar',
      email: 'dr.rajesh@ayursutra.com',
      doctorId: 'DR123',
      specialization: 'Panchakarma Specialist',
      experience: '15 years'
    };
    
    // Call the onLogin callback with role and user profile
    onLogin('doctor', userProfile);
  };

  const handleForgotPassword = () => {
    alert('Password reset link has been sent to your email address.');
  };

  return (
    <div className="min-h-screen py-16 flex items-center justify-center bg-gradient-to-b from-green-50 to-amber-50">
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
              {isSignIn ? 'Doctor Sign In' : 'Doctor Registration'}
            </CardTitle>
            <p className="text-gray-600">
              {isSignIn 
                ? 'Welcome back! Sign in to your account' 
                : 'Join our network of verified Ayurvedic practitioners'}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3 text-red-700 text-sm">
                {error}
              </div>
            )}
            
            {/* Google Sign In */}
            <Button 
              variant="outline" 
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 py-3"
            >
              <Chrome className="w-5 h-5 text-blue-500" />
              Sign in with Google
            </Button>
            
            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-2 text-sm text-gray-500">or</span>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {!isSignIn && (
                <div className="space-y-2">
                  <Label htmlFor="docKey">Doctor Key</Label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      id="docKey" 
                      name="doctorKey"
                      type="text" 
                      value={formData.doctorKey}
                      onChange={handleInputChange}
                      placeholder="Enter your doctor verification key"
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    Contact support to get your doctor verification key
                  </p>
                </div>
              )}

              {isSignIn && (
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      id="password" 
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                      required
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
              )}

              {!isSignIn && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName" 
                      name="fullName"
                      type="text" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Dr. Your Full Name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input 
                      id="specialization" 
                      name="specialization"
                      type="text" 
                      value={formData.specialization}
                      onChange={handleInputChange}
                      placeholder="e.g., Panchakarma, Rasayana, etc."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input 
                      id="experience" 
                      name="experience"
                      type="number" 
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="e.g., 5"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input 
                        id="password" 
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a strong password"
                        className="pl-10 pr-10"
                        required
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
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input 
                        id="confirmPassword" 
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10"
                        required
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
                </>
              )}

              <Button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isSignIn ? 'Signing In...' : 'Registering...'}
                  </span>
                ) : (
                  isSignIn ? 'Sign In' : 'Register'
                )}
              </Button>
            </form>

            {isSignIn && (
              <div className="text-center">
                <Button 
                  variant="ghost" 
                  onClick={handleForgotPassword}
                  className="text-green-600 hover:text-green-700 text-sm"
                >
                  Forgot Password?
                </Button>
              </div>
            )}

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