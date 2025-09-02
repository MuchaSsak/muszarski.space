import gsap from "gsap";
import { useEffect, useState } from "react";
import * as THREE from "three";

import { useScrollContext } from "@/contexts/ScrollContext";

function useAnimateObjectVisibility(
  objectMaterials: React.RefObject<(THREE.Material | HTMLElement)[]>,
  isVisibleThreshold: [number, number],
  isRenderedThreshold?: [number, number],
  showOptions?: gsap.TweenVars,
  hideOptions?: gsap.TweenVars
) {
  const { scrollProgress } = useScrollContext();
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const materialsToHide = objectMaterials.current;
    let showIsRenderedDelayedCall: gsap.core.Tween;
    let hideIsRenderedDelayedCall: gsap.core.Tween;

    // Toggle off rendering and therefore remove geometry
    if (isRenderedThreshold?.length) {
      if (
        scrollProgress >= isRenderedThreshold[0] &&
        scrollProgress <= isRenderedThreshold[1]
      )
        showIsRenderedDelayedCall = gsap.delayedCall(
          Number(showOptions?.duration ?? 1),
          () => setIsRendered(true)
        );
      else
        hideIsRenderedDelayedCall = gsap.delayedCall(
          Number(hideOptions?.duration ?? 1),
          () => setIsRendered(false)
        );
    }

    // Animate opacity for all materialsToHide
    materialsToHide.forEach((material) => {
      if (!material) return;

      if (
        scrollProgress >= isVisibleThreshold[0] &&
        scrollProgress <= isVisibleThreshold[1]
      )
        // Show material
        gsap.to(material, {
          ...showOptions,
          opacity: 1,
          duration: showOptions?.duration ?? 1,
        });
      // Hide material
      else
        gsap.to(material, {
          ...hideOptions,
          opacity: 0,
          duration: hideOptions?.duration ?? 1,
        });
    });

    // Cleanup
    return () => {
      materialsToHide.forEach((material) => {
        gsap.killTweensOf(material);
      });

      gsap.killTweensOf(showIsRenderedDelayedCall, hideIsRenderedDelayedCall);
    };
  }, [
    scrollProgress,
    objectMaterials,
    isRenderedThreshold,
    isVisibleThreshold,
    showOptions,
    hideOptions,
  ]);

  return isRendered;
}

export default useAnimateObjectVisibility;
