"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Environment } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

interface CubeletProps {
  startPosition: [number, number, number];
  startRotation: [number, number, number];
  endPosition: [number, number, number];
  endRotation: [number, number, number];
  color: string;
  scrollProgress: number;
}

const CUBELET_SIZE = 0.85;
const CUBELET_GAP = 0.95;

function Cubelet({
  startPosition,
  startRotation,
  endPosition,
  endRotation,
  color,
  scrollProgress,
}: CubeletProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const currentPosRef = useRef(new THREE.Vector3(...startPosition));
  const currentRotRef = useRef(new THREE.Euler(startRotation[0], startRotation[1], startRotation[2]));

  const easedProgress = useMemo(() => {
    return 1 - Math.pow(1 - scrollProgress, 2);
  }, [scrollProgress]);

  useFrame(() => {
    if (!meshRef.current) return;

    const targetPos = new THREE.Vector3(...endPosition);
    const targetRot = new THREE.Euler(...endRotation);

    currentPosRef.current.lerp(targetPos, 0.06);

    currentRotRef.current.x = THREE.MathUtils.lerp(currentRotRef.current.x, targetRot.x, 0.06);
    currentRotRef.current.y = THREE.MathUtils.lerp(currentRotRef.current.y, targetRot.y, 0.06);
    currentRotRef.current.z = THREE.MathUtils.lerp(currentRotRef.current.z, targetRot.z, 0.06);

    meshRef.current.position.copy(currentPosRef.current);
    meshRef.current.rotation.set(
      currentRotRef.current.x,
      currentRotRef.current.y,
      currentRotRef.current.z
    );

    const material = meshRef.current.material as THREE.MeshStandardMaterial;
    material.opacity = 0.35 + easedProgress * 0.65;
    material.emissiveIntensity = 0.1 + easedProgress * 0.4;
  });

  return (
    <mesh ref={meshRef}>
      <RoundedBox args={[CUBELET_SIZE, CUBELET_SIZE, CUBELET_SIZE]} radius={0.12} smoothness={4}>
        <meshStandardMaterial
          color={color}
          roughness={0.15}
          metalness={0.1}
          transparent
          opacity={0.35}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </RoundedBox>
    </mesh>
  );
}

function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();
  const targetRef = useRef({ x: 0, y: 0 });

  useFrame(() => {
    targetRef.current.x = THREE.MathUtils.lerp(targetRef.current.x, scrollProgress * 0.15, 0.03);
    targetRef.current.y = THREE.MathUtils.lerp(targetRef.current.y, scrollProgress * 0.1, 0.03);

    camera.rotation.set(targetRef.current.x, targetRef.current.y, 0);
  });

  return null;
}

interface CubeletData {
  startPosition: [number, number, number];
  startRotation: [number, number, number];
  endPosition: [number, number, number];
  endRotation: [number, number, number];
  color: string;
}

const CUBELET_COLORS = ["#B2C2D1", "#87CEEB", "#D6EAF8", "#E8DAEF", "#708090", "#F5F5F5", "#B0E0E6", "#ADD8E6"];

const CUBELET_DATA: CubeletData[] = (() => {
  const cubes: CubeletData[] = [];
  const cubeIndices = [-1, 0, 1];
  const colors = CUBELET_COLORS;

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      for (let z = 0; z < 3; z++) {
        const finalX = cubeIndices[x] * CUBELET_GAP;
        const finalY = cubeIndices[y] * CUBELET_GAP;
        const finalZ = cubeIndices[z] * CUBELET_GAP;

        const scatterRadius = 12;
        const startX = finalX + (((x * 3 + y * 7 + z * 11) % 100) / 100 - 0.5) * scatterRadius;
        const startY = finalY + (((x * 5 + y * 13 + z * 17) % 100) / 100 - 0.5) * scatterRadius;
        const startZ = finalZ + (((x * 7 + y * 11 + z * 19) % 100) / 100 - 0.5) * scatterRadius;

        const startRotX = ((x * 3 + y * 7 + z * 11) % 628) / 100;
        const startRotY = ((x * 5 + y * 13 + z * 17) % 628) / 100;
        const startRotZ = ((x * 7 + y * 11 + z * 19) % 628) / 100;

        cubes.push({
          startPosition: [startX, startY, startZ],
          startRotation: [startRotX, startRotY, startRotZ],
          endPosition: [finalX, finalY, finalZ],
          endRotation: [0, 0, 0],
          color: colors[(x * 3 + y * 3 + z) % colors.length],
        });
      }
    }
  }

  return cubes;
})();

interface RubiksCubeSceneProps {
  scrollProgress: number;
}

function RubiksCubeScene({ scrollProgress }: RubiksCubeSceneProps) {
  return (
    <>
      <CameraController scrollProgress={scrollProgress} />
      <ambientLight intensity={0.6} />
      <spotLight position={[15, 15, 15]} angle={0.2} penumbra={1} intensity={1.2} />
      <spotLight position={[-15, -15, -15]} angle={0.2} penumbra={1} intensity={0.6} color="#E8DAEF" />

      <group position={[0, 0, 0]}>
        {CUBELET_DATA.map((cubelet, i) => (
          <Cubelet
            key={i}
            {...cubelet}
            scrollProgress={scrollProgress}
          />
        ))}
      </group>

      <Environment preset="city" />
    </>
  );
}

interface RubiksCubeAnimationProps {
  scrollProgress: number;
}

export default function RubiksCubeAnimation({
  scrollProgress,
}: RubiksCubeAnimationProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 18], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <RubiksCubeScene scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}