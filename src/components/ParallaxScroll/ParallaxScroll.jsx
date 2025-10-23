import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ParallaxScroll.css';

export const ParallaxSection = ({ children, sectionClassName = '', id }) => (
  <div id={id} className={`parallax-section ${sectionClassName}`.trim()}>{children}</div>
);

const ParallaxScroll = ({ children, className = '' }) => {
  const scrollerRef = useRef(null);
  const sectionsRef = useRef([]);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);

  const updateSections = useCallback(() => {
    if (!sectionsRef.current.length) return;

    const scroller = scrollerRef.current;
    const scrollTop = scroller.scrollTop;
    const containerHeight = scroller.clientHeight;
    const centerPoint = scrollTop + containerHeight / 2;

    sectionsRef.current.forEach((section) => {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = scrollTop + rect.top;
      const sectionCenter = sectionTop + rect.height / 2;
      const distanceFromCenter = Math.abs(centerPoint - sectionCenter);
      const maxDistance = containerHeight;

      // Calculate opacity based on distance from center
      const opacity = Math.max(0.3, 1 - (distanceFromCenter / maxDistance) * 0.7);

      // Calculate scale based on distance from center
      const scale = Math.max(0.85, 1 - (distanceFromCenter / maxDistance) * 0.15);

      // Calculate translateY for parallax effect
      const parallaxOffset = (centerPoint - sectionCenter) * 0.05;

      section.style.opacity = opacity;
      section.style.transform = `translateY(${parallaxOffset}px) scale(${scale})`;
    });
  }, []);

  const handleScroll = useCallback(() => {
    updateSections();
  }, [updateSections]);

  const setupLenis = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const lenis = new Lenis({
      wrapper: scroller,
      content: scroller.querySelector('.parallax-inner'),
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075
    });

    lenis.on('scroll', handleScroll);

    const raf = time => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const sections = Array.from(scroller.querySelectorAll('.parallax-section'));
    sectionsRef.current = sections;

    sections.forEach((section) => {
      section.style.willChange = 'transform, opacity';
      section.style.transformOrigin = 'center center';
      section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });

    setupLenis();
    updateSections();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      sectionsRef.current = [];
    };
  }, [setupLenis, updateSections]);

  return (
    <div className={`parallax-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="parallax-inner">
        {children}
      </div>
    </div>
  );
};

export default ParallaxScroll;
