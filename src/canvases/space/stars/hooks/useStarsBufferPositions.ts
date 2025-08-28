import { useMemo } from "react";
import * as THREE from "three";

function useStarsBufferPositions(starsCount: number) {
  const sphericalPositions = useMemo(() => {
    const sphericalPositions = [];

    // Insert random phi and theta to sphericalPositions
    for (let i = 0; i < starsCount; i++) {
      const randomHeight = Math.random();
      const randomRotation = Math.random();

      const phi = Math.acos(1 - 2 * randomHeight);
      const theta = 2 * Math.PI * randomRotation;

      sphericalPositions.push(new THREE.Spherical(1, phi, theta));
    }

    return sphericalPositions;
  }, [starsCount]);

  const starsPositions = sphericalPositions.map(() => new THREE.Vector3());
  // Set starsPositions from sphericalPositions
  for (let i = 0; i < starsCount; i++) {
    starsPositions[i].setFromSpherical(sphericalPositions[i]);
  }

  const bufferPositions = [];
  // Make a flat array of those positions
  for (let i = 0; i < starsCount; i++) {
    bufferPositions.push(
      starsPositions[i].x,
      starsPositions[i].y,
      starsPositions[i].z
    );
  }

  return new Float32Array(bufferPositions);
}

export default useStarsBufferPositions;
