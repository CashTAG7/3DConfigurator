import { MeshReflectorMaterial } from '@react-three/drei';
import Chair from './Chair';

export default function Experience() {
  return (
    <group position={[0, -1, 0]}>
      <mesh position={[0, 0, 0]}>
        <Chair />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
          mirror={0}
        />
      </mesh>
    </group>
  );
}
