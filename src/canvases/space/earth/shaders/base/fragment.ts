const earthBaseFragmentShader = /*glsl*/ ` 
uniform vec3 uEarthDirection;

uniform sampler2D uEarthDayTexture;
uniform sampler2D uEarthNightTexture;
uniform sampler2D uEarthSpecularCloudsTexture;

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
   vec3 color = vec3(0.0);

   // Sun orientation
   vec3 sunDirection = -uEarthDirection;
   float sunOrientation = dot(sunDirection, normal);

   // Day / night color
   float dayMix = smoothstep(-0.25, 0.5, sunOrientation);
   vec3 dayColor = texture(uEarthDayTexture, vUv).rgb;
   vec3 nightColor = texture(uEarthNightTexture, vUv).rgb;
   color = mix(nightColor, dayColor, dayMix);

   // Specular clouds color
   vec2 specularCloudsColor = texture(uEarthSpecularCloudsTexture, vUv).rg; 

   // Fresnel
   float fresnel = dot(viewDirection, normal) + 1.0;
   fresnel = pow(fresnel, 2.0);

   // Atmosphere
   float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
   vec3 atmosphereColor = mix(uEarthAtmosphereTwilightColor, uEarthAtmosphereDayColor, atmosphereDayMix);
   color = mix(color, atmosphereColor, fresnel * atmosphereDayMix);

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
   color += specularColor * 0.5;

   // Final color
   gl_FragColor = vec4(color, 1.0);
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
}
`;

export default earthBaseFragmentShader;
