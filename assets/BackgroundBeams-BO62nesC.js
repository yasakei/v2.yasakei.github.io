import{r as n,j as i,C as m,u as x,a as c}from"./react-three-Cz32XsNs.js";import{g as v}from"./three-ChIeP-8W.js";const d=e=>(e=e.replace("#",""),[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]),p=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,g=`
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) + 
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`,f=n.forwardRef(function({uniforms:o},t){const{viewport:r}=x();return n.useLayoutEffect(()=>{t.current&&t.current.scale.set(r.width,r.height,1)},[t,r]),c((u,a)=>{t.current.material.uniforms.uTime.value+=.1*a}),i.jsxs("mesh",{ref:t,children:[i.jsx("planeGeometry",{args:[1,1,1,1]}),i.jsx("shaderMaterial",{uniforms:o,vertexShader:p,fragmentShader:g})]})});f.displayName="SilkPlane";const y=({meshRef:e,theme:o,color:t,speed:r,scale:u,noiseIntensity:a,rotation:s})=>{const l=n.useMemo(()=>new v,[]);return n.useEffect(()=>{l.set(o==="dark"?t:"#F3F4F6")},[o,t,l]),n.useEffect(()=>{e.current&&(e.current.material.uniforms.uSpeed.value=r,e.current.material.uniforms.uScale.value=u,e.current.material.uniforms.uNoiseIntensity.value=a,e.current.material.uniforms.uRotation.value=s)},[r,u,a,s,e]),c(()=>{e.current&&e.current.material.uniforms.uColor.value.lerp(l,.05)}),null},j=({speed:e=10,scale:o=1,color:t="#A855F7",noiseIntensity:r=1.5,rotation:u=0,theme:a})=>{const s=n.useRef(),l=n.useMemo(()=>({uSpeed:{value:e},uScale:{value:o},uNoiseIntensity:{value:r},uColor:{value:new v(...d(a==="dark"?t:"#E5E7EB"))},uRotation:{value:u},uTime:{value:0}}),[]);return i.jsxs(m,{dpr:[1,2],frameloop:"always",children:[i.jsx(f,{ref:s,uniforms:l}),i.jsx(y,{meshRef:s,theme:a,color:t,speed:e,scale:o,noiseIntensity:r,rotation:u})]})};export{j as default};
