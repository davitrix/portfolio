import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <section id="home" className="d-flex align-items-center my-5">
      <div className="d-flex justify-content-between align-items-center gap-5">
        <div>
          <h1 className="display-4">Hola, Soy David Alvarado</h1>
          <h3>Desarrollador Full Stack</h3>
          <p>
            Creativo y emprendedor con más de seis años de experiencia,
            especializado en Laravel, siempre a la vanguardia de las últimas
            tecnologías, lo que me ha permitido construir sistemas web robustos
            utilizando PHP y JavaScript. Además, tengo experiencia en Dart
            (Flutter) para el desarrollo de aplicaciones móviles. Mi pasión por
            la innovación y mi enfoque proactivo me impulsan a aprender
            continuamente y a superar nuevos desafíos.
          </p>
          <hr />
          <div className="d-flex gap-2 align-items-center">
            <Button variant="primary" className="rounded-pill">
              <FontAwesomeIcon icon={faFileLines} /> Descargar CV
            </Button>
            <a
              href="https://www.linkedin.com/in/davidalvarado711"
              target="_blank"
              className="text-reset"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />
            </a>
            <a
              href="https://github.com/davitrix"
              target="_blank"
              className="text-reset"
            >
              <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
            </a>
          </div>
        </div>
        <img
          src="src/assets/images/david.png"
          height={450}
          alt="David Alvarado"
          className="d-none d-md-inline"
        />
      </div>
    </section>
  );
};

export default Home;
