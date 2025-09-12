import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Leaf, Heart, Brain, Wind, Flame, Mountain, CheckCircle, Mail, X, Calendar, Star, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';

export function HomePage({ onTakeDoshaAssessment }) {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [email, setEmail] = useState('');

  // Remove the useEffect that triggers the popup
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowNewsletter(true);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleSubscribe = () => {
    console.log('Subscribing email:', email);
    setEmail('');
    setShowNewsletter(false);
  };

  const handleLearnMore = () => {
    // Scroll to the features section
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactExperts = () => {
    // Scroll to the contact section or open contact modal
    console.log('Contacting experts');
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section 
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1677599082447-6549af4c5454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMGhlcmJzJTIwc3BpY2VzJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTc1MjEzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6">
            Ancient Wisdom
          </h1>
          <h2 className="text-3xl md:text-5xl text-green-300 mb-8">
            Modern Wellness
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover the timeless principles of Ayurveda and find your path to natural healing, balance, and holistic well-being.
          </p>
          <div className="flex justify-center">
            <Button 
              onClick={handleLearnMore}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-full text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl text-gray-800 mb-4">
              Why Choose Ayurveda?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Experience the benefits of ancient wisdom combined with modern understanding
            </p>
            <div className="bg-green-50 p-6 rounded-lg max-w-4xl mx-auto mb-12">
              <p className="text-gray-700 leading-relaxed">
                Ayurveda is a 5,000-year-old system of natural healing that originated in India. It focuses on creating balance in the body, mind, and consciousness through personalized lifestyle practices, diet, and natural remedies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-800">Natural Healing</h3>
              <p className="text-gray-600">Harness the power of natural herbs and remedies for gentle, effective healing.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-800">Holistic Wellness</h3>
              <p className="text-gray-600">Address mind, body, and spirit for complete well-being and balance.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-800">Ancient Wisdom</h3>
              <p className="text-gray-600">5,000 years of proven traditional knowledge and practices.</p>
            </div>
          </div>

          {/* The Science of Life Section */}
          <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl text-gray-800 mb-6 text-center">The Science of Life</h2>
              <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
                Ayurveda, meaning "science of life," teaches us that health is not merely the absence of disease, but a state of perfect balance between body, mind, and spirit. Through understanding your unique constitution (Prakriti) and current imbalances (Vikriti), Ayurveda provides personalized guidance for optimal health.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg text-gray-800 mb-2">Personalized Medicine</h4>
                    <p className="text-gray-600">Treatments tailored to your unique constitution</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg text-gray-800 mb-2">Holistic Approach</h4>
                    <p className="text-gray-600">Addressing root causes, not just symptoms</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg text-gray-800 mb-2">Natural Remedies</h4>
                    <p className="text-gray-600">Using herbs, diet, and lifestyle as medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Your Dosha Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-6">Understanding Your Dosha</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              According to Ayurveda, everyone has a unique combination of three doshas (bio-energies) that determine their physical, mental, and emotional characteristics.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-12">
            {/* Vata */}
            <Card className="shadow-md hover:shadow-lg transition-shadow bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wind className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Vata</h3>
                  <p className="text-green-600 font-medium text-sm">Air & Ether Elements</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Creative, energetic, and quick-thinking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Light, thin build with variable appetite</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">When imbalanced: anxiety, insomnia, constipation</span>
                  </div>
                </div>
                <Button 
                  onClick={onTakeDoshaAssessment}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white text-sm py-2"
                >
                  Discover Your Vata Qualities
                </Button>
              </CardContent>
            </Card>

            {/* Pitta */}
            <Card className="shadow-md hover:shadow-lg transition-shadow bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Flame className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Pitta</h3>
                  <p className="text-amber-600 font-medium text-sm">Fire & Water Elements</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Focused, determined, and natural leaders</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Medium build with strong digestion</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">When imbalanced: anger, inflammation, acidity</span>
                  </div>
                </div>
                <Button 
                  onClick={onTakeDoshaAssessment}
                  className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white text-sm py-2"
                >
                  Discover Your Pitta Qualities
                </Button>
              </CardContent>
            </Card>

            {/* Kapha */}
            <Card className="shadow-md hover:shadow-lg transition-shadow bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mountain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Kapha</h3>
                  <p className="text-blue-600 font-medium text-sm">Earth & Water Elements</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Calm, grounded, and naturally compassionate</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Sturdy build with steady energy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">When imbalanced: weight gain, congestion, lethargy</span>
                  </div>
                </div>
                <Button 
                  onClick={onTakeDoshaAssessment}
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2"
                >
                  Discover Your Kapha Qualities
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              onClick={onTakeDoshaAssessment}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg"
            >
              Take Complete Dosha Assessment
            </Button>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Understanding your unique dosha combination is the first step toward personalized wellness and natural healing.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4">Transformative Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from individuals who have experienced the profound benefits of Ayurvedic wisdom
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "AyurSutra's personalized approach helped me understand my body like never before. After just three months of following their Ayurvedic recommendations, my chronic digestive issues disappeared completely."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
                    <p className="text-gray-600 text-sm">Bangalore, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "As a busy professional, I was constantly stressed and fatigued. The Ayurvedic lifestyle changes recommended by AyurSutra have transformed my energy levels and mental clarity. I feel more balanced than ever."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Raj Patel</h4>
                    <p className="text-gray-600 text-sm">Mumbai, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The seasonal wellness guidance from AyurSutra has helped me maintain my health throughout the year. I haven't fallen sick in over two years, and my family has also adopted these practices."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Anita Desai</h4>
                    <p className="text-gray-600 text-sm">Delhi, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Begin Your Ayurvedic Journey Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of individuals who have transformed their health through the wisdom of Ayurveda
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={onTakeDoshaAssessment}
              className="bg-white text-green-800 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
            >
              Start Your Assessment
            </Button>
            <Button 
              onClick={handleContactExperts}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-full text-lg"
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-white">AyurSutra</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Bringing the ancient wisdom of Ayurveda to modern wellness practices. Personalized health solutions for a balanced life.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('features').scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); /* Add services functionality here */ }} className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); /* Add blog functionality here */ }} className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@ayursutra.com</li>
                <li>Phone: +91 9876543210</li>
                <li>Address: Wellness Street, Ayurveda Nagar</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 AyurSutra. All rights reserved. Embracing the wisdom of Ayurveda for modern wellness.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}