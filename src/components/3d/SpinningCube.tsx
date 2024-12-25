import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

export default function SpinningCube({ position = [0, 0, 0] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group position={position}>
      <Box ref={meshRef} args={[1, 1, 1]}>
        <meshStandardMaterial
          color="#8B5CF6"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </Box>
    </group>
  );
}