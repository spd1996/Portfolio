'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const TrafficScene: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Add a sun
    const sun = new THREE.PointLight(0xffffff, 1);
    sun.position.set(0, 50, 0);
    scene.add(sun);

    // Add roads
    const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x999999 });
    const roadGeometry = new THREE.PlaneGeometry(100, 20, 1, 1);
    const road1 = new THREE.Mesh(roadGeometry, roadMaterial);
    road1.position.set(0, -5, 0);
    scene.add(road1);
    const road2 = new THREE.Mesh(roadGeometry, roadMaterial);
    road2.position.set(0, 5, 0);
    scene.add(road2);

    // Add traffic
    const carGeometry = new THREE.BoxGeometry(5, 2, 2);
    const carMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const car1 = new THREE.Mesh(carGeometry, carMaterial);
    car1.position.set(-20, -5, 0);
    scene.add(car1);
    const car2 = new THREE.Mesh(carGeometry, carMaterial);
    car2.position.set(20, 5, 0);
    scene.add(car2);

    camera.position.z = 30;

    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate cars
      car1.position.x += 0.1;
      car2.position.x -= 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default TrafficScene;
