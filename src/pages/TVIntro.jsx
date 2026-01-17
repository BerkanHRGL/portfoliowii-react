import { useState, Suspense, useEffect, useRef, useMemo } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, useTexture } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import gsap from 'gsap';
import './TVIntro.css';
import roomModel from '../assets/tv_room_final.glb?url';

useGLTF.preload(roomModel);

// Typewriter component
function Typewriter({ text, speed = 50, delay = 0, onComplete }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          if (onComplete) onComplete();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay, onComplete]);

  return <>{displayedText}{!isComplete && <span className="cursor">|</span>}</>;
}

function LivingRoomModel({ onClick }) {
  const { scene } = useGLTF(roomModel);
  const screenTexture = useTexture('/imgs/homepage.png');

  // Fix texture settings
  screenTexture.flipY = false;
  screenTexture.wrapS = THREE.ClampToEdgeWrapping;
  screenTexture.repeat.x = -1;
  screenTexture.offset.x = 1;
  screenTexture.colorSpace = THREE.SRGBColorSpace;

  // Memoize the scene setup to prevent recreating materials on every frame
  const clonedScene = useMemo(() => {
    const sceneClone = scene.clone();

    // Fix materials and apply texture to the TV screen mesh
    sceneClone.traverse((child) => {
      if (child.isMesh) {
        // Fix materials - ensure they respond to light and have color
        if (child.material) {
          // Clone the material to avoid affecting other instances
          child.material = child.material.clone();

          // Enable color space
          if (child.material.map) {
            child.material.map.colorSpace = THREE.SRGBColorSpace;
          }

          // If material has no color, set a default
          if (!child.material.color || child.material.color.getHex() === 0x000000) {
            child.material.color = new THREE.Color(0xcccccc);
          }

          // Ensure material responds to light
          child.material.needsUpdate = true;
        }

        // Find the TV screen mesh by name and material
        if (child.name === 'Object_34' || child.material?.name === 'screen_off') {
          console.log('✅ Found TV screen:', child.name);
          console.log('📷 Screen texture:', screenTexture);
          console.log('🖼️ Texture image:', screenTexture.image);
          console.log('📐 Texture size:', screenTexture.image?.width, 'x', screenTexture.image?.height);
          console.log('🔄 Has UVs:', !!child.geometry?.attributes?.uv);
          console.log('📊 UV count:', child.geometry?.attributes?.uv?.count);
          console.log('📦 Geometry:', child.geometry);
          console.log('🎨 Original material:', child.material);

          // Check if UV coordinates exist and are valid
          if (child.geometry?.attributes?.uv) {
            const uvArray = child.geometry.attributes.uv.array;
            console.log('🔍 First few UV coordinates:', uvArray.slice(0, 20));
          } else {
            console.warn('⚠️ No UV coordinates found on geometry!');
          }

          // Apply the homepage texture with proper orientation
          child.material = new THREE.MeshStandardMaterial({
            map: screenTexture,
            color: new THREE.Color(0xffffff),
            emissive: new THREE.Color(0xffffff),
            emissiveMap: screenTexture,
            emissiveIntensity: 1.0,
            roughness: 0.1,
            metalness: 0.5,
            side: THREE.DoubleSide, // Render on both sides
          });

          console.log('✨ New material applied:', child.material);

          // Flip geometry if needed - check the normals
          if (child.geometry) {
            child.geometry.computeVertexNormals();
          }

          // Store the onClick handler on the mesh's userData
          child.userData.isClickable = true;
        }
      }
    });

    return sceneClone;
  }, [scene, screenTexture]);

  const handleClick = (event) => {
    // Check if the clicked object is the TV screen
    if (event.object.userData.isClickable || event.object.name === 'Object_34') {
      event.stopPropagation();
      onClick(event);
    }
  };

  return (
    <group onClick={handleClick}>
      <primitive
        object={clonedScene}
        scale={1}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}



function CameraController({ isZooming, onTransitionComplete }) {
  const { camera, scene } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    if (isZooming) {
      // Disable controls during animation
      if (controlsRef.current) {
        controlsRef.current.enabled = false;
      }

      // Find the TV screen mesh (Object_34) to get its exact world position
      let screenMesh = null;

      scene.traverse((child) => {
        if (child.isMesh && !screenMesh) {
          if (child.name === 'Object_34' || child.material?.name === 'screen_off') {
            screenMesh = child;
          }
        }
      });

      const targetPosition = new THREE.Vector3(0, 0, 0);

      if (screenMesh) {
        // Calculate the center of the mesh specifically
        const box = new THREE.Box3().setFromObject(screenMesh);
        box.getCenter(targetPosition);

        // Get the normal/forward direction of the screen to know where to position camera
        // We assume the screen faces +Z or -Z in its local space, usually
        const normal = new THREE.Vector3(0, 0, 1);
        normal.applyQuaternion(screenMesh.getWorldQuaternion(new THREE.Quaternion()));

        // Position camera 0.6 units away from center IN THE DIRECTION of the normal
        // If the screen is showing the back, we might need to negate this normal
        const cameraTargetPos = targetPosition.clone().add(normal.multiplyScalar(-0.6));

        console.log('Zooming to TV screen at:', targetPosition);

        // Animate camera position and target
        const tl = gsap.timeline({
          onComplete: onTransitionComplete
        });

        tl.to(camera.position, {
          x: cameraTargetPos.x,
          y: cameraTargetPos.y,
          z: cameraTargetPos.z,
          duration: 2,
          ease: "power2.inOut",
          onUpdate: () => {
            camera.lookAt(targetPosition);
          }
        });
      } else {
        console.warn('Screen mesh not found, using default zoom target');
        targetPosition.set(0, 1, 0);

        // Animate camera position and target
        const tl = gsap.timeline({
          onComplete: onTransitionComplete
        });

        tl.to(camera.position, {
          x: targetPosition.x,
          y: targetPosition.y,
          z: targetPosition.z + 0.6, // Stop 0.6 units in front of the screen
          duration: 2,
          ease: "power2.inOut",
          onUpdate: () => {
            camera.lookAt(targetPosition);
          }
        });
      }
    }
  }, [isZooming, camera, scene, onTransitionComplete]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={!isZooming}
      enablePan={false}
      maxDistance={5} // Maximum zoom out distance
      minDistance={0.5} // Minimum zoom in distance
      maxPolarAngle={Math.PI / 2} // Lock vertical rotation
      minPolarAngle={Math.PI / 2} // Lock vertical rotation (same value = locked)
      target={[0, 1, 0]} // Look at the center of the room
    />
  );
}

