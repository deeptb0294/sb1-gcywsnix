import type { PortfolioItem } from '../types/portfolio';

export const portfolioItems: Record<string, PortfolioItem[]> = {
  "motion-graphics": [
    {
      id: 'motion-1',
      title: "Dynamic Logo Animation",
      category: "Motion Graphics",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      videoUrl: "https://example.com/your-motion-video-1.mp4",
      description: "Smooth and modern logo animation with dynamic transitions."
    },
    {
      id: 'motion-2',
      title: "Abstract Motion Design",
      category: "Motion Graphics",
      thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      videoUrl: "https://example.com/your-motion-video-2.mp4",
      description: "Abstract shapes and colors in motion creating a mesmerizing experience."
    }
  ],
  // Add other categories as needed
};