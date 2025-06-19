import { useEffect, useState } from 'react';

export const useCounter = (
  end: number,
  duration: number = 2000,
  start: number = 0,
  shouldStart: boolean = false
) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!shouldStart) return;

    const startTime = Date.now();
    const startValue = start;
    const endValue = end;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, start, shouldStart]);

  return count;
};