function TVIntro({ setIsTransitioning }) {
  const navigate = useNavigate();
  const [isZooming, setIsZooming] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [titleComplete, setTitleComplete] = useState(false);
  const overlayRef = useRef();

  const handleTVClick = (event) => {
    event.stopPropagation();
    setIsZooming(true);

    // Animate overlay opacity
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.5,
      delay: 1.5, // Start fading near the end of the zoom
      ease: "power1.in"
    });
  };

  const handleTransitionComplete = () => {
    navigate('/menu');
  };

  // Set model loaded after Suspense resolves
  useEffect(() => {
    // Small delay to ensure model is fully rendered
    const timer = setTimeout(() => {
      setModelLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (hasError) {
    return (
      <div className="tv-intro-container">
        <div className="intro-text">
          <h1 className="intro-title">Error loading 3D model</h1>
          <button onClick={() => navigate('/menu')}>Go to Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="tv-intro-container">
      <div
        ref={overlayRef}
        className="transition-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 100
        }}
      />

      <Canvas
        className={isZooming ? 'zooming' : ''}
        camera={{ position: [1.5, 1.5, 2], fov: 75 }}
        onCreated={() => console.log('Canvas created!')}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, 5, -5]} intensity={1.5} />
        <pointLight position={[0, 2, 0]} intensity={1} />

        <Suspense fallback={null}>
          <LivingRoomModel onClick={handleTVClick} />
        </Suspense>

        <CameraController isZooming={isZooming} onTransitionComplete={handleTransitionComplete} />
      </Canvas>

      {modelLoaded && (
        <div className={`intro-text ${isZooming ? 'fade-out' : ''}`}>
          <h1 className="intro-title">
            {titleComplete ? (
              "Hey! Welcome to my portfolio"
            ) : (
              <Typewriter
                text="Hey! Welcome to my portfolio"
                speed={70}
                onComplete={() => {
                  setTitleComplete(true);
                  setShowSubtitle(true);
                }}
              />
            )}
          </h1>
          {showSubtitle && (
            <p className="intro-subtitle">
              <Typewriter text="Click on the TV to enter" speed={50} />
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default TVIntro;
