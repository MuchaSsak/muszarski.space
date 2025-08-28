import { shaderMaterial } from "@react-three/drei";

import earthCloudsFragmentShader from "@/canvases/space/earth/shaders/clouds/fragment";
import earthCloudsVertexShader from "@/canvases/space/earth/shaders/clouds/vertex";

const EarthCloudsShaderMaterial = shaderMaterial(
  {
    uEarthDirection: null,

    uEarthSpecularCloudsTexture: null,

    uEarthCloudsAmount: null,
    uEarthCloudsDayAlpha: null,
    uEarthCloudsNightAlpha: null,

    uEarthAtmosphereDayColor: null,
    uEarthAtmosphereTwilightColor: null,

    uEarthSpecularIntensity: null,
    uEarthSpecularOpacity: null,
    uEarthSpecularColor: null,
  },
  earthCloudsVertexShader,
  earthCloudsFragmentShader
);

export default EarthCloudsShaderMaterial;
