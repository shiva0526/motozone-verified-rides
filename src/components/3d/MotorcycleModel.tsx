import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Placeholder motorcycle built from primitives until a real .glb is provided
const MotorcycleModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.8, 0]} scale={1.2}>
      {/* Body / Tank */}
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[1.8, 0.5, 0.7]} />
        <meshStandardMaterial color="#1A3C5E" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Seat */}
      <mesh position={[0.5, 0.95, 0]}>
        <boxGeometry args={[1, 0.15, 0.6]} />
        <meshStandardMaterial color="#111827" metalness={0.3} roughness={0.8} />
      </mesh>

      {/* Tank highlight */}
      <mesh position={[-0.3, 0.85, 0]}>
        <boxGeometry args={[0.6, 0.25, 0.55]} />
        <meshStandardMaterial color="#E8A020" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Front Wheel */}
      <group position={[-1.1, 0, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.45, 0.08, 16, 32]} />
          <meshStandardMaterial color="#222" metalness={0.6} roughness={0.4} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.9, 8]} />
          <meshStandardMaterial color="#444" metalness={0.8} />
        </mesh>
      </group>

      {/* Rear Wheel */}
      <group position={[1.1, 0, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.45, 0.1, 16, 32]} />
          <meshStandardMaterial color="#222" metalness={0.6} roughness={0.4} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
          <meshStandardMaterial color="#444" metalness={0.8} />
        </mesh>
      </group>

      {/* Front Fork */}
      <mesh position={[-0.9, 0.45, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.03, 0.03, 1, 8]} />
        <meshStandardMaterial color="#666" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Handlebars */}
      <mesh position={[-1, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8, 8]} />
        <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Engine block */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[0.6, 0.4, 0.5]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Exhaust */}
      <mesh position={[0.5, 0.2, 0.35]} rotation={[0, 0, -0.1]}>
        <cylinderGeometry args={[0.04, 0.06, 1.2, 8]} />
        <meshStandardMaterial color="#555" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Headlight */}
      <mesh position={[-1.2, 0.8, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#E8A020" emissive="#E8A020" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

export default MotorcycleModel;
