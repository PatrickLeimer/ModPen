import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, MapControls } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { Container } from '@chakra-ui/react';

const ModelView = () => {
    return (
        <Container>
            <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[0, 50, 0]} />
            <MapControls />
            <Camera position={[100, 100, 100]} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            </Canvas>
        </Container>
      );
};

const Model = () => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
  
    const gltf = useLoader(GLTFLoader, '/pen1.gltf', loader => {
      loader.setDRACOLoader(dracoLoader);
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