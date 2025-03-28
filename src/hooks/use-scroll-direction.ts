import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down';

export function useScrollDirection(): ScrollDirection {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      // Only update state if direction changed
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', updateScrollDirection, { passive: true });
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [lastScrollY, scrollDirection]);
  
  return scrollDirection;
}
