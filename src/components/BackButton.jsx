import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

export function BackButton({ onBack, className = "" }) {
  return (
    <Button
      onClick={onBack}
      variant="ghost"
      className={`fixed top-4 left-4 z-40 w-10 h-10 p-2 bg-white/90 hover:bg-white shadow-md rounded-full border border-gray-200 ${className}`}
    >
      <ArrowLeft className="w-4 h-4 text-gray-700" />
    </Button>
  );
}