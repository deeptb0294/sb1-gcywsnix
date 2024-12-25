import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import ScrollModel from './ScrollModel';

export default function ScrollScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ position: 'fixed' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ScrollModel scrollProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}