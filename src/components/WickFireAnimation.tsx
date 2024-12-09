import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const WickFireAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wickLogoRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'absolute w-2 h-2 rounded-full';
    particle.style.background = `hsl(${Math.random() * 30 + 10}, 100%, 50%)`; // Fire colors
    return particle;
  };

  useEffect(() => {
    if (!containerRef.current || !wickLogoRef.current) return;

    // Create fire particles
    const numParticles = 20;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < numParticles; i++) {
      const particle = createParticle();
      containerRef.current.appendChild(particle);
      particles.push(particle);
      particlesRef.current.push(particle);
    }

    // Logo animation
    gsap.to(wickLogoRef.current, {
      y: -5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Glow effect
    gsap.to(wickLogoRef.current, {
      filter: 'drop-shadow(0 0 10px rgba(255, 165, 0, 0.8))',
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Particle animations
    particles.forEach((particle) => {
      const resetParticle = () => {
        if (!containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const startX = rect.width / 2 + (Math.random() - 0.5) * 20;
        const startY = rect.height - 20;
        
        gsap.set(particle, {
          x: startX,
          y: startY,
          scale: Math.random() * 0.5 + 0.5,
          opacity: 1
        });

        gsap.to(particle, {
          x: startX + (Math.random() - 0.5) * 50,
          y: startY - Math.random() * 100,
          opacity: 0,
          duration: 1 + Math.random() * 1,
          ease: "power1.out",
          onComplete: resetParticle
        });
      };

      resetParticle();
    });

    // Cleanup
    return () => {
      particles.forEach(particle => {
        particle.remove();
      });
      gsap.killTweensOf([wickLogoRef.current, ...particles]);
    };
  }, []);

  return (
    <div className="relative w-64 h-64 bg-gray-900 rounded-lg overflow-hidden" ref={containerRef}>
      <div 
        ref={wickLogoRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"
      >
        <Image
          src="/images/wick-logo.svg"
          alt="Wick Logo"
          fill
          className="object-contain brightness-0 invert"
        />
      </div>
    </div>
  );
};

export default WickFireAnimation;
