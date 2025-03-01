import { Container, Nav, Navbar } from "react-bootstrap";
import SwitchTheme from "./SwitchTheme";

interface NavbarStickyProps {
  theme: themeType;
  setTheme: React.Dispatch<React.SetStateAction<themeType>>;
}

const NavbarSticky = ({ theme, setTheme }: NavbarStickyProps) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="src/assets/images/about_me.gif"
            width={30}
            className="d-inline-block align-top"
          />{" "}
          David A. Alvarado C
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#portfolio">Portafolio</Nav.Link>
            <Nav.Link href="#skills">Habilidades</Nav.Link>
            <Nav.Link href="#experience">Experiencia</Nav.Link>
            <Nav.Link href="#education">Educación</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link href="#aboutMe">Sobre mi</Nav.Link>
          </Nav>
          <Nav>
            <SwitchTheme themeHandler={theme} setThemeHandler={setTheme} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSticky;
