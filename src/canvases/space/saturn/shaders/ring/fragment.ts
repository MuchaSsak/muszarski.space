const saturnRingFragmentShader = /*glsl*/ ` 
uniform vec3 uSaturnDirection;

uniform sampler2D uSaturnRingTexture;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
   vec3 viewDirection = normalize(vPosition - cameraPosition);
   vec3 normal = normalize(vNormal);
   vec3 color = vec3(0.0);

   // Alpha
   float alpha = smoothstep(0.0, 0.125, texture(uSaturnRingTexture, vUv).r);

   // Sun orientation
   vec3 sunDirection = -uSaturnDirection;
   float sunOrientation = dot(sunDirection, normal);
   
   // Day / night color
   float dayMix = smoothstep(-0.25, 0.5, sunOrientation);
   vec3 dayColor = texture(uSaturnRingTexture, vUv).rgb;
   vec3 nightColor = mix(texture(uSaturnRingTexture, vUv).rgb, vec3(0.0), 0.0);
   color = mix(nightColor, dayColor, dayMix);

   // Final color
   gl_FragColor = vec4(color, alpha);
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
}
`;

export default saturnRingFragmentShader;
