import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

import { useSpaceContext } from "@/canvases/space/contexts/SpaceContext";

function useSetJupiterPosition(
  phi: number,
  theta: number,
  jupiterRef: React.RefObject<THREE.Group<THREE.Object3DEventMap> | null>
) {
  const {
    uniforms: { setUJupiterDirection },
  } = useSpaceContext();

  // Coordinates
  const jupiterSpherical = useMemo(
    () => new THREE.Spherical(1, phi, theta),
    [phi, theta]
  );
  const jupiterDirection = useMemo(() => new THREE.Vector3(), []);
  const jupiterDistanceFromCenter = 600;

  useEffect(() => {
    if (!jupiterRef.current) return;

    // Set jupiter direction and update SpaceContext's state
    jupiterDirection.setFromSpherical(jupiterSpherical);
    setUJupiterDirection(jupiterDirection);

    // Update jupiter position
    jupiterRef.current.position
      .copy(jupiterDirection)
      .multiplyScalar(jupiterDistanceFromCenter);
  }, [jupiterDirection, jupiterSpherical, jupiterRef, setUJupiterDirection]);

  useFrame((_, delta) => {
    // Rotate the Jupiter on its own axis
    if (!jupiterRef.current) return;
    jupiterRef.current.rotation.y += delta * 0.035;
  });
}

export default useSetJupiterPosition;
