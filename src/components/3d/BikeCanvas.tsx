import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';

const MotorcycleModel = lazy(() => import('./MotorcycleModel'));

const CanvasLoader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      <p className="text-muted-foreground text-sm font-body">Loading model...</p>
    </div>
  </div>
);

const BikeCanvas = () => {
  return (
    <div className="w-full h-full relative">
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [3, 2, 5], fov: 40 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 3]} intensity={1} color="#ffffff" />
          <pointLight position={[-1.5, 0.5, 1]} intensity={3} color="#E8A020" distance={5} />
          <pointLight position={[2, 1, -2]} intensity={1} color="#1A3C5E" distance={6} />

          <Suspense fallback={null}>
            <MotorcycleModel />
          </Suspense>

          <ContactShadows
            position={[0, -1.3, 0]}
            opacity={0.4}
            scale={8}
            blur={2}
            far={4}
          />
          <Environment preset="night" />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default BikeCanvas;
