"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export function PlatformDemo() {
  const [activeTab, setActiveTab] = useState('calendar');

  const tabContent = {
    calendar: (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-charcoal">June 2023</h3>
          <div className="flex gap-2">
            <button className="p-1 rounded hover:bg-ivory">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-1 rounded hover:bg-ivory">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Week Days */}
        <div className="grid grid-cols-7 text-center text-sm text-muted">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className={`h-10 flex items-center justify-center rounded-lg ${
                [6, 13, 20, 27].includes(i) 
                  ? 'bg-primary text-cream' 
                  : i > 24 
                    ? 'text-muted' 
                    : 'hover:bg-ivory'
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        
        {/* Events */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center p-3 rounded-lg bg-ivory">
            <div className="w-3 h-3 rounded-full bg-forest mr-3"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Morning Yoga Flow</p>
              <p className="text-xs text-muted">7:00 AM • Deck</p>
            </div>
          </div>
          
          <div className="flex items-center p-3 rounded-lg bg-ivory">
            <div className="w-3 h-3 rounded-full bg-gold mr-3"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Farm-to-Table Workshop</p>
              <p className="text-xs text-muted">6:00 PM • Culinary Studio</p>
            </div>
          </div>
        </div>
      </div>
    ),
    live: (
      <div className="space-y-6">
        <div className="bg-ivory rounded-xl p-4">
          <div className="aspect-video bg-stone/20 rounded-lg mb-4 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-stone/30 flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-stone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-muted">Live Stream Preview</p>
            </div>
          </div>
          <h3 className="font-medium text-charcoal">Currently Streaming</h3>
          <p className="text-sm text-slate">Watercolor & Wine with Elena Rodriguez</p>
          <div className="flex items-center mt-2">
            <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
            <span className="text-xs text-muted">Live • 12 viewers</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium text-charcoal">Upcoming Live Sessions</h4>
          {[
            { title: "Sunrise Flow & Meditation", time: "Tomorrow, 7:00 AM", host: "Sarah Jenkins" },
            { title: "Advanced Pastry Techniques", time: "Sun, 2:00 PM", host: "Chef Marco Rossi" },
            { title: "Sound Bath Immersion", time: "Wed, 7:00 PM", host: "Dr. Alisha Patel" }
          ].map((session, index) => (
            <div key={index} className="flex items-center p-3 rounded-lg bg-background depth-1">
              <div className="w-10 h-10 rounded-lg bg-stone/20 mr-4 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-stone" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{session.title}</p>
                <p className="text-xs text-muted">{session.time} • {session.host}</p>
              </div>
              <Button size="sm" variant="outline">Set Reminder</Button>
            </div>
          ))}
        </div>
      </div>
    ),
    'on-demand': (
      <div className="space-y-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search library..."
            className="w-full px-4 py-3 rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "HIIT & Strength Fundamentals", duration: "30 min", category: "Movement" },
            { title: "Mindful Breathing for Stress", duration: "15 min", category: "Wellness" },
            { title: "Introduction to Pottery", duration: "2.5 hours", category: "Arts" },
            { title: "Nutritional Consulting Basics", duration: "45 min", category: "Wellness" }
          ].map((video, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden depth-1">
              <div className="h-32 bg-gradient-to-r from-primary/10 to-accent/10 relative">
                <div className="absolute bottom-2 right-2 bg-ivory text-charcoal text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-sm font-medium text-charcoal mb-1">{video.title}</h4>
                <p className="text-xs text-muted">{video.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    updates: (
      <div className="space-y-6">
        <div className="bg-ivory rounded-xl p-4">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Bell className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-charcoal">New Experience Added</h4>
              <p className="text-xs text-muted">2 hours ago</p>
            </div>
          </div>
          <p className="text-sm text-slate">
            We've added "Digital Nomad Networking" to our experience catalog. Join fellow remote workers for meaningful connections.
          </p>
        </div>
        
        <div className="bg-ivory rounded-xl p-4">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
              <User className="w-4 h-4 text-gold" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-charcoal">New Host Joined</h4>
              <p className="text-xs text-muted">1 day ago</p>
            </div>
          </div>
          <p className="text-sm text-slate">
            Welcome James "Guitar" Ford to our host community! He'll be offering guitar workshops and music theory classes.
          </p>
        </div>
        
        <div className="bg-ivory rounded-xl p-4">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-3">
              <Calendar className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-charcoal">Event Reminder</h4>
              <p className="text-xs text-muted">3 days ago</p>
            </div>
          </div>
          <p className="text-sm text-slate">
            Don't forget: Watercolor & Wine with Elena Rodriguez this Friday at 7:00 PM.
          </p>
        </div>
      </div>
    )
  };

  return (
    <div className="bg-background rounded-2xl depth-2">
      {/* Tab Headers */}
      <div className="flex border-b border-stone">
        {[
          { id: 'calendar', label: 'Calendar' },
          { id: 'live', label: 'Live' },
          { id: 'on-demand', label: 'On-demand Library' },
          { id: 'updates', label: 'Community Updates' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? 'text-primary border-b-2 border-primary'
                : 'text-charcoal hover:text-primary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="p-6">
        {tabContent[activeTab as keyof typeof tabContent]}
      </div>
    </div>
  );
}

// Import required icons
import { Calendar, Search, Bell, User } from 'lucide-react';