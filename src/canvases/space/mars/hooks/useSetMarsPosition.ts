import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

import { useSpaceContext } from "@/canvases/space/contexts/SpaceContext";

function useSetMarsPosition(
  phi: number,
  theta: number,
  marsRef: React.RefObject<THREE.Group<THREE.Object3DEventMap> | null>
) {
  const {
    uniforms: { setUMarsDirection },
  } = useSpaceContext();

  // Coordinates
  const marsSpherical = useMemo(
    () => new THREE.Spherical(1, phi, theta),
    [phi, theta]
  );
  const marsDirection = useMemo(() => new THREE.Vector3(), []);
  const marsDistanceFromCenter = 90;

  useEffect(() => {
    if (!marsRef.current) return;

    // Set mars direction and update SpaceContext's state
    marsDirection.setFromSpherical(marsSpherical);
    setUMarsDirection(marsDirection);

    // Update mars position
    marsRef.current.position
      .copy(marsDirection)
      .multiplyScalar(marsDistanceFromCenter);
  }, [marsDirection, marsSpherical, marsRef, setUMarsDirection]);

  useFrame((_, delta) => {
    // Rotate the Mars on its own axis
    if (!marsRef.current) return;
    marsRef.current.rotation.y += delta * 0.09;
  });
}

export default useSetMarsPosition;
