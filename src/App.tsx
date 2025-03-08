import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BackgroundParticles from "./components/BackgroundParticles";
import NavbarSticky from "./components/NavbarSticky";
import detectSystemTheme from "./core/utils/detectSystemTheme";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experiences from "./sections/Experience";
import Home from "./sections/Home";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";

import davidImg from "./assets/images/david.webp";

function App() {
  const [theme, setTheme] = useState<themeType>(detectSystemTheme());

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <>
      <NavbarSticky theme={theme} setTheme={setTheme} />

      <Container>
        <Home />
        <Skills theme={theme} />
        <Experiences />
        <Portfolio />
        <Education />
        <Contact />

        <div className="d-flex justify-content-center align-items-center d-lg-none">
          <img src={davidImg} height={400} alt="David Alvarado" />
        </div>
      </Container>

      <footer className="bg-body-tertiary text-center py-3 mt-4">
        <p>Desarrollado con React y Bootstrap</p>
        <p>© 2025 David A. Alvarado C</p>
      </footer>

      {/* Componente de partículas de fondo */}
      <BackgroundParticles theme={theme} />
    </>
  );
}

export default App;
