'use client';

import { useEffect, useRef } from 'react';

const vertexShaderSource = `
  attribute vec4 position;

  void main() {
    gl_Position = position;
  }
`;

const fragmentShaderSource = `
  precision mediump float;

  uniform float u_time;
  uniform vec2 u_resolution;

  float wave(vec2 uv, float speed, float scale, float height) {
    return sin((uv.x * scale) + (u_time * speed)) * height;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    float horizon =
      0.44 +
      wave(uv, 1.2, 8.0, 0.035) +
      wave(uv, -1.7, 15.0, 0.018) +
      wave(uv, 0.7, 27.0, 0.009);

    float waterMask = smoothstep(horizon + 0.018, horizon - 0.02, uv.y);
    float foam = smoothstep(horizon + 0.012, horizon - 0.002, uv.y) - smoothstep(horizon - 0.018, horizon - 0.035, uv.y);
    float ripple = sin((uv.x * 34.0) + (uv.y * 10.0) + (u_time * 1.8)) * 0.5 + 0.5;
    float depth = smoothstep(1.0, 0.08, uv.y);

    vec3 topColor = vec3(0.63, 0.88, 0.98);
    vec3 deepColor = vec3(0.05, 0.30, 0.52);
    vec3 waterColor = mix(topColor, deepColor, depth);
    waterColor += ripple * 0.05 * waterMask;

    vec3 mistColor = vec3(0.90, 0.96, 1.0);
    float mist = smoothstep(0.82, 0.12, uv.y) * (1.0 - waterMask) * 0.22;

    vec3 color = mix(mistColor, waterColor, waterMask);
    color = mix(color, vec3(0.92, 0.98, 1.0), foam * 0.58);

    float alpha = max(waterMask * 0.82, mist);
    gl_FragColor = vec4(color, alpha);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);

  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl: WebGLRenderingContext) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (!vertexShader || !fragmentShader) {
    return null;
  }

  const program = gl.createProgram();

  if (!program) {
    return null;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
  const scale = window.devicePixelRatio > 1 ? 0.5 : 0.75;
  const width = Math.max(1, Math.floor(canvas.clientWidth * window.devicePixelRatio * scale));
  const height = Math.max(1, Math.floor(canvas.clientHeight * window.devicePixelRatio * scale));

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
}

export function FooterWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext('webgl', { alpha: true, antialias: false });

    if (!canvas || !gl) {
      return;
    }

    const activeCanvas = canvas;
    const activeGl = gl;
    const program = createProgram(activeGl);

    if (!program) {
      return;
    }

    const positionLocation = activeGl.getAttribLocation(program, 'position');
    const timeLocation = activeGl.getUniformLocation(program, 'u_time');
    const resolutionLocation = activeGl.getUniformLocation(program, 'u_resolution');
    const positionBuffer = activeGl.createBuffer();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrame = 0;

    const positions = new Float32Array([
      -1, -1, 0,
      1, -1, 0,
      -1, 1, 0,
      -1, 1, 0,
      1, -1, 0,
      1, 1, 0,
    ]);

    activeGl.bindBuffer(activeGl.ARRAY_BUFFER, positionBuffer);
    activeGl.bufferData(activeGl.ARRAY_BUFFER, positions, activeGl.STATIC_DRAW);
    activeGl.enable(activeGl.BLEND);
    activeGl.blendFunc(activeGl.SRC_ALPHA, activeGl.ONE_MINUS_SRC_ALPHA);

    function render(time: number) {
      resizeCanvasToDisplaySize(activeCanvas);

      activeGl.viewport(0, 0, activeCanvas.width, activeCanvas.height);
      activeGl.clearColor(0, 0, 0, 0);
      activeGl.clear(activeGl.COLOR_BUFFER_BIT);
      activeGl.useProgram(program);
      activeGl.bindBuffer(activeGl.ARRAY_BUFFER, positionBuffer);
      activeGl.enableVertexAttribArray(positionLocation);
      activeGl.vertexAttribPointer(positionLocation, 3, activeGl.FLOAT, false, 0, 0);
      activeGl.uniform1f(timeLocation, time * 0.002);
      activeGl.uniform2f(resolutionLocation, activeCanvas.width, activeCanvas.height);
      activeGl.drawArrays(activeGl.TRIANGLES, 0, 6);

      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(render);
      }
    }

    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
      activeGl.deleteBuffer(positionBuffer);
      activeGl.deleteProgram(program);
    };
  }, []);

  return <canvas ref={canvasRef} className="footer-wave-canvas" aria-hidden="true" />;
}
