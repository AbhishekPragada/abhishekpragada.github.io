import { Height, Widgets } from '@mui/icons-material';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// import '../objectimg/folder/Assets/Clay_Green0001.png'
// src/objectimg/
function ImageGallery3D() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1.8, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(1600, 900);

    // Load your images
    const imageUrls = [
      '../objectimg/folder/Assets/Clay_Green0001.png',
      '../objectimg/folder/Assets/Clay_Green0002.png',
      '../objectimg/folder/Assets/Clay_Green0003.png',
      '../objectimg/folder/Assets/Clay_Green0004.png',
      '../objectimg/folder/Assets/Clay_Green0005.png',
      '../objectimg/folder/Assets/Clay_Green0006.png',
      '../objectimg/folder/Assets/Clay_Green0007.png',
      '../objectimg/folder/Assets/Clay_Green0008.png',
      '../objectimg/folder/Assets/Clay_Green0009.png',
      // ... add all 40 image URLs here
    ];

    const textureLoader = new THREE.TextureLoader();
    const materials = imageUrls.map((url) => new THREE.MeshBasicMaterial({ map: textureLoader.load(url) }));

    // Create a cube with the loaded images as textures
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 2;

    // Animation logic
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef}/>;
}

export default ImageGallery3D;
