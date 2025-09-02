import { shaderMaterial } from "@react-three/drei";

import saturnAtmosphereFragmentShader from "@/canvases/space/saturn/shaders/atmosphere/fragment";
import saturnAtmosphereVertexShader from "@/canvases/space/saturn/shaders/atmosphere/vertex";

const SaturnAtmosphereShaderMaterial = shaderMaterial(
  {
    uSaturnDirection: null,

    uSaturnAtmosphereDayColor: null,
    uSaturnAtmosphereTwilightColor: null,
  },
  saturnAtmosphereVertexShader,
  saturnAtmosphereFragmentShader
);

export default SaturnAtmosphereShaderMaterial;
