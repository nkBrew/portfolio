import { useEffect, useState } from 'react';

export enum ScrollDirection {
  UP,
  DOWN,
}

export const useScrollDirection = (initialDirection: ScrollDirection) => {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>(initialDirection);
  useEffect(() => {
    const threshold = 10;
    let lastYOffset = window.pageYOffset;
    let ticking = false;
    const updateScrollDirection = () => {
      const yOffset = window.pageYOffset;

      const difference = yOffset - lastYOffset;
      if (Math.abs(difference) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(
        yOffset > lastYOffset ? ScrollDirection.DOWN : ScrollDirection.UP,
      );

      lastYOffset = yOffset > 0 ? yOffset : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  console.log('****** ', scrollDir);
  return scrollDir;
};
