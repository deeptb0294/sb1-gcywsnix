import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const timelineItems = [
  { time: '0:00', label: 'Intro' },
  { time: '0:05', label: 'Animate In' },
  { time: '0:15', label: 'Content' },
  { time: '0:30', label: 'Effects' },
  { time: '0:45', label: 'Outro' },
];

export default function Timeline() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div 
      ref={elementRef}
      className={`bg-black p-4 rounded-lg transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <div className="h-32 relative"> {/* Increased height from h-24 to h-32 */}
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{ left: `${(index / (timelineItems.length - 1)) * 100}%` }}
          >
            <div className="w-px h-16 bg-violet-500/30" />
            <span className="text-violet-500 text-xs mt-2">{item.time}</span>
            <span className="text-gray-400 text-xs mt-1 whitespace-nowrap">{item.label}</span>
          </div>
        ))}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-violet-500/10 to-violet-500/20" />
      </div>
    </div>
  );
}