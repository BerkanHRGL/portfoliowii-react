import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import DotGrid from './DotGrid/DotGrid';
import './WiiMenu.css';

const WiiMenu = ({ setIsTransitioning, setClickPosition }) => {
  const navigate = useNavigate();
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const channelsGridRef = useRef(null);

  const channels = [
    { name: 'projects', subtitle: 'NEW', path: '/projects', className: 'projects' },
    { name: 'reading guide', subtitle: 'NEW', path: '/reading-guide', className: 'reading' },
    { name: 'learning outcomes', subtitle: 'coming soon...', path: null, className: 'learning' },
    { name: 'berkan.dev', subtitle: null, path: null, className: 'empty' },
    { name: 'berkan.dev', subtitle: null, path: null, className: 'empty' },
    { name: 'about me', subtitle: 'coming soon...', path: null, className: 'about' },
    { name: 'contact', subtitle: 'coming soon...', path: null, className: 'contact' },
    { name: 'berkan.dev', subtitle: null, path: null, className: 'empty' },
    { name: 'skills', subtitle: 'coming soon...', path: null, className: 'skills' },
    { name: 'experience', subtitle: 'coming soon...', path: null, className: 'experience' },
    { name: 'berkan.dev', subtitle: null, path: null, className: 'empty' },
    { name: 'berkan.dev', subtitle: null, path: null, className: 'empty' },
    { name: 'berkan.dev', subtitle: null, path: null, className: 'empty' },
    { name: 'berkan.dev', subtitle: null, path: null, className: 'empty' },
    { name: 'berkan.dev', subtitle: null, path: null, className: 'empty' },
  ];

  const handleChannelClick = (path, event) => {
    if (path) {
      // Capture click position
      setClickPosition({ x: event.clientX, y: event.clientY });
      setIsTransitioning(true);
      setTimeout(() => {
        navigate(path);
      }, 400); // Wait for circle to expand and cover screen
    }
  };

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const card = circle.parentElement;
        const rect = card.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${D - delta}px`
        });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.15, xPercent: -50, duration: 0.4, ease: 'power2.out' }, 0);
        tlRefs.current[index] = tl;
      });
    };

    layout();
    const onResize = () => layout();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const channelsGrid = channelsGridRef.current;
    if (!channelsGrid) return;

    const handleScroll = () => {
      const scrollLeft = channelsGrid.scrollLeft;

      // Right fade: moves with scroll to stay at right edge of visible area
      const fadeOffset = -scrollLeft;

      // Left fade: moves with scroll to stay at left edge of visible area
      // When scrollLeft = 0, hide it (-200px off-screen)
      // When scrolled, show it at the left edge of viewport
      const leftFadeOffset = scrollLeft > 0 ? scrollLeft : -200;

      // Update CSS custom properties for both fade positions
      channelsGrid.style.setProperty('--fade-offset', `${fadeOffset}px`);
      channelsGrid.style.setProperty('--left-fade-offset', `${leftFadeOffset}px`);
    };

    channelsGrid.addEventListener('scroll', handleScroll);
    return () => channelsGrid.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  return (
    <div className="wii-menu">
      <DotGrid
        dotSize={6}
        gap={25}
        baseColor="#dddddd"
        activeColor="#667eea"
        proximity={100}
        shockRadius={200}
        shockStrength={3}
        resistance={750}
        returnDuration={1.5}
      />
      <div className="channels-grid" ref={channelsGridRef}>
        {channels.map((channel, index) => (
          <div
            key={index}
            className={`channel-card ${channel.className}`}
            onClick={(e) => handleChannelClick(channel.path, e)}
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={() => handleLeave(index)}
          >
            <span
              className="hover-circle"
              ref={el => {
                circleRefs.current[index] = el;
              }}
            />
            <div className="channel-content">
              <div className="channel-text">{channel.name}</div>
              {channel.subtitle && (
                <div className="channel-subtitle">{channel.subtitle}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-profile">
        <div className="profile-name">berkan.dev</div>
        <div className="profile-subtitle">creative developer portfolio</div>
      </div>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/berkan-hergul-9a54481b8/" target="_blank" rel="noopener noreferrer" className="social-icon left">
          <img src="/imgs/linkedin.png" alt="LinkedIn" className="social-img" />
        </a>
        <a href="https://www.instagram.com/bn.fyh/" target="_blank" rel="noopener noreferrer" className="social-icon right">
          <img src="/imgs/instagram.png" alt="Instagram" className="social-img" />
        </a>
      </div>
    </div>
  );
};

export default WiiMenu;
