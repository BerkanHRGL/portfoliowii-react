import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './PageTransition.css';

function PageTransition({ isActive, onComplete, clickPosition }) {
  const circleRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const circle = circleRef.current;
    if (!circle) return;

    // Get click position or default to center
    const x = clickPosition?.x ?? window.innerWidth / 2;
    const y = clickPosition?.y ?? window.innerHeight / 2;

    // Calculate the distance to the farthest corner
    const maxDistance = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Position the circle at click point
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    // Create timeline
    const tl = gsap.timeline();

    // Expand circle to cover screen
    tl.fromTo(
      circle,
      {
        width: 0,
        height: 0,
        opacity: 1
      },
      {
        width: maxDistance * 2,
        height: maxDistance * 2,
        duration: 0.4,
        ease: 'power2.in'
      }
    );

    // Navigate when circle covers screen
    tl.call(() => {
      if (onComplete) onComplete();
    });

    // Wait a tiny bit then shrink circle to reveal new page
    tl.to(circle, {
      width: 0,
      height: 0,
      duration: 0.3,
      ease: 'power2.out',
      delay: 0.05
    });

    return () => {
      tl.kill();
    };
  }, [isActive, onComplete, clickPosition]);

  return (
    <div className={`page-transition ${isActive ? 'active' : ''}`}>
      <div className="page-transition__circle" ref={circleRef} />
    </div>
  );
}

export default PageTransition;
