import React, { ReactNode, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  options?: any;
}

export const TiltCard = ({ children, className = "", options = {} }: TiltCardProps) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02,
        ...options
      });
    }
  }, [options]);

  return (
    <div
      ref={tiltRef}
      className={`perspective-1000 ${className}`}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </div>
  );
};
