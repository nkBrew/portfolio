import React from 'react';
import { useInView } from 'react-intersection-observer';

interface RevealSectionProps {
  children?: React.ReactNode;
}

const StyledRevealSection = ({ children }: RevealSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  console.log(inView);
  const className = !inView ? 'fadeup-enter' : 'fadeup-enter-active';
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default StyledRevealSection;
