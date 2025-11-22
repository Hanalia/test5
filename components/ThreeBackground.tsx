import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Add type definitions for Three.js elements to JSX.IntrinsicElements
// to satisfy TypeScript compiler in environments where they aren't automatically picked up.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Subtle mouse interaction (parallax)
      const { mouse } = state;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 2, 0.1);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 2, 0.1);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.2} ref={meshRef}>
        <MeshDistortMaterial
          color="#4338ca" // Indigo-700-ish
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen bg-neutral-950">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="cyan" />
        
        <AnimatedSphere />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={3000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
      </Canvas>
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950 pointer-events-none" />
    </div>
  );
};

export default ThreeBackground;