import { Environment } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

import useStarsBufferPositions from "@/canvases/space/stars/hooks/useStarsBufferPositions";
import useStarsBufferSizes from "@/canvases/space/stars/hooks/useStarsBufferSizes";
import StarsShaderMaterial from "@/canvases/space/stars/shaders/stars/material";

/**
 * Extend shader materials and type them
 */
extend({
  StarsShaderMaterial,
});

declare module "@react-three/fiber" {
  interface ThreeElements {
    starsShaderMaterial: React.JSX.IntrinsicElements["shaderMaterial"] & {
      [key: string]: any;
      attach?: string;
      args?: any;
    } & { ref?: React.Ref<typeof StarsShaderMaterial> };
  }
}

const starsCount = 5000;

function StarsModel() {
  // Define viewport resolution uniform
  const { size } = useThree();
  const uResolution = useMemo(
    () => new THREE.Vector2(size.width, size.height),
    [size]
  );

  const bufferPositions = useStarsBufferPositions(starsCount);
  const bufferSizes = useStarsBufferSizes(starsCount);

  return (
    <Environment background resolution={2048}>
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            args={[bufferPositions, 3]}
          />
          <bufferAttribute attach="attributes-aSize" args={[bufferSizes, 1]} />
        </bufferGeometry>

        <starsShaderMaterial
          uResolution={uResolution}
          depthWrite={false}
          transparent
        />
      </points>
    </Environment>
  );
}

export default StarsModel;
