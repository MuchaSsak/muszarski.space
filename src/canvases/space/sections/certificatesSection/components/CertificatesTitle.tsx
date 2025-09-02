import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { certificatesTitleScrollProgress } from "@/canvases/space/components/CameraControls";

function CertificatesTitle() {
  const { t } = useLingui();

  // Hide text when the current section viewed is not appriopriate for it to appear
  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  useAnimateObjectVisibility(materialsToHideRefs, [
    certificatesTitleScrollProgress,
    certificatesTitleScrollProgress,
  ]);

  return (
    <Html
      className="select-none pointer-events-none"
      position={[-140, 7, -600]}
    >
      {/* Title */}
      <h3
        ref={(el) => {
          materialsToHideRefs.current.push(el as HTMLHeadingElement);
        }}
        className="w-max text-amber-gradient text-center opacity-0 text-7xl flex items-center gap-2 font-bold"
      >
        <span>{t`Certificates`}</span>
      </h3>
    </Html>
  );
}

export default CertificatesTitle;
