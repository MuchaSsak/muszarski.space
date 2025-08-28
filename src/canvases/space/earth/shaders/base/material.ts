import { shaderMaterial } from "@react-three/drei";

import earthBaseFragmentShader from "@/canvases/space/earth/shaders/base/fragment";
import earthBaseVertexShader from "@/canvases/space/earth/shaders/base/vertex";

const EarthBaseShaderMaterial = shaderMaterial(
  {
    uEarthDirection: null,

    uEarthDayTexture: null,
    uEarthNightTexture: null,
    uEarthSpecularCloudsTexture: null,

    uEarthAtmosphereDayColor: null,
    uEarthAtmosphereTwilightColor: null,

    uEarthSpecularIntensity: null,
    uEarthSpecularOpacity: null,
    uEarthSpecularColor: null,
  },
  earthBaseVertexShader,
  earthBaseFragmentShader
);

export default EarthBaseShaderMaterial;
