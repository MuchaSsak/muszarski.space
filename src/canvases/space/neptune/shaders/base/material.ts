import { shaderMaterial } from "@react-three/drei";

import neptuneBaseFragmentShader from "@/canvases/space/neptune/shaders/base/fragment";
import neptuneBaseVertexShader from "@/canvases/space/neptune/shaders/base/vertex";

const NeptuneBaseShaderMaterial = shaderMaterial(
  {
    uNeptuneDirection: null,

    uNeptuneTexture: null,

    uNeptuneAtmosphereDayColor: null,
    uNeptuneAtmosphereTwilightColor: null,
  },
  neptuneBaseVertexShader,
  neptuneBaseFragmentShader
);

export default NeptuneBaseShaderMaterial;
