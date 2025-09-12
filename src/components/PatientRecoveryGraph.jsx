import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TrendingUp, Activity, Heart } from 'lucide-react';

export function PatientRecoveryGraph({ className = "" }) {
  // Mock recovery data over the last 30 days
  const recoveryData = [
    { date: '11/15', recovery: 25, symptoms: 80, energy: 30, sleep: 40 },
    { date: '11/20', recovery: 35, symptoms: 70, energy: 45, sleep: 50 },
    { date: '11/25', recovery: 45, symptoms: 60, energy: 55, sleep: 60 },
    { date: '11/30', recovery: 50, symptoms: 55, energy: 60, sleep: 65 },
    { date: '12/05', recovery: 65, symptoms: 45, energy: 70, sleep: 75 },
    { date: '12/10', recovery: 75, symptoms: 35, energy: 80, sleep: 80 },
    { date: '12/15', recovery: 85, symptoms: 25, energy: 85, sleep: 90 }
  ];

  const currentRecovery = recoveryData[recoveryData.length - 1].recovery;
  const previousRecovery = recoveryData[recoveryData.length - 2].recovery;
  const improvementRate = currentRecovery - previousRecovery;

  return (
    <Card className={`shadow-lg border-0 bg-white/90 backdrop-blur-sm ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-800">
          <TrendingUp className="w-5 h-5" />
          Recovery Progress
        </CardTitle>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Recovery %</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <span className="text-gray-600">Symptoms %</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">Energy Level</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Status Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <Activity className="w-5 h-5 text-green-600 mx-auto mb-1" />
            <p className="text-sm text-gray-600">Recovery</p>
            <p className="text-xl font-medium text-green-700">{currentRecovery}%</p>
            <p className="text-xs text-green-600">
              +{improvementRate}% this week
            </p>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <Heart className="w-5 h-5 text-blue-600 mx-auto mb-1" />
            <p className="text-sm text-gray-600">Energy</p>
            <p className="text-xl font-medium text-blue-700">
              {recoveryData[recoveryData.length - 1].energy}%
            </p>
            <p className="text-xs text-blue-600">Excellent</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="w-5 h-5 bg-purple-600 rounded-full mx-auto mb-1"></div>
            <p className="text-sm text-gray-600">Sleep Quality</p>
            <p className="text-xl font-medium text-purple-700">
              {recoveryData[recoveryData.length - 1].sleep}%
            </p>
            <p className="text-xs text-purple-600">Much Better</p>
          </div>
        </div>

        {/* Main Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={recoveryData}>
              <defs>
                <linearGradient id="recoveryGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="symptomsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f87171" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f87171" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                dataKey="date" 
                stroke="#64748b"
                fontSize={12}
              />
              <YAxis 
                stroke="#64748b"
                fontSize={12}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [
                  `${value}%`,
                  name === 'recovery' ? 'Recovery' :
                  name === 'symptoms' ? 'Symptoms' :
                  name === 'energy' ? 'Energy' :
                  name === 'sleep' ? 'Sleep Quality' : name
                ]}
              />
              <Area
                type="monotone"
                dataKey="recovery"
                stroke="#10b981"
                strokeWidth={3}
                fill="url(#recoveryGradient)"
              />
              <Area
                type="monotone"
                dataKey="symptoms"
                stroke="#f87171"
                strokeWidth={2}
                fill="url(#symptomsGradient)"
              />
              <Line
                type="monotone"
                dataKey="energy"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recovery Insights */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-800 mb-2">Recovery Insights</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-700">
                Recovery improved by {improvementRate}% in the last 5 days
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-700">
                Energy levels are consistently above 70%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-purple-700">
                Sleep quality has improved significantly
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span className="text-red-600">
                Symptoms reduced by 55% since treatment start
              </span>
            </div>
          </div>
        </div>

        {/* Next Milestone */}
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Next Recovery Milestone</p>
          <p className="font-medium text-gray-800">95% Recovery Target</p>
          <p className="text-xs text-gray-500">Estimated: 10 days</p>
        </div>
      </CardContent>
    </Card>
  );
}