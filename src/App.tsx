import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import { Environment, OrbitControls } from '@react-three/drei';
import Configurator from './components/Configurator';
import { CustomizationProvider } from './context/Customization';

export default function App() {
  return (
    <CustomizationProvider>
      <div className="h-screen w-screen">
        <Configurator />
        <Canvas frameloop="demand" className="touch-none">
          <color attach="background" args={['#191920']} />
          <fog attach="fog" args={['#191920', 0, 15]} />
          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
          />
          <Experience />
          <Environment preset="city" environmentIntensity={2} />
        </Canvas>
      </div>
    </CustomizationProvider>
  );
}
