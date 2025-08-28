import { shaderMaterial } from "@react-three/drei";

import saturnBaseFragmentShader from "@/canvases/space/saturn/shaders/base/fragment";
import saturnBaseVertexShader from "@/canvases/space/saturn/shaders/base/vertex";

const SaturnBaseShaderMaterial = shaderMaterial(
  {
    uSaturnDirection: null,

    uSaturnTexture: null,

    uSaturnAtmosphereDayColor: null,
    uSaturnAtmosphereTwilightColor: null,
  },
  saturnBaseVertexShader,
  saturnBaseFragmentShader
);

export default SaturnBaseShaderMaterial;
