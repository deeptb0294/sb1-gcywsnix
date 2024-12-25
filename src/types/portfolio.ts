export interface PortfolioCategory {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}