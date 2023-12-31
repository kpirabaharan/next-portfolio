'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { inSphere } from 'maath/random';
import { Points as P } from 'three';

const Stars = () => {
  const pointsRef = useRef<P>(null!);

  const sphere = inSphere(new Float32Array(5000), {
    radius: 0.8,
  });

  useFrame((state, delta) => {
    pointsRef.current.rotation.x -= delta / 8;
    pointsRef.current.rotation.y -= delta / 5;
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={pointsRef} positions={sphere as Float32Array} stride={3}>
        <PointMaterial
          transparent
          color='#00ff00'
          size={0.0005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const canvas = document.createElement('canvas');
  var gl;
  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (err) {}

  return (
    gl && (
      <div className='absolute inset-0 -z-10 h-full w-full'>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    )
  );
};

export default StarsCanvas;
