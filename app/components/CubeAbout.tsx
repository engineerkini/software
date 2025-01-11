'use client'

import React, { useState, useEffect, useRef } from 'react';

interface Rotation {
  x: number;
  y: number;
}

interface Position {
  x: number;
  y: number;
}

interface Face {
  title: string;
  gradient: string;
  content:string;
}

const Logo: React.FC = () => (
   <div className='w-[40px] h-[40px] bg-black rounded-full'>
     <img src='/logo.png'/>
   </div>
);

const INITIAL_ROTATION: Rotation = { x: 20, y: 45 };
const ROTATION_SENSITIVITY = 0.5;
const AUTO_ROTATION_SPEED = 0.2;
const RADIUS = 12;

const faces: Face[] = [
  { 
    title: "Showcase Portfolio", 
    gradient: "from-pink-500 to-amber-500", 
    content: "Highlight participant's best work." 
  },
  { 
    title: "Training Programs", 
    gradient: "from-amber-500 to-pink-500", 
    content: "Skill-building through workshops and training." 
  },
  { 
    title: "Mentorship Opportunities", 
    gradient: "from-pink-500 to-amber-500", 
    content: "Guidance  from industry professionals." 
  },
  { 
    title: "Community Hub", 
    gradient: "from-amber-500 to-pink-500", 
    content: "Collaborative space for creatives to connect and share." 
  },
  { 
    title: "Online Content Library", 
    gradient: "from-pink-500 to-amber-500", 
    content: "Access to tutorials and resources for artists." 
  },
  { 
    title: "Event Calendar", 
    gradient: "from-amber-500 to-pink-500", 
    content: "Track upcoming events and showcases." 
  }
];


// Round values to 4 decimal places to ensure consistent server/client rendering
const roundValue = (value: number): number => {
  return Math.round(value * 10000) / 10000;
};

const getTransform = (index: number): string => {
  const angleStep = (360 / faces.length);
  const angle = index * angleStep;
  const radian = (angle * Math.PI) / 180;
  
  const x = roundValue(Math.sin(radian) * RADIUS);
  const z = roundValue(Math.cos(radian) * RADIUS);
  
  return `translateX(${x}rem) translateZ(${z}rem) rotateY(${angle}deg)`;
};

const CircleDisplay: React.FC = () => {
  // Use useState with null initial state for client-side only initialization
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState<Rotation>(INITIAL_ROTATION);
  const [autoRotate, setAutoRotate] = useState(true);
  const lastPos = useRef<Position>({ x: 0, y: 0 });
  const displayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    let animationId: number;

    if (autoRotate) {
      const animate = (): number => {
        setRotation(prev => ({
          x: prev.x,
          y: roundValue(prev.y + AUTO_ROTATION_SPEED)
        }));
        return requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [autoRotate, mounted]);

  const handleStart = (e: React.MouseEvent | React.TouchEvent): void => {
    setIsDragging(true);
    setAutoRotate(false);
    const event = ('touches' in e) ? e.touches[0] : (e as React.MouseEvent);
    lastPos.current = { x: event.clientX, y: event.clientY };
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent): void => {
    if (!isDragging) return;

    const event = ('touches' in e) ? e.touches[0] : (e as React.MouseEvent);
    const deltaX = event.clientX - lastPos.current.x;
    const deltaY = event.clientY - lastPos.current.y;

    setRotation(prev => ({
      x: roundValue(prev.x - deltaY * ROTATION_SENSITIVITY),
      y: roundValue(prev.y + deltaX * ROTATION_SENSITIVITY)
    }));

    lastPos.current = { x: event.clientX, y: event.clientY };
  };

  const handleEnd = (): void => {
    setIsDragging(false);
  };

  // Return null or loading state before client-side hydration
  if (!mounted) {
    return <div className="w-full h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="w-full h-screen lg:pr-[200px] flex flex-col items-center justify-center perspective-1200">
      <div 
        ref={displayRef}
        className="relative w-36 h-36 md:w-80 md:h-[150px] transform-style-preserve-3d cursor-grab active:cursor-grabbing"
        style={{
          transform: `rotateX(${roundValue(rotation.x)}deg) rotateY(${roundValue(rotation.y)}deg)`,
          transition: isDragging ? 'none' : 'transform 0.5s ease-out'
        }}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        {faces.map((face, index) => (
          <div
            key={index}
            className={`absolute w-40 h-40 md:w-52 md:h-52 flex items-center justify-center 
                       bg-gradient-to-br ${face.gradient}
                       border border-white/20 rounded-full`}
            style={{
              transform: getTransform(index),
              boxShadow: '0 0 1rem rgba(255, 255, 255, 0.2)',
              backfaceVisibility: 'visible',
              opacity: '0.9'
            }}
          >
            <div className="text-center p-4">
              <div className="mb-1 flex justify-center">
                <Logo />
              </div>
              <h3 className=" text-bodySmall md:text-bodyDefault leading-1  font-bold mb-1 text-white">{face.title}</h3>
              <div className="h-0.5 w-12 bg-white/50 mx-auto mb-1 rounded-full"/>
              <p className="text-xs text-white ">
              {face.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-pink-500 to-amber-500 rounded-full opacity-20"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px]  lg:w-[400px] lg:h-[400px] bg-gradient-to-r from-pink-500 to-amber-500 rounded-full opacity-20"/>
      </div>
    </div>
  );
};

const styles = `
  .perspective-1200 {
    perspective: 1200px;
  }
  
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
`;

const CircleDisplayWithStyles: React.FC = () => {
  return (
    <>
      <style>{styles}</style>
      <CircleDisplay />
    </>
  );
};

export default CircleDisplayWithStyles;