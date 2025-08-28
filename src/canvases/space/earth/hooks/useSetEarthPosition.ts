import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

import { useSpaceContext } from "@/canvases/space/contexts/SpaceContext";

function useSetEarthPosition(
  phi: number,
  theta: number,
  earthRef: React.RefObject<THREE.Group<THREE.Object3DEventMap> | null>
) {
  const {
    uniforms: { setUEarthDirection },
  } = useSpaceContext();

  // Coordinates
  const earthSpherical = useMemo(
    () => new THREE.Spherical(1, phi, theta),
    [phi, theta]
  );
  const earthDirection = useMemo(() => new THREE.Vector3(), []);
  const earthDistanceFromCenter = 15;

  useEffect(() => {
    if (!earthRef.current) return;

    // Set earth direction and update SpaceContext's state
    earthDirection.setFromSpherical(earthSpherical);
    setUEarthDirection(earthDirection);

    // Update earth position
    earthRef.current.position
      .copy(earthDirection)
      .multiplyScalar(earthDistanceFromCenter);
  }, [earthDirection, earthSpherical, earthRef, setUEarthDirection]);

  useFrame((_, delta) => {
    // Rotate the Earth on its own axis
    if (!earthRef.current) return;
    earthRef.current.rotation.y += delta * 0.1;
  });
}

export default useSetEarthPosition;
