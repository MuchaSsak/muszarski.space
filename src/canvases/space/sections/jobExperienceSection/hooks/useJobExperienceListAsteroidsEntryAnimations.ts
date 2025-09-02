import gsap from "gsap";
import { useEffect } from "react";
import * as THREE from "three";

import { useScrollContext } from "@/contexts/ScrollContext";

function useJobExperienceListAsteroidsEntryAnimations({
  beniaminekAsteroidRef,
  escAsteroidRef,
  evelstarAsteroidRef,
}: {
  beniaminekAsteroidRef: React.RefObject<THREE.Group<THREE.Object3DEventMap>>;
  escAsteroidRef: React.RefObject<THREE.Group<THREE.Object3DEventMap>>;
  evelstarAsteroidRef: React.RefObject<THREE.Group<THREE.Object3DEventMap>>;
}) {
  const { scrollProgress } = useScrollContext();

  useEffect(() => {
    if (
      !beniaminekAsteroidRef.current ||
      !escAsteroidRef.current ||
      !evelstarAsteroidRef.current
    )
      return;

    // scrollProgress of 5 === Mars work experience list (scene #6)
    if (scrollProgress === 5) {
      // Beniaminek
      gsap.to(beniaminekAsteroidRef.current.position, {
        ease: "sine.out",
        x: 13,
        y: 1,
        z: -90,
        duration: 3,
      });

      // ESC
      gsap.to(escAsteroidRef.current.position, {
        ease: "sine.out",
        x: 9.95,
        y: 2.75,
        z: -90,
        duration: 3,
      });

      // Evelstar
      gsap.to(evelstarAsteroidRef.current.position, {
        ease: "sine.out",
        x: 6,
        y: 0.8,
        z: -90,
        duration: 3,
      });
    } else {
      // Beniaminek
      gsap.to(beniaminekAsteroidRef.current.position, {
        ease: "sine.in",
        x: 25,
        y: 0,
        z: -80,
        duration: 3,
      });

      // ESC
      gsap.to(escAsteroidRef.current.position, {
        ease: "sine.out",
        x: 9.95,
        y: 10,
        z: -80,
        duration: 3,
      });

      // Evelstar
      gsap.to(evelstarAsteroidRef.current.position, {
        ease: "sine.out",
        x: -15,
        y: 0,
        z: -80,
        duration: 3,
      });
    }
  }, [
    scrollProgress,
    beniaminekAsteroidRef,
    escAsteroidRef,
    evelstarAsteroidRef,
  ]);
}

export default useJobExperienceListAsteroidsEntryAnimations;
