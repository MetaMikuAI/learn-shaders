#version 330 core
// Grid-only extraction from "sun & grid" shader
// Original: https://www.shadertoy.com/view/Wt33Wf  (Jan Mróz)

out vec4 FragColor;
uniform vec2 iResolution;
uniform float iTime;
uniform float battery; // influences speed/brightness

float grid(vec2 uv, float battery)
{
    vec2 size = vec2(uv.y, uv.y * uv.y * 0.2) * 0.01;
    uv += vec2(0.0, iTime * 4.0 * (battery + 0.05));
    uv = abs(fract(uv) - 0.5);
    vec2 lines = smoothstep(size, vec2(0.0), uv);
    lines += smoothstep(size * 5.0, vec2(0.0), uv) * 0.4 * battery;
    return clamp(lines.x + lines.y, 0.0, 3.0);
}

void main()
{
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
    vec3 col = vec3(0.0, 0.1, 0.2);

    if (uv.y < -0.2)
    {
        // ground mapping from ShaderToy
        uv.y = 3.0 / (abs(uv.y + 0.2) + 0.05);
        uv.x *= uv.y * 1.0;
        float gridVal = grid(uv, battery);
        col = mix(col, vec3(1.0, 0.5, 1.0), clamp(gridVal, 0.0, 1.0));
    }

    // subtle fog near horizon
    float fog = smoothstep(0.1, -0.02, abs(uv.y + 0.2));
    col += fog * fog * fog;
    col = mix(vec3(col.r, col.r, col.r) * 0.5, col, battery * 0.7);

    FragColor = vec4(col, 1.0);
}
