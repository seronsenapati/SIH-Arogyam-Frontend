import React, { useState } from 'react';
import { X, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export function FeedbackPopup({ onClose }) {
  const [feedback, setFeedback] = useState({
    overallExperience: 0,
    doctorExpertise: 0,
    treatmentEffectiveness: 0,
    facilityAndService: 0,
    wouldRecommend: 0,
    additionalComments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    { key: 'overallExperience', label: 'Overall Experience with AyurSutra' },
    { key: 'doctorExpertise', label: 'Doctor\'s Expertise & Knowledge' },
    { key: 'treatmentEffectiveness', label: 'Treatment Effectiveness' },
    { key: 'facilityAndService', label: 'Facility & Customer Service' },
    { key: 'wouldRecommend', label: 'Would you recommend AyurSutra?' }
  ];

  const handleStarClick = (questionKey, rating) => {
    setFeedback(prev => ({
      ...prev,
      [questionKey]: rating
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would normally send the feedback to your backend
    console.log('Feedback submitted:', feedback);
    
    // Show success message and close
    alert('Thank you for your feedback! Your response has been submitted successfully.');
    setIsSubmitting(false);
    onClose();
  };

  const isFormValid = questions.every(q => feedback[q.key] > 0);

  const renderStars = (questionKey, currentRating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            type="button"
            onClick={() => handleStarClick(questionKey, star)}
            className="transition-colors duration-200 hover:scale-110 transform"
          >
            <Star
              className={`w-8 h-8 ${
                star <= currentRating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300 hover:text-yellow-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Share Your Feedback</h2>
            <p className="text-gray-600 mt-1">Help us improve your AyurSutra experience</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-8">
          {questions.map((question) => (
            <div key={question.key} className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">
                {question.label}
              </h3>
              <div className="flex items-center gap-4">
                {renderStars(question.key, feedback[question.key])}
                <span className="text-sm text-gray-500 ml-2">
                  {feedback[question.key] > 0 && (
                    <span className="text-green-600 font-medium">
                      {feedback[question.key]} star{feedback[question.key] !== 1 ? 's' : ''}
                    </span>
                  )}
                </span>
              </div>
            </div>
          ))}

          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-900">
              Additional Comments or Issues
            </h3>
            <Textarea
              placeholder="Please share any specific feedback, suggestions, or issues you've encountered..."
              value={feedback.additionalComments}
              onChange={(e) => setFeedback(prev => ({ ...prev, additionalComments: e.target.value }))}
              className="min-h-[120px] resize-none"
            />
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Your feedback matters!</strong> Our doctors and team review all feedback to continuously improve our Ayurvedic treatments and services.
            </p>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex gap-3 justify-end rounded-b-2xl border-t">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid || isSubmitting}
            className="bg-green-600 hover:bg-green-700 text-white min-w-[120px]"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </div>
            ) : (
              'Submit Feedback'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}