import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";

export interface BackgroundParticlesProps {
  theme: themeType;
}

export default function BackgroundParticles({
  theme,
}: BackgroundParticlesProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Definir variables según el tema
  const particleColor = theme === "dark" ? "#ffffff" : "#000000";
  const strokeColor = theme === "dark" ? "#000000" : "#ffffff";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      {init && (
        <Particles
          id="tsparticles"
          options={{
            particles: {
              number: {
                value: 120,
                density: {
                  enable: true,
                  width: 1000,
                  height: 800,
                },
              },
              color: {
                value: particleColor,
              },
              shape: {
                type: "circle",
                options: {
                  polygon: {
                    nb_sides: 5,
                  },
                  stroke: {
                    width: 0,
                    color: strokeColor,
                  },
                },
              },
              opacity: {
                value: 0.5,
                animation: {
                  enable: true,
                  speed: 1,
                  mode: "decrease",
                  sync: false,
                },
              },
              size: {
                value: 2,
                animation: {
                  enable: true,
                  speed: 2,
                  mode: "random",
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: particleColor,
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                warp: true,
                outModes: "out",
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 600,
                  },
                },
              },
            },
            retina_detect: true,
          }}
        />
      )}
    </div>
  );
}
