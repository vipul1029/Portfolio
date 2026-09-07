"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const earthRef  = useRef();
  const cloudsRef = useRef();

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(THREE.TextureLoader, [
    "/textures/earth-day.jpg",
    "/textures/earth-normal-day.jpg",
    "/textures/earth-specular-day.jpg",
    "/textures/earth-clouds.png",
  ]);

  useFrame(() => {
    if (earthRef.current)  earthRef.current.rotation.y  += 0.0015;
    if (cloudsRef.current) cloudsRef.current.rotation.y += 0.002;
  });

  return (
    <>
      {/* Cloud layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.015, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          specular={new THREE.Color(0x888888)}
          shininess={8}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh>
        <sphereGeometry args={[1.08, 64, 64]} />
        <meshPhongMaterial
          color={new THREE.Color(0x4488ff)}
          transparent
          opacity={0.12}
          side={THREE.FrontSide}
        />
      </mesh>
    </>
  );
}

function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#1a3a5c" wireframe opacity={0.3} transparent />
    </mesh>
  );
}

const EarthGlobe = () => {
  return (
    <div style={{ width: "340px", height: "340px" }}>
      <Canvas camera={{ position: [0, 0, 2.8], fov: 45 }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 3, 5]} intensity={2.8} />
        <pointLight position={[-8, -4, -6]} intensity={0.18} color="#6699ff" />

        <Stars radius={300} depth={60} count={1500} factor={4} fade speed={0.5} />

        <Suspense fallback={<Loader />}>
          <Earth />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
};

export default EarthGlobe;
