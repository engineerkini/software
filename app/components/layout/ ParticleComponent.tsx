'use client'
import { JSX, useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";


const particleOptions: ISourceOptions = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: {
        enable: true,
        delay: 0.5
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#3f3f0999",
    },
    links: {
      color: "#000",
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1.2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        // area: 800,
      },
      value: 160,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export default function ParticleComponent(): JSX.Element {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    const initializeParticles = async () => {
      try {
        await initParticlesEngine(async (engine: Engine) => {
          await loadFull(engine);
        });
        setInit(true);
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    };

    initializeParticles();
  }, []);

  const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    // Handle particles loaded event if needed
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 0,
          }}
          options={particleOptions}
        />
      )}
    </>
  );
}