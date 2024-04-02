import React, { Suspense, useState } from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, MapControls, Environment } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { Container } from '@chakra-ui/react';

import * as THREE from 'three';

const cubeTextureLoader = new THREE.CubeTextureLoader()


const material = new THREE.MeshStandardMaterial({
    color: 0xb2ffc8,
    metalness: 0.1, // Lower metalness to reduce reflection
    roughness: 0.5, // Increase roughness to make the surface less shiny
});
const ModelView = () => {

  const [penColor, setPenColor] = useState(0x000000);
  const [sliderValue, setSliderValue] = React.useState(5)
    
    const handleColorChange = (event) => {
      setSliderValue(event)
      setPenColor(16777215/(event));
    }

    return (
      <div class="bg-gray-200 p-4 h-60 w-100 rounded-lg" >
            <Canvas gl={{ exposure: -1.02 }}>
              <Environment files="poly_haven_studio_4k.hdr" background />
              <ambientLight intensity={0} />
              <directionalLight intensity={0} />
              <MapControls></MapControls>
              <pointLight position={[0, 50, 0]} />
              <Camera position={[220, 120, 80]} />
              <Suspense fallback={null}>
                  <Model penColor={penColor}/>
              </Suspense>
            </Canvas>
            <div class="bg-black p-4 h-10 w-100 rounded-lg" >
            <Slider aria-label='slider-ex-2' colorScheme={penColor} defaultValue={30} onChange={(v) => handleColorChange(v)}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <div className="absolute inset-0 border border-gray-300 -m-1 rounded-lg pointer-events-none"></div>
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
        // Create and assign material
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