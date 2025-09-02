import { shaderMaterial } from "@react-three/drei";

import neptuneAtmosphereFragmentShader from "@/canvases/space/neptune/shaders/atmosphere/fragment";
import neptuneAtmosphereVertexShader from "@/canvases/space/neptune/shaders/atmosphere/vertex";

const NeptuneAtmosphereShaderMaterial = shaderMaterial(
  {
    uNeptuneDirection: null,

    uNeptuneAtmosphereDayColor: null,
    uNeptuneAtmosphereTwilightColor: null,
  },
  neptuneAtmosphereVertexShader,
  neptuneAtmosphereFragmentShader
);

export default NeptuneAtmosphereShaderMaterial;
