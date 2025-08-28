import { useEffect, useMemo } from "react";
import * as THREE from "three";

import { useSpaceContext } from "@/canvases/space/contexts/SpaceContext";

function useSetSaturnPosition(
  phi: number,
  theta: number,
  saturnRef: React.RefObject<THREE.Group<THREE.Object3DEventMap> | null>
) {
  const {
    uniforms: { setUSaturnDirection },
  } = useSpaceContext();

  // Coordinates
  const saturnSpherical = useMemo(
    () => new THREE.Spherical(1, phi, theta),
    [phi, theta]
  );
  const saturnDirection = useMemo(() => new THREE.Vector3(), []);
  const saturnDistanceFromCenter = 1600;

  useEffect(() => {
    if (!saturnRef.current) return;

    // Set saturn direction and update SpaceContext's state
    saturnDirection.setFromSpherical(saturnSpherical);
    setUSaturnDirection(saturnDirection);

    // Update saturn position
    saturnRef.current.position
      .copy(saturnDirection)
      .multiplyScalar(saturnDistanceFromCenter);
  }, [saturnDirection, saturnSpherical, saturnRef, setUSaturnDirection]);
}

export default useSetSaturnPosition;
