import React from 'react';
import { ArrowLeft, Heart, Brain, Leaf, Zap, Droplets, Mountain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function ConsultDoshaPage({ onBack, onSelectCondition }) {
  const healthConditions = [
    {
      category: "Digestive Issues",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-50 border-red-200 hover:bg-red-100",
      iconColor: "text-red-600",
      conditions: ["Acid Reflux", "IBS", "Constipation", "Bloating", "Indigestion"]
    },
    {
      category: "Mental Health",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      iconColor: "text-purple-600",
      conditions: ["Anxiety", "Depression", "Stress", "Insomnia", "Mental Fatigue"]
    },
    {
      category: "Respiratory",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      iconColor: "text-green-600",
      conditions: ["Asthma", "Allergies", "Sinusitis", "Chronic Cough", "Bronchitis"]
    },
    {
      category: "Joint & Muscle",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
      iconColor: "text-orange-600",
      conditions: ["Arthritis", "Back Pain", "Joint Stiffness", "Muscle Pain", "Rheumatism"]
    },
    {
      category: "Skin Conditions",
      icon: <Droplets className="w-6 h-6" />,
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      iconColor: "text-blue-600",
      conditions: ["Eczema", "Psoriasis", "Acne", "Dry Skin", "Rashes"]
    },
    {
      category: "Metabolic",
      icon: <Mountain className="w-6 h-6" />,
      color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
      iconColor: "text-amber-600",
      conditions: ["Diabetes", "Thyroid Issues", "Weight Management", "High BP", "Cholesterol"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-gray-800 mb-4">Consult Your Dosha</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the health condition you'd like to address. Our certified Ayurvedic practitioners will provide personalized treatment based on your unique constitution.
          </p>
        </div>

        {/* Health Conditions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthConditions.map((category) => (
            <Card 
              key={category.category}
              className={`shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${category.color}`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white`}>
                  <div className={category.iconColor}>
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-800">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.conditions.map((condition) => (
                    <Button
                      key={condition}
                      variant="ghost"
                      onClick={() => onSelectCondition(condition)}
                      className="w-full justify-start text-left text-gray-700 hover:bg-white hover:text-gray-900"
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      {condition}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* General Consultation Option */}
        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto shadow-lg bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <h3 className="text-2xl text-gray-800 mb-4">General Wellness Consultation</h3>
              <p className="text-gray-600 mb-6">
                Not sure about your specific condition? Book a general consultation for comprehensive health assessment.
              </p>
              <Button 
                onClick={() => onSelectCondition('General Wellness')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                Book General Consultation
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Information Section */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl text-gray-800 mb-6 text-center">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-semibold">1</span>
              </div>
              <h3 className="text-lg text-gray-800 mb-2">Initial Assessment</h3>
              <p className="text-gray-600">Detailed consultation about your constitution and current health status</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-semibold">2</span>
              </div>
              <h3 className="text-lg text-gray-800 mb-2">Personalized Plan</h3>
              <p className="text-gray-600">Customized treatment plan including diet, lifestyle, and herbal remedies</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-semibold">3</span>
              </div>
              <h3 className="text-lg text-gray-800 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Regular follow-ups and adjustments to ensure optimal results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}