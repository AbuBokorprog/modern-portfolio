// components/AetherParticles.js

import { useEffect, useRef } from 'react';
import * as SimplexNoise from 'simplex-noise';

const AetherParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const particleCount = 2000;
    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const spawnRadius = Math.random() * 150 + 150;
    const noiseSteps = 6;

    let center = [];
    let tick = 0;
    let simplex = new SimplexNoise();
    let particleProps = new Float32Array(particleCount * particlePropCount);

    // Rest of the code...
  }, []);

  return <canvas ref={canvasRef} />;
};

export default AetherParticles;
