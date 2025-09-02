import { shaderMaterial } from "@react-three/drei";

import jupiterAtmosphereFragmentShader from "@/canvases/space/jupiter/shaders/atmosphere/fragment";
import jupiterAtmosphereVertexShader from "@/canvases/space/jupiter/shaders/atmosphere/vertex";

const JupiterAtmosphereShaderMaterial = shaderMaterial(
  {
    uJupiterDirection: null,

    uJupiterAtmosphereDayColor: null,
    uJupiterAtmosphereTwilightColor: null,
  },
  jupiterAtmosphereVertexShader,
  jupiterAtmosphereFragmentShader
);

export default JupiterAtmosphereShaderMaterial;
