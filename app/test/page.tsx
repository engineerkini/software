'use client'
import { useEffect, useState, useCallback } from 'react';

interface BackgroundStar {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  blinkDuration: number;
}

interface CursorStar {
  id: number;
  offset: {
    x: number;
    y: number;
  };
  size: number;
  opacity: number;
  delay: number;
}

const StarryBackground = () => {
  const [backgroundStars, setBackgroundStars] = useState<BackgroundStar[]>([]);
  const [cursorStars, setCursorStars] = useState<CursorStar[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Generate background stars
  const generateBackgroundStars = useCallback(() => {
    const newStars: BackgroundStar[] = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        blinkDuration: Math.random() * 3 + 2,
      });
    }
    setBackgroundStars(newStars);
  }, []);

  // Generate cursor following stars
  const generateCursorStars = useCallback(() => {
    const newStars: CursorStar[] = [];
    const numStars = 50; // Fewer stars for cursor following

    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        offset: {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100
        },
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        delay: Math.random() * 0.8
      });
    }
    setCursorStars(newStars);
  }, []);

  useEffect(() => {
    generateBackgroundStars();
    generateCursorStars();
    
    const interval = setInterval(() => {
      setBackgroundStars(prevStars => {
        const newStars = [...prevStars];
        for (let i = 0; i < prevStars.length / 10; i++) {
          const randomIndex = Math.floor(Math.random() * prevStars.length);
          newStars[randomIndex] = {
            ...newStars[randomIndex],
            opacity: Math.random() * 0.7 + 0.3,
            blinkDuration: Math.random() * 3 + 2,
          };
        }
        return newStars;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [generateBackgroundStars, generateCursorStars]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovered) {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  return (
    <div 
      className=" absolute  inset-0 w-full h-[100vh] bg-black overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background stars */}
      {backgroundStars.map((star) => (
        <div
          key={`bg-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.blinkDuration}s ease-in-out infinite`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}

      {/* Cursor following stars */}
      {cursorStars.map((star) => (
        <div
          key={`cursor-${star.id}`}
          className="absolute top-0 h-full rounded-full bg-gradient-to-r text-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            transform: `translate(
              ${mousePosition.x + star.offset.x}px,
              ${mousePosition.y + star.offset.y}px
            )`,
            transition: `transform ${star.delay}s ease-out`,
            opacity: isHovered ? star.opacity : 0,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: var(--opacity); }
          50% { opacity: 0.2; }
          100% { opacity: var(--opacity); }
        }
      `}</style>
      
    </div>
  );
};

export default StarryBackground;