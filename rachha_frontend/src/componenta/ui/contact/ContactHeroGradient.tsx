import { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

export default function ContactHeroGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gradient = new NeatGradient({
      ref: canvas,
      colors: [
        { color: "#37240F", enabled: true },
        { color: "#37240F", enabled: true },
        { color: "#37240F", enabled: true },
        { color: "#37240F", enabled: true },
        { color: "#37240F", enabled: true },
      ],
      speed: 3,
      horizontalPressure: 5,
      verticalPressure: 7,
      waveFrequencyX: 2,
      waveFrequencyY: 2,
      waveAmplitude: 8,
      shadows: 6,
      highlights: 8,
      colorBrightness: 1,
      colorSaturation: 7,
      wireframe: false,
      colorBlending: 10,
      backgroundColor: "#2a1508",
      backgroundAlpha: 1,
      grainScale: 3,
      grainSparsity: 0,
      grainIntensity: 0.3,
      grainSpeed: 1,
      resolution: 1,
      yOffset: 0,
      yOffsetWaveMultiplier: 1.8,
      yOffsetColorMultiplier: 2,
      yOffsetFlowMultiplier: 2.2,
      flowDistortionA: 3.1,
      flowDistortionB: 2.4,
      flowScale: 1.5,
      flowEase: 0.31,
      flowEnabled: false,
      enableProceduralTexture: false,
      transparentTextureVoid: false,
      textureVoidLikelihood: 0.06,
      textureVoidWidthMin: 10,
      textureVoidWidthMax: 500,
      textureBandDensity: 0.8,
      textureColorBlending: 0.06,
      textureSeed: 333,
      textureEase: 0.8,
      proceduralBackgroundColor: "#FFED00",
      textureShapeTriangles: 20,
      textureShapeCircles: 15,
      textureShapeBars: 15,
      textureShapeSquiggles: 10,
      domainWarpEnabled: false,
      domainWarpIntensity: 0,
      domainWarpScale: 3,
      vignetteIntensity: 0,
      vignetteRadius: 0.8,
      fresnelEnabled: false,
      fresnelPower: 2,
      fresnelIntensity: 0.5,
      fresnelColor: "#FFFFFF",
      iridescenceEnabled: false,
      iridescenceIntensity: 0.5,
      iridescenceSpeed: 1,
      bloomIntensity: 0,
      bloomThreshold: 0.7,
      chromaticAberration: 0,
      shapeType: "plane",
      shapeRotationX: 0,
      shapeRotationY: 0,
      shapeRotationZ: 0,
      shapeAutoRotateSpeedX: 0,
      shapeAutoRotateSpeedY: 0,
      sphereRadius: 15,
      torusRadius: 15,
      torusTube: 5,
      cylinderRadius: 10,
      cylinderHeight: 40,
      planeBend: 0,
      planeTwist: 0,
      silhouetteFade: 0.25,
      cylinderFade: 0.08,
      ribbonFade: 0.05,
      cameraLock: true,
      cameraX: 0,
      cameraY: 0,
      cameraZ: 0,
      cameraRotationX: 0,
      cameraRotationY: 0,
      cameraRotationZ: 0,
      cameraZoom: 1,
    });

    const handleScroll = () => {
      gradient.yOffset = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      gradient.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="contact-hero-gradient"
      className="absolute inset-0 w-full h-full"
    />
  );
}
