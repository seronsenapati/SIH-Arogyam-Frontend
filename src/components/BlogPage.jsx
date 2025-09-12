import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function BlogPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-800 mb-4">
            AyurSutra Blog
          </h1>
          <p className="text-xl text-gray-600">
            Discover the wisdom of Ayurveda through our curated articles
          </p>
        </div>

        {/* Featured Article */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>September 10, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>Dr. Priya Sharma</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
            <CardTitle className="text-3xl text-gray-800">
              What is Ayurveda?
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Ayurveda, often called the "science of life," is one of the world's oldest holistic healing systems. 
              Developed more than 5,000 years ago in India, Ayurveda is based on the belief that health and wellness 
              depend on a delicate balance between the mind, body, and spirit.
            </p>

            <h3 className="text-2xl text-gray-800 mb-4">The Foundation of Ayurveda</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              According to Ayurvedic theory, everything in the universe – both living and non-living – is connected. 
              Good health is achieved when your mind, body, and spirit are in harmony with the universe. When something 
              disrupts this balance, you become sick.
            </p>

            <h3 className="text-2xl text-gray-800 mb-4">The Three Doshas</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ayurveda believes that every person is made of five basic elements found in the universe:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Space (akasha)</li>
              <li>Air (vayu)</li>
              <li>Fire (agni)</li>
              <li>Water (jal)</li>
              <li>Earth (prithvi)</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              These elements combine in the human body to form three life forces or energies, called doshas. 
              They control how your body works:
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h4 className="text-xl text-green-800 mb-3">Vata Dosha (Space and Air)</h4>
              <p className="text-gray-700">
                Controls movement, breathing, blood circulation, heart function, and the nervous system. 
                When balanced, promotes creativity and flexibility. When unbalanced, produces fear and anxiety.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg mb-6">
              <h4 className="text-xl text-amber-800 mb-3">Pitta Dosha (Fire and Water)</h4>
              <p className="text-gray-700">
                Controls digestion, metabolism, and hormones. When balanced, promotes understanding and intelligence. 
                When unbalanced, causes anger, hatred, and jealousy.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="text-xl text-blue-800 mb-3">Kapha Dosha (Water and Earth)</h4>
              <p className="text-gray-700">
                Controls muscle and bone growth, body strength, stability, weight, and immune system. 
                When balanced, promotes love, calmness, and forgiveness. When unbalanced, leads to attachment, 
                greed, and envy.
              </p>
            </div>

            <h3 className="text-2xl text-gray-800 mb-4">Ayurvedic Treatment Approaches</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ayurvedic treatment is highly individualized and may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Dietary changes and nutritional counseling</li>
              <li>Herbal medicines and natural remedies</li>
              <li>Yoga and meditation practices</li>
              <li>Massage and bodywork therapies</li>
              <li>Lifestyle modifications</li>
              <li>Detoxification and cleansing programs</li>
            </ul>

            <h3 className="text-2xl text-gray-800 mb-4">Modern Relevance</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              In today's fast-paced world, Ayurveda offers a comprehensive approach to health that addresses not just 
              symptoms but the root causes of illness. It emphasizes prevention and treats each person as a unique 
              individual, making it increasingly relevant for modern healthcare seekers looking for natural, 
              holistic solutions.
            </p>

            <div className="bg-gradient-to-r from-green-100 to-amber-100 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong>Remember:</strong> While Ayurveda offers many benefits, it's important to consult with 
                qualified practitioners and inform your healthcare providers about any Ayurvedic treatments 
                you're considering, especially if you have existing health conditions or are taking medications.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* More Articles Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Understanding Your Constitution</CardTitle>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>September 8, 2025</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Learn how to identify your unique Ayurvedic constitution and what it means for your health and lifestyle choices.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Seasonal Eating in Ayurveda</CardTitle>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>September 5, 2025</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Discover how to eat according to the seasons to maintain balance and support your body's natural rhythms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}