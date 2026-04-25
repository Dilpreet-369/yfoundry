"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  RoundedBox,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { Suspense } from "react";

// Pre-compute positions outside the component so Math.random is never called
// during render — required by React 19's compiler (purity rules).
const PETAL_POSITIONS: [number, number, number][] = Array.from(
  { length: 27 },
  (_, i) => [
    ((i % 3) - 1) * 2 + (Math.random() - 0.5) * 10,
    ((Math.floor(i / 3) % 3) - 1) * 2 + (Math.random() - 0.5) * 10,
    (Math.floor(i / 9) - 1) * 2 + (Math.random() - 0.5) * 10,
  ],
);

// Individual "Petal" (Cubelet) Component
const Petal = ({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <RoundedBox
        args={[1, 1, 1]} // Size
        radius={0.15} // Softness of edges
        smoothness={4} // Quality of curves
        position={position}
      >
        <meshPhysicalMaterial
          color={color}
          roughness={0.1}
          metalness={0.05}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </RoundedBox>
    </Float>
  );
};

export default function PetalScene() {
  // Using your soft palette colors
  const colors = [
    "#B2C2D1",
    "#B0E0E6",
    "#D6EAF8",
    "#E8DAEF",
    "#708090",
    "#F5F5F5",
  ];

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

          {/* We will map the 27 parts of the Rubik's cube here */}
          <group>
            {PETAL_POSITIONS.map((position, i) => (
              <Petal
                key={i}
                position={position}
                color={colors[i % colors.length]}
              />
            ))}
          </group>

          <ContactShadows
            position={[0, -4.5, 0]}
            opacity={0.4}
            scale={20}
            blur={2}
            far={4.5}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
