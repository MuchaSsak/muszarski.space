import classic3DPerlinNoise from "@/canvases/shaders/classic3DPerlinNoise";

const earthCloudsFragmentShader = /*glsl*/ ` 
// Imports
${classic3DPerlinNoise}

uniform vec3 uEarthDirection;

uniform sampler2D uEarthSpecularCloudsTexture;

uniform float uEarthCloudsAmount;
uniform float uEarthCloudsDayAlpha;   
uniform float uEarthCloudsNightAlpha;

uniform vec3 uEarthAtmosphereDayColor;
uniform vec3 uEarthAtmosphereTwilightColor;

uniform float uEarthSpecularIntensity;
uniform float uEarthSpecularOpacity;
uniform vec3 uEarthSpecularColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
   vec3 viewDirection = normalize(vPosition - cameraPosition);
   vec3 normal = normalize(vNormal);
   vec4 color = vec4(0.0);

   // Sun orientation
   vec3 sunDirection = -uEarthDirection;
   float sunOrientation = dot(sunDirection, normal);

   // Day mix
   float dayMix = smoothstep(-0.25, 0.5, sunOrientation);

   // Specular clouds color
   vec2 specularCloudsColor = texture(uEarthSpecularCloudsTexture, vUv).rg; 

   // Clouds
   float cloudsMix = smoothstep(uEarthCloudsAmount, 1.0, specularCloudsColor.g);
   vec4 cloudsColor = mix(vec4(vec3(1.0), uEarthCloudsNightAlpha), vec4(vec3(1.0), uEarthCloudsDayAlpha), dayMix);
   color = mix(color, cloudsColor, cloudsMix);

   // Fresnel
   float fresnel = dot(viewDirection, normal) + 1.0;
   fresnel = pow(fresnel, 2.0);

   // Atmosphere
   float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
   vec3 atmosphereColor = mix(uEarthAtmosphereTwilightColor, uEarthAtmosphereDayColor, atmosphereDayMix);

   // Specular
   vec3 reflection = reflect(uEarthDirection, normal);
   float specular = -dot(reflection, viewDirection);
   specular = max(specular, 0.0);
   specular = pow(specular, uEarthSpecularIntensity);
   specular *= specularCloudsColor.r + 0.15;
   specular = min(specular, 1.0);

   vec3 specularColor = mix(uEarthSpecularColor, atmosphereColor, fresnel);
   specularColor *= specular;
   specularColor *= uEarthSpecularOpacity;
   color *= mix(color, vec4(specularColor, 1.0), specular);

   // Final color
   gl_FragColor = color;
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
}
`;

export default earthCloudsFragmentShader;
