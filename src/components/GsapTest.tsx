import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const GsapTest: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a timeline
    const tl = gsap.timeline({ repeat: -1 });

    // Animate the box
    tl.to(boxRef.current, {
      rotation: 360,
      duration: 2,
      ease: "power1.inOut"
    });

    // Animate the circle
    tl.to(circleRef.current, {
      scale: 1.5,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      yoyo: true,
      repeat: 1
    }, "-=2");

    // Animate the text
    tl.to(textRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "power2.in",
      yoyo: true,
      repeat: 1
    }, "-=2");

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8">
      <div
        ref={boxRef}
        className="w-32 h-32 bg-wick-600 cursor-pointer"
      />
      
      <div
        ref={circleRef}
        className="w-32 h-32 bg-wick-900 rounded-full cursor-pointer"
      />
      
      <div
        ref={textRef}
        className="text-3xl font-bold text-wick-900"
      >
        GSAP Animation
      </div>
    </div>
  );
};

export default GsapTest;
