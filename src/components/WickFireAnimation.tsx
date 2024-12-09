import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const WickFireAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wickLogoRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  const createParticle = (isFireParticle: boolean = true) => {
    const particle = document.createElement('div');
    
    if (isFireParticle) {
      // Fire particles are larger and have fire colors
      particle.className = 'absolute rounded-full';
      const size = Math.random() * 6 + 4; // Particles between 4-10px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `hsl(${Math.random() * 30 + 10}, 100%, ${Math.random() * 20 + 50}%)`; // Fire colors with varying brightness
    } else {
      // Spark particles are smaller and white/yellow
      particle.className = 'absolute w-1 h-1 rounded-full';
      particle.style.background = `hsl(${Math.random() * 60}, 100%, ${Math.random() * 20 + 80}%)`; // White to yellow colors
    }
    
    return particle;
  };

  useEffect(() => {
    if (!containerRef.current || !wickLogoRef.current) return;

    // Create fire particles
    const numFireParticles = 30; // Increased number of particles
    const numSparkParticles = 15;
    const particles: HTMLDivElement[] = [];

    // Create fire particles
    for (let i = 0; i < numFireParticles; i++) {
      const particle = createParticle(true);
      containerRef.current.appendChild(particle);
      particles.push(particle);
      particlesRef.current.push(particle);
    }

    // Create spark particles
    for (let i = 0; i < numSparkParticles; i++) {
      const particle = createParticle(false);
      containerRef.current.appendChild(particle);
      particles.push(particle);
      particlesRef.current.push(particle);
    }

    // Enhanced logo animation
    gsap.to(wickLogoRef.current, {
      y: -8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Enhanced glow effect
    const glowTimeline = gsap.timeline({ repeat: -1 });
    glowTimeline
      .to(wickLogoRef.current, {
        filter: 'drop-shadow(0 0 20px rgba(255, 165, 0, 0.9)) drop-shadow(0 0 40px rgba(255, 100, 0, 0.8))',
        duration: 1.5,
        ease: "power1.inOut"
      })
      .to(wickLogoRef.current, {
        filter: 'drop-shadow(0 0 10px rgba(255, 165, 0, 0.7)) drop-shadow(0 0 20px rgba(255, 100, 0, 0.6))',
        duration: 1.5,
        ease: "power1.inOut"
      });

    // Particle animations
    particles.forEach((particle, index) => {
      const isSpark = index >= numFireParticles;
      
      const resetParticle = () => {
        if (!containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const startX = rect.width / 2 + (Math.random() - 0.5) * 40;
        const startY = isSpark ? rect.height / 2 : rect.height - 20; // Sparks start from middle
        
        gsap.set(particle, {
          x: startX,
          y: startY,
          scale: isSpark ? 1 : Math.random() * 1 + 0.5,
          opacity: 1
        });

        if (isSpark) {
          // Spark animation (moves up and spreads out more)
          gsap.to(particle, {
            x: startX + (Math.random() - 0.5) * 100,
            y: startY - Math.random() * 150,
            opacity: 0,
            duration: 0.5 + Math.random() * 0.5,
            ease: "power1.out",
            onComplete: resetParticle
          });
        } else {
          // Fire particle animation
          gsap.to(particle, {
            x: startX + (Math.random() - 0.5) * 60,
            y: startY - Math.random() * 120,
            opacity: 0,
            duration: 1 + Math.random() * 1.5,
            ease: "power1.out",
            onComplete: resetParticle
          });
        }
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
