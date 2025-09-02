import * as THREE from "three";

import { PROJECTS_LIST } from "@/lib/constants";

function useProjectsItemCardPositions(
  listScrollProgress: number
): THREE.Vector3[] {
  const projectsCardsPositions: THREE.Vector3[] = [];

  for (let i = 0; i < PROJECTS_LIST.length; i++) {
    const phi = Math.PI / 4;
    const thetaOffset = -listScrollProgress * (Math.PI * 2);
    const theta = ((Math.PI * 2) / PROJECTS_LIST.length) * i + thetaOffset; // Separate all cards equally in a full circle
    const radius = 20;
    const distance = 5;

    // Coordinates
    const projectsSpherical = new THREE.Spherical(radius, phi, theta);

    const projectsDirection = new THREE.Vector3();
    const projectsDistanceFromSaturn = distance;

    projectsDirection.setFromSpherical(projectsSpherical);

    // Update saturn position
    projectsCardsPositions.push(
      projectsDirection.multiplyScalar(projectsDistanceFromSaturn)
    );
  }

  return projectsCardsPositions;
}

export default useProjectsItemCardPositions;
