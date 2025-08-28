import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import {
  jobExperienceListScrollProgress,
  jobExperienceTitleScrollProgress,
} from "@/canvases/space/components/CameraControls";
import { useScrollContext } from "@/contexts/ScrollContext";

function JobExperienceListInfoText() {
  const { t } = useLingui();
  const { previousScrollProgress } = useScrollContext();

  // Hide text when the current section viewed is not appriopriate for it to appear
  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  useAnimateObjectVisibility(
    materialsToHideRefs,
    [jobExperienceListScrollProgress, jobExperienceListScrollProgress],
    undefined,
    {
      delay:
        previousScrollProgress === jobExperienceTitleScrollProgress ? 2 : 0,
    }
  );

  return (
    <group>
      <Html
        className="select-none pointer-events-none"
        center
        position={[9.95, -3.25, -90]}
      >
        {/* Title */}
        <h3
          ref={(el) => {
            materialsToHideRefs.current.push(el as HTMLHeadingElement);
          }}
          className="w-max text-gold-gradient text-center opacity-0 text-xl flex items-center gap-2 font-bold"
        >
          {t`Click on the asteroids for more details!`}
        </h3>
      </Html>
    </group>
  );
}

export default JobExperienceListInfoText;
