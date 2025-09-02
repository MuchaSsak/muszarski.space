import { useGLTF } from "@react-three/drei";

import useAsteroidsAnimation from "@/canvases/space/asteroids/hooks/useAsteroidsAnimation";

function AsteroidsModel({ animationSpeed }: { animationSpeed?: number }) {
  const model = useGLTF("/assets/models/asteroids.glb");

  const animationRef = useAsteroidsAnimation(model, animationSpeed);

  return <primitive ref={animationRef} object={model.scene.clone()} />;
}

export default AsteroidsModel;
