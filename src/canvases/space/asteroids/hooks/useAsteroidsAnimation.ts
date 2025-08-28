import { useAnimations } from "@react-three/drei";
import type { ObjectMap } from "@react-three/fiber";
import type { GLTF } from "node_modules/three-stdlib/loaders/GLTFLoader";
import { useEffect } from "react";

function useAsteroidsAnimation(
  asteroidsModel: GLTF & ObjectMap,
  animationSpeed = 0.075
) {
  const { ref, actions } = useAnimations(asteroidsModel.animations);

  useEffect(() => {
    const rotateAnimation = actions?.["Take 001"];
    if (!rotateAnimation) return;

    rotateAnimation.play();
    rotateAnimation.timeScale = animationSpeed;
  }, [actions, animationSpeed]);

  return ref;
}

export default useAsteroidsAnimation;
