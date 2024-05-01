import React, { Suspense, useRef, useState} from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, MapControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import * as THREE from 'three';

const cubeTextureLoader = new THREE.CubeTextureLoader()
const material = new THREE.MeshStandardMaterial({
  color: 0xb2ffc8,
  metalness: 0.1,
  roughness: 0.5,
});

const ModelView = () => {
  const [penColor, setPenColor] = useState(0x000000);
  const [sliderValue, setSliderValue] = React.useState(5)
    
    const handleColorChange = (event) => {
      setSliderValue(event)
      setPenColor(16777215/(event));
    }

    return (
      <div className='py-2 pt-0'>
      <div className='container mx-auto bg-gray-300 bg-opacity-25 rounded'>
        <div class="flex justify-between items-center lg:h-[300px] p-4 rounded-lg" >
            <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[0, 50, 0]} />
            <OrbitControls></OrbitControls>
            <Camera position={[220, 90, 100]} />
            <Suspense fallback={null}>
                  <Model penColor={penColor}/>
              </Suspense>
            </Canvas>
        </div>
      </div>
    </div>

      );
};

const Model = ( {penColor} ) => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
 
  const gltf = useLoader(GLTFLoader, '/pen1.gltf', loader => {
    loader.setDRACOLoader(dracoLoader);
  });

  gltf.scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({ color: penColor }); // Example color: red
  }
  });

  return <primitive object={gltf.scene} scale={[1, 1, 1]}/>
};

const Camera = ({ position }) => {
    const { camera } = useThree();
    camera.position.set(...position);
    camera.lookAt(50, 20, 20); // Look at the center of the scene
    return null;
  };


export default ModelView;