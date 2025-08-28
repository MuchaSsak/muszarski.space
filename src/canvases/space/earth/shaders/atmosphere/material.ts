import { shaderMaterial } from "@react-three/drei";

import earthAtmosphereFragmentShader from "@/canvases/space/earth/shaders/atmosphere/fragment";
import earthAtmosphereVertexShader from "@/canvases/space/earth/shaders/atmosphere/vertex";

const EarthAtmosphereShaderMaterial = shaderMaterial(
  {
    uEarthDirection: null,

    uEarthAtmosphereDayColor: null,
    uEarthAtmosphereTwilightColor: null,
  },
  earthAtmosphereVertexShader,
  earthAtmosphereFragmentShader
);

export default EarthAtmosphereShaderMaterial;
