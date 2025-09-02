const starsFragmentShader = /*glsl*/ ` 
void main()
{
   vec3 color = vec3(1.0);
   vec2 uv = gl_PointCoord;
   float distanceToCenter = length(uv - 0.5);
   float alpha = 0.05 / distanceToCenter - 0.1;
   
   gl_FragColor = vec4(color, alpha);
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
}
`;

export default starsFragmentShader;
