import { useMemo } from "react";
import * as THREE from "three";

function useSaturnRingGeometry() {
  // Create geometry
  const geometry = useMemo(() => {
    const geometry = new THREE.RingGeometry(2.75, 6.25, 64);
    const positions = geometry.attributes.position;

    // Re-calculate UVs
    const v3 = new THREE.Vector3();
    for (let i = 0; i < positions.count; i++) {
      v3.fromBufferAttribute(positions, i);
      geometry.attributes.uv.setXY(i, v3.length() < 4 ? 0 : 1, 1);
    }

    return geometry;
  }, []);

  return geometry;
}

export default useSaturnRingGeometry;
