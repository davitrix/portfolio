import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import davidImg from "../assets/images/david.webp";

const Home = () => {
  return (
    <section id="home" className="d-flex align-items-center my-5">
      <div className="d-flex justify-content-between align-items-center gap-5">
        <div>
          <h1 className="display-4">Hola, Soy David Alvarado</h1>
          <h3>Full Stack Developer | PHP | TypeScript | Dart</h3>
          <p>
            Soy un desarrollador profesional con más de seis años de experiencia
            en Laravel (PHP), un año en Flutter (Dart) y tres años en Electron
            (TypeScript). Me destaco por mi carácter investigativo, dinámico y
            mi compromiso con el aprendizaje continuo. Mi objetivo es contribuir
            al desarrollo de proyectos tecnológicos innovadores, resolviendo
            problemas complejos y generando valor para la organización.
          </p>
          <hr />
          <div className="d-flex gap-2 align-items-center">
            <a
              href="/cv-david-alvarado.pdf"
              target="_blank"
              className="btn btn-primary rounded-pill"
            >
              <FontAwesomeIcon icon={faFileLines} /> Descargar CV
            </a>
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
          src={davidImg}
          height={450}
          alt="David Alvarado"
          className="d-none d-lg-inline"
        />
      </div>
    </section>
  );
};

export default Home;
