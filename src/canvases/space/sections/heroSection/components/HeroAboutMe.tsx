import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { heroAboutMeScrollProgress } from "@/canvases/space/components/CameraControls";

function HeroAboutMe() {
  const { t } = useLingui();

  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  useAnimateObjectVisibility(materialsToHideRefs, [
    heroAboutMeScrollProgress,
    heroAboutMeScrollProgress,
  ]);

  return (
    <group>
      {/* Title */}
      <Html className="select-none pointer-events-none" position={[1, 3, -16]}>
        <h1
          ref={(el) => {
            materialsToHideRefs.current.push(el as HTMLHeadingElement);
          }}
          className="opacity-0 text-gold-gradient text-6xl font-bold pb-4"
        >
          {t`About me `}
          <span className="font-emoji text-foreground">👋</span>
        </h1>

        {/* Description */}
        <p
          ref={(el) => {
            materialsToHideRefs.current.push(el as HTMLParagraphElement);
          }}
          className="opacity-0 text-gold-gradient text-xl font-semibold w-sm flex flex-col gap-4"
        >
          <span>
            {t`My name's Mateusz Muszarski and I'm passionate about programming as well as computer-science. Currently, I'm studying as programming technician in my technical college. `}
            <span className="font-emoji text-foreground">🎓</span>
          </span>
          <span>
            {t`My primary focus lies in full-stack and creative web development, however, I also learned the fundamentals in other digital areas such as 3D computer graphics, graphic design, photo or video editing. `}
            <span className="font-emoji text-foreground">🎨</span>
          </span>
          <span>
            {t`Beyond technology, I enjoy a range of other activites including working out, traveling, photography, swimming and many more! `}
            <span className="font-emoji text-foreground">✨</span>
          </span>
        </p>
      </Html>
    </group>
  );
}

export default HeroAboutMe;
