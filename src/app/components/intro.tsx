import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const UniverseScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 400);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controlsRef.current = controls;

    // Stars
    const starCount = 500;
    const starGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (let i = 0; i < starCount; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      const [x, y, z] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread(1000));
      star.position.set(x, y, z);
      scene.add(star);
    }

    // Sun
    const sunGeometry = new THREE.SphereGeometry(50, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Sun light
    const sunLight = new THREE.PointLight(0xffff00, 1, 1000);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    // Planets
    const planets = [
      { color: 0xff5733, radius: 10 },   // Mercury
      { color: 0xf4a460, radius: 15 },   // Venus
      { color: 0x0000ff, radius: 20 },   // Earth
      { color: 0xff0000, radius: 18 },   // Mars
      { color: 0xffd700, radius: 30 },   // Jupiter
      { color: 0xcd853f, radius: 28 },   // Saturn
      { color: 0xadd8e6, radius: 25 },   // Uranus
      { color: 0x4682b4, radius: 23 },   // Neptune
    ];

    const planetMeshes: THREE.Mesh[] = [];
    planets.forEach((planetInfo, index) => {
      const planetGeometry = new THREE.SphereGeometry(planetInfo.radius, 32, 32);
      const planetMaterial = new THREE.MeshBasicMaterial({ color: planetInfo.color });
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);
      const distanceFromCenter = 100 * (index + 2); // Increase distance for each planet
      planet.position.set(distanceFromCenter, 0, 0);
      scene.add(planet);
      planetMeshes.push(planet);
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      // Update planet positions
      planetMeshes.forEach((planet, index) => {
        const time = Date.now() * 0.001;
        const speed = 0.1 / (index + 1);
        const orbitRadius = 100 * (index + 2);
        const x = Math.cos(time * speed) * orbitRadius;
        const z = Math.sin(time * speed) * orbitRadius;
        planet.position.set(x, 0, z);
      });
      if (controlsRef.current) controlsRef.current.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      if (rendererRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        rendererRef.current.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="relative">
      <div ref={containerRef} className="absolute inset-0" />
      <Banner />
    </div>
  );
};

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col items-center absolute top-10 left-1/2 transform -translate-x-1/2 text-white bg-accent-blue rounded-md p-3 hover:bg-accent-green">
      <h1>Welcome to the Universe!</h1>
      <p>I am SURAJ PRAKASH DWIVEDI</p>
      <p>Click and drag to rotate the camera</p>
      <p>Scroll to zoom in and out</p>
    </div>
  );
};

export default UniverseScene;
