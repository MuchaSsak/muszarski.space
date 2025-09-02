const neptuneAtmosphereFragmentShader = /*glsl*/ ` 
uniform vec3 uNeptuneDirection;

uniform vec3 uNeptuneAtmosphereDayColor;
uniform vec3 uNeptuneAtmosphereTwilightColor;

varying vec3 vNormal;
varying vec3 vPosition;

void main() {
   vec3 viewDirection = normalize(vPosition - cameraPosition);
   vec3 normal = normalize(vNormal);
   vec3 color = vec3(0.0);

   // Sun orientation
   vec3 sunDirection = -uNeptuneDirection;
   float sunOrientation = dot(sunDirection, normal);

   // Atmosphere
   float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
   vec3 atmosphereColor = mix(uNeptuneAtmosphereTwilightColor, uNeptuneAtmosphereDayColor, atmosphereDayMix);
   color += atmosphereColor;

   // Alpha
   float edgeAlpha = dot(viewDirection, normal);
   edgeAlpha = smoothstep(0.0, 0.5, edgeAlpha);

   float dayAlpha = smoothstep(-0.5, 0.0, sunOrientation);
   
   float alpha = edgeAlpha * dayAlpha;

   // Final color
   gl_FragColor = vec4(color, alpha);
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
}
`;

export default neptuneAtmosphereFragmentShader;
