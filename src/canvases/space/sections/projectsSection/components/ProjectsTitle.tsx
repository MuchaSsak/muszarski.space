import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { projectsTitleScrollProgress } from "@/canvases/space/components/CameraControls";

function ProjectsTitle() {
  const { t } = useLingui();

  // Hide text when the current section viewed is not appriopriate for it to appear
  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  useAnimateObjectVisibility(materialsToHideRefs, [
    projectsTitleScrollProgress,
    projectsTitleScrollProgress,
  ]);

  return (
    <Html
      className="select-none pointer-events-none"
      center
      position={[-743, -18, 1400]}
    >
      {/* Title */}
      <h3
        ref={(el) => {
          materialsToHideRefs.current.push(el as HTMLHeadingElement);
        }}
        className="w-max text-yellow-gradient text-center opacity-0 text-8xl flex items-center gap-2 font-bold"
      >
        <span>{t`Projects`}</span>
      </h3>
    </Html>
  );
}

export default ProjectsTitle;
