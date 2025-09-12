import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, Key, Chrome, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignIn) {
      // Handle login
      onLogin({
        name: formData.fullName || 'Dr. Rajesh Kumar',
        email: formData.email,
        doctorId: 'DR123',
        specialization: formData.specialization || 'Panchakarma Specialist',
        experience: formData.experience || '15 years'
      });
    } else {
      // Handle registration
      onLogin({
        name: formData.fullName,
        email: formData.email,
        doctorId: 'DR' + Math.floor(Math.random() * 1000),
        specialization: formData.specialization,
        experience: formData.experience + ' years'
      });
    }
  };

  const handleGoogleSignIn = () => {
    onLogin({
      name: 'Dr. Rajesh Kumar',
      email: 'dr.rajesh@ayursutra.com',
      doctorId: 'DR123',
      specialization: 'Panchakarma Specialist',
      experience: '15 years'
    });
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
              >
                {isSignIn ? 'Sign In' : 'Register'}
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