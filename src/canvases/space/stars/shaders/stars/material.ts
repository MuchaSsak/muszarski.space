import { shaderMaterial } from "@react-three/drei";

import starsFragmentShader from "@/canvases/space/stars/shaders/stars/fragment";
import starsVertexShader from "@/canvases/space/stars/shaders/stars/vertex";

const StarsShaderMaterial = shaderMaterial(
  {
    uResolution: null,
  },
  starsVertexShader,
  starsFragmentShader
);

export default StarsShaderMaterial;
