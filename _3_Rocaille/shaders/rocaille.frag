#version 330 core
// Adapted from "Rocaille" by @XorDev on ShaderToy
// Original: https://www.shadertoy.com/view/WXyczK

out vec4 FragColor;
uniform vec2 iResolution; // width, height
uniform float iTime;

vec4 mainImage(vec2 I)
{
    vec2 v = iResolution;
    vec2 p = (I + I - v) / v.y / 0.3; // centered & scaled coordinates

    vec4 O = vec4(0.0);
    for (float i = 0.0; i < 9.0; i += 1.0) {
        // turbulence layering
        vec2 vv = p;
        for (float f = 1.0; f <= 9.0; f += 1.0) {
            vv += sin(vv.yx * f + i + iTime) / f;
        }
        O += (cos(i + vec4(0.0,1.0,2.0,3.0)) + 1.0) / 6.0 / length(vv);
    }

    // tanh tonemapping similar to original
    return tanh(O * O);
}

void main() {
    FragColor = mainImage(gl_FragCoord.xy);
}
