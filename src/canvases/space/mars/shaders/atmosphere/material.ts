import { shaderMaterial } from "@react-three/drei";

import marsAtmosphereFragmentShader from "@/canvases/space/mars/shaders/atmosphere/fragment";
import marsAtmosphereVertexShader from "@/canvases/space/mars/shaders/atmosphere/vertex";

const MarsAtmosphereShaderMaterial = shaderMaterial(
  {
    uMarsDirection: null,

    uMarsAtmosphereDayColor: null,
    uMarsAtmosphereTwilightColor: null,
  },
  marsAtmosphereVertexShader,
  marsAtmosphereFragmentShader
);

export default MarsAtmosphereShaderMaterial;
