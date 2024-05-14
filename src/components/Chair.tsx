import { useGLTF, useTexture } from '@react-three/drei';
import { Mesh, RepeatWrapping } from 'three';
import { useCustomization } from '../context/Customization';

const useConfiguredTexture = (leatherName: string, repeat: number) => {
  const textures = useTexture({
    normalMap: `./textures/${leatherName}/${leatherName}_normal.jpg`,
    roughnessMap: `./textures/${leatherName}/${leatherName}_roughness.jpg`,
    aoMap: `./textures/${leatherName}/${leatherName}_ambientOcclusion.jpg`,
  });

  Object.values(textures).forEach((texture) => {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(repeat, repeat);
  });

  return textures;
};

export default function Chair() {
  const { chairBodyMaterial, cushonMaterial, legs, chairColor, cushionColor } =
    useCustomization();
  const { nodes, materials } = useGLTF('./models/chair.gltf');

  return (
    <group>
      <mesh geometry={(nodes.Chair as Mesh).geometry}>
        <meshStandardMaterial
          {...useConfiguredTexture(chairBodyMaterial, 5)}
          color={chairColor}
        />
      </mesh>
      <mesh
        geometry={(nodes.Cushion as Mesh).geometry}
        position={[0, 0.064, 0.045]}
      >
        <meshStandardMaterial
          {...useConfiguredTexture(cushonMaterial, 9)}
          color={cushionColor}
        />
      </mesh>
      <mesh
        geometry={(nodes.Legs1 as Mesh).geometry}
        material={materials.Legs}
        visible={legs === 1}
      />
      <mesh
        geometry={(nodes.Legs2 as Mesh).geometry}
        material={materials.Legs}
        visible={legs === 2}
      />
    </group>
  );
}

useGLTF.preload('./models/chair.gltf');
