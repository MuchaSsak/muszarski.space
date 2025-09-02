import { shaderMaterial } from "@react-three/drei";

import saturnRingFragmentShader from "@/canvases/space/saturn/shaders/ring/fragment";
import saturnRingVertexShader from "@/canvases/space/saturn/shaders/ring/vertex";

const SaturnRingShaderMaterial = shaderMaterial(
  {
    uSaturnDirection: null,

    uSaturnRingTexture: null,
  },
  saturnRingVertexShader,
  saturnRingFragmentShader
);

export default SaturnRingShaderMaterial;
