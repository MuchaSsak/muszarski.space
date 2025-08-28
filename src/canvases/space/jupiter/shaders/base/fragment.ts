const jupiterBaseFragmentShader = /*glsl*/ ` 
uniform vec3 uJupiterDirection;

uniform sampler2D uJupiterTexture;

uniform vec3 uJupiterAtmosphereDayColor;
uniform vec3 uJupiterAtmosphereTwilightColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
   vec3 viewDirection = normalize(vPosition - cameraPosition);
   vec3 normal = normalize(vNormal);
   vec3 color = vec3(0.0);

   // Sun orientation
   vec3 sunDirection = -uJupiterDirection;
   float sunOrientation = dot(sunDirection, normal);

   // Day / night color
   float dayMix = smoothstep(-0.25, 0.5, sunOrientation);
   vec3 dayColor = mix(texture(uJupiterTexture, vUv).rgb, vec3(0.0), 0.4);
   vec3 nightColor = mix(texture(uJupiterTexture, vUv).rgb, vec3(0.0), 0.96);
   color = mix(nightColor, dayColor, dayMix);

   // Fresnel
   float fresnel = dot(viewDirection, normal) + 1.0;
   fresnel = pow(fresnel, 2.0);

   // Atmosphere
   float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
   vec3 atmosphereColor = mix(uJupiterAtmosphereTwilightColor, uJupiterAtmosphereDayColor, atmosphereDayMix);
   color = mix(color, atmosphereColor, fresnel * atmosphereDayMix);

   // Final color
   gl_FragColor = vec4(color, 1.0);
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
}
`;

export default jupiterBaseFragmentShader;
