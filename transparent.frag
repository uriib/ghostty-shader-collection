void mainImage(out vec4 frag_color, vec2 frag_coord) {
  const vec4 color = texture2D(iChannel0, frag_coord / iResolution.xy);
  const float a = mix(0.82, 1.0, smoothstep(0.0, 0.45, length(color.rgb)));
  frag_color = vec4(color.rgb, min(a, color.a));
}
