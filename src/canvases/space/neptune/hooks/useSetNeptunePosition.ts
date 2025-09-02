import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

import { useSpaceContext } from "@/canvases/space/contexts/SpaceContext";

function useSetNeptunePosition(
  phi: number,
  theta: number,
  neptuneRef: React.RefObject<THREE.Group<THREE.Object3DEventMap> | null>
) {
  const {
    uniforms: { setUNeptuneDirection },
  } = useSpaceContext();

  // Coordinates
  const neptuneSpherical = useMemo(
    () => new THREE.Spherical(1, phi, theta),
    [phi, theta]
  );
  const neptuneDirection = useMemo(() => new THREE.Vector3(), []);
  const neptuneDistanceFromCenter = 1950;

  useEffect(() => {
    if (!neptuneRef.current) return;

    // Set neptune direction and update SpaceContext's state
    neptuneDirection.setFromSpherical(neptuneSpherical);
    setUNeptuneDirection(neptuneDirection);

    // Update neptune position
    neptuneRef.current.position
      .copy(neptuneDirection)
      .multiplyScalar(neptuneDistanceFromCenter);
  }, [neptuneDirection, neptuneSpherical, neptuneRef, setUNeptuneDirection]);

  useFrame((_, delta) => {
    // Rotate the Neptune on its own axis
    if (!neptuneRef.current) return;
    neptuneRef.current.rotation.y += delta * 0.13;
  });
}

export default useSetNeptunePosition;
