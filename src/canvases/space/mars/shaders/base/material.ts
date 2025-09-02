import { shaderMaterial } from "@react-three/drei";

import marsBaseFragmentShader from "@/canvases/space/mars/shaders/base/fragment";
import marsBaseVertexShader from "@/canvases/space/mars/shaders/base/vertex";

const MarsBaseShaderMaterial = shaderMaterial(
  {
    uMarsDirection: null,

    uMarsTexture: null,

    uMarsAtmosphereDayColor: null,
    uMarsAtmosphereTwilightColor: null,
  },
  marsBaseVertexShader,
  marsBaseFragmentShader
);

export default MarsBaseShaderMaterial;
