import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import SpinningCube from './SpinningCube';
import Globe from './Globe';

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
      >
        <Environment preset="city" />
        <SpinningCube position={[-2, 0, 0]} />
        <Globe position={[2, -1, -2]} />
      </Canvas>
    </div>
  );
}