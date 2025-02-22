import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BackgroundParticles from "./components/BackgroundParticles";
import NavbarStiky from "./components/NavbarStiky";
import detectSystemTheme from "./core/utils/detectSystemTheme";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Skills from "./sections/Skills";

function App() {
  const [theme, setTheme] = useState<themeType>(detectSystemTheme());

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <>
      <NavbarStiky theme={theme} setTheme={setTheme} />

      <Container>
        <Home />
        <Skills theme={theme} />
        <Experience />
      </Container>

      <footer className="bg-body-tertiary text-center py-3 mt-4">
        <p>Desarrollado con React y Bootstrap</p>
        <p>© 2021 David A. Alvarado C</p>
      </footer>

      {/* Componente de partículas de fondo */}
      <BackgroundParticles theme={theme} />
    </>
  );
}

export default App;
