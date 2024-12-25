import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
  delay = 0
}: UseIntersectionObserverProps = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  return { 
    elementRef, 
    isVisible,
    className: `transition-all duration-1000 transform ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-20 opacity-0'
    }`
  };
};