import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MotionValue } from 'framer-motion';
import * as THREE from 'three';

interface ScrollModelProps {
  scrollProgress: MotionValue<number>;
}

export default function ScrollModel({ scrollProgress }: ScrollModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!meshRef.current) return;
    
    const progress = scrollProgress.get();
    
    // Rotate based on scroll
    meshRef.current.rotation.x = progress * Math.PI * 2;
    meshRef.current.rotation.y = progress * Math.PI * 2;
    
    // Scale based on scroll
    const scale = 1 + progress * 0.5;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color="#8B5CF6"
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}