const neptuneBaseFragmentShader = /*glsl*/ ` 
uniform vec3 uNeptuneDirection;

uniform sampler2D uNeptuneTexture;

uniform vec3 uNeptuneAtmosphereDayColor;
uniform vec3 uNeptuneAtmosphereTwilightColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
   vec3 viewDirection = normalize(vPosition - cameraPosition);
   vec3 normal = normalize(vNormal);
   vec3 color = vec3(0.0);

   // Sun orientation
   vec3 sunDirection = -uNeptuneDirection;
   float sunOrientation = dot(sunDirection, normal);

   // Day / night color
   float dayMix = smoothstep(-0.25, 0.5, sunOrientation);
   vec3 dayColor = texture(uNeptuneTexture, vUv).rgb;
   vec3 nightColor = mix(texture(uNeptuneTexture, vUv).rgb, vec3(0.0), 0.96);
   color = mix(nightColor, dayColor, dayMix);

   // Fresnel
   float fresnel = dot(viewDirection, normal) + 1.0;
   fresnel = pow(fresnel, 2.0);

   // Atmosphere
   float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
   vec3 atmosphereColor = mix(uNeptuneAtmosphereTwilightColor, uNeptuneAtmosphereDayColor, atmosphereDayMix);
   color = mix(color, atmosphereColor, fresnel * atmosphereDayMix);

   // Final color
   gl_FragColor = vec4(color, 1.0);
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
}
`;

export default neptuneBaseFragmentShader;
