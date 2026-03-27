"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  User, 
  CreditCard, 
  CheckCircle 
} from 'lucide-react';

interface ReserveModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: {
    id: string;
    title: string;
    type: 'Live' | 'On-demand';
    nextSession?: string;
    duration: string;
    price: string;
  };
}

export function ReserveModal({ isOpen, onClose, experience }: ReserveModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: experience.nextSession || '',
    time: '',
    name: '',
    email: '',
    guests: 1
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // In a real app, this would submit the reservation
      console.log('Reservation submitted:', formData);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="heading-md mb-4">Choose Session</h3>
            {experience.type === 'Live' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                    <input
                      type="text"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Select date"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Time</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['7:00 AM', '10:00 AM', '2:00 PM', '5:00 PM', '7:00 PM'].map((timeSlot) => (
                      <button
                        key={timeSlot}
                        type="button"
                        onClick={() => setFormData({...formData, time: timeSlot})}
                        className={cn(
                          "px-3 py-2 text-sm rounded-lg border",
                          formData.time === timeSlot
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-subtle hover:border-charcoal"
                        )}
                      >
                        {timeSlot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-medium text-charcoal mb-2">On-Demand Experience</h4>
                <p className="text-sm text-slate">
                  This experience is available on-demand. You can start it anytime after booking.
                </p>
              </div>
            )}
          </div>
        );
      
      case 2:
        return (
          <div>
            <h3 className="heading-md mb-4">Your Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Your full name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Email Address</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              {experience.type === 'Live' && (
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'person' : 'people'}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="heading-md mb-3">Reservation Confirmed!</h3>
            <p className="body-md text-slate mb-6">
              Your spot for "{experience.title}" has been reserved.
            </p>
            
            <div className="bg-ivory rounded-xl p-4 text-left mb-6">
              <h4 className="font-medium text-charcoal mb-3">Booking Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Experience:</span>
                  <span className="font-medium">{experience.title}</span>
                </div>
                {experience.type === 'Live' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted">Date:</span>
                      <span>{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Time:</span>
                      <span>{formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Guests:</span>
                      <span>{formData.guests}</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between">
                  <span className="text-muted">Price:</span>
                  <span className="font-medium">{experience.price}</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-slate mb-6">
              We've sent a confirmation email to {formData.email}. Check your calendar for details.
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-background rounded-2xl max-w-md w-full depth-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="heading-md">
              {step < 3 ? 'Reserve Spot' : 'Confirmed'}
            </h2>
            <button 
              onClick={onClose}
              className="text-muted hover:text-charcoal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Progress Indicator */}
          {step < 3 && (
            <div className="mb-6">
              <div className="flex justify-between text-xs text-muted mb-2">
                <span>Step {step} of 2</span>
              </div>
              <div className="w-full bg-stone rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${step * 50}%` }}
                ></div>
              </div>
            </div>
          )}
          
          {/* Form Content */}
          <form onSubmit={handleSubmit}>
            {renderStep()}
            
            {/* Footer Buttons */}
            <div className="flex justify-between mt-8">
              <Button 
                type="button" 
                variant="outline" 
                onClick={step === 1 ? onClose : () => setStep(step - 1)}
              >
                {step === 1 ? 'Cancel' : 'Back'}
              </Button>
              
              {step < 3 ? (
                <Button type="submit">
                  {step === 1 ? 'Continue' : step === 2 ? 'Confirm Booking' : 'Close'}
                </Button>
              ) : (
                <Button onClick={onClose}>Close</Button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Helper function for conditional classes
function cn(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

// Import required icons
import { Play } from 'lucide-react';