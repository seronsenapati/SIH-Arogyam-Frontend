import React from 'react';
import { Heart, Users, Award, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function AboutUsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-gray-800 mb-6">
            About AyurSutra
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to bringing the ancient wisdom of Ayurveda to the modern world, 
            connecting seekers with authentic practitioners and timeless healing traditions.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To make authentic Ayurvedic knowledge and practices accessible to everyone, fostering a global 
              community where ancient wisdom meets modern wellness needs. We believe in empowering individuals 
              to take charge of their health through natural, holistic approaches that have been proven over millennia.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-none bg-green-50 hover:bg-green-100 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">Authenticity</h3>
                <p className="text-gray-600">
                  We honor traditional Ayurvedic principles while ensuring all practices are authentic and rooted in classical texts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none bg-blue-50 hover:bg-blue-100 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">Community</h3>
                <p className="text-gray-600">
                  Building bridges between practitioners and seekers, creating a supportive global wellness community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none bg-amber-50 hover:bg-amber-100 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">Excellence</h3>
                <p className="text-gray-600">
                  Committed to the highest standards in education, practice, and patient care in all our endeavors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none bg-purple-50 hover:bg-purple-100 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">Accessibility</h3>
                <p className="text-gray-600">
                  Making Ayurvedic wisdom accessible to all, regardless of location, background, or economic status.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                AyurSutra was born from a deep reverence for Ayurveda's transformative power and a vision to 
                bridge the gap between ancient wisdom and modern healthcare needs. Our founders, having 
                experienced profound healing through Ayurvedic practices, recognized the urgent need for 
                a platform that could connect authentic practitioners with those seeking natural wellness solutions.
              </p>
              <p>
                What started as a small initiative has grown into a comprehensive platform serving thousands 
                of practitioners and patients worldwide. We've carefully curated a network of qualified 
                Ayurvedic doctors, therapists, and wellness experts who share our commitment to authentic, 
                ethical practice.
              </p>
              <p>
                Today, AyurSutra stands as a beacon for those seeking to reclaim their health through time-tested, 
                natural methods. We continue to evolve, always staying true to our core mission of making 
                Ayurveda accessible, understandable, and effective for the modern world.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-amber-100 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl text-green-700 mb-2">5000+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
                <div>
                  <div className="text-3xl text-green-700 mb-2">500+</div>
                  <div className="text-gray-600">Certified Doctors</div>
                </div>
                <div>
                  <div className="text-3xl text-green-700 mb-2">50+</div>
                  <div className="text-gray-600">Cities Served</div>
                </div>
                <div>
                  <div className="text-3xl text-green-700 mb-2">15+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl text-gray-800 mb-6">Our Commitment</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are committed to maintaining the highest standards of practice, ensuring that every interaction 
            on our platform upholds the sacred principles of Ayurveda. Our team works tirelessly to verify 
            credentials, provide ongoing education, and create a safe, supportive environment for healing and growth.
          </p>
        </div>
      </div>
    </div>
  );
}