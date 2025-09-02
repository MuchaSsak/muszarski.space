import { Billboard, Float, Text3D, useMatcapTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { heroWelcomeTextScrollProgress } from "@/canvases/space/components/CameraControls";

function HeroWelcomeText() {
  const [matcapTextureSilver] = useMatcapTexture(
    "3F4441_D1D7D6_888F87_A2ADA1",
    128
  );
  const [matcapTextureGold] = useMatcapTexture(
    "C09E5C_DAD2B9_654429_81582D",
    128
  );

  // Hide text when the current section viewed is not appriopriate for it to appear
  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  const isRendered = useAnimateObjectVisibility(
    materialsToHideRefs,
    [heroWelcomeTextScrollProgress, heroWelcomeTextScrollProgress + 1],
    [heroWelcomeTextScrollProgress, heroWelcomeTextScrollProgress + 2]
  );
  if (!isRendered) return;

  return (
    <group>
      <Float
        speed={1}
        rotationIntensity={0.05}
        floatIntensity={0.05}
        floatingRange={[0.005, 0.02]}
      >
        <Billboard position={[11, -0.5, -12.5]}>
          <Text3D
            curveSegments={4}
            bevelEnabled
            bevelSize={0.02}
            bevelThickness={0.06}
            height={0.05}
            lineHeight={0.5}
            scale={1.15}
            letterSpacing={-0.02}
            position={[3, 1, -12.5]}
            font="/assets/fonts/Space_Grotesk_Bold.json"
          >
            MUSZARSKI
            <meshMatcapMaterial
              matcap={matcapTextureSilver}
              ref={(el) =>
                materialsToHideRefs.current.push(el as THREE.Material)
              }
              transparent
            />
          </Text3D>

          <Text3D
            curveSegments={4}
            height={0.05}
            bevelEnabled
            bevelSize={0.02}
            bevelThickness={0.06}
            lineHeight={0.5}
            scale={1.15}
            letterSpacing={-0.02}
            position={[3, -0.75, -12.5]}
            font="/assets/fonts/Space_Grotesk_Bold.json"
          >
            PORTFOLIO
            <meshMatcapMaterial
              matcap={matcapTextureGold}
              ref={(el) =>
                materialsToHideRefs.current.push(el as THREE.Material)
              }
              transparent
            />
          </Text3D>
        </Billboard>
      </Float>
    </group>
  );
}

export default HeroWelcomeText;
