import { shaderMaterial } from "@react-three/drei";

import jupiterBaseFragmentShader from "@/canvases/space/jupiter/shaders/base/fragment";
import jupiterBaseVertexShader from "@/canvases/space/jupiter/shaders/base/vertex";

const JupiterBaseShaderMaterial = shaderMaterial(
  {
    uJupiterDirection: null,

    uJupiterTexture: null,

    uJupiterAtmosphereDayColor: null,
    uJupiterAtmosphereTwilightColor: null,
  },
  jupiterBaseVertexShader,
  jupiterBaseFragmentShader
);

export default JupiterBaseShaderMaterial;
