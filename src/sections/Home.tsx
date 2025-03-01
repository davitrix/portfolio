import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{ height: "500px" }}
    >
      <div>
        <h1 className="display-4">Hola, Soy David Alvarado</h1>
        <h3>Desarrollador Full Stack</h3>
        <p>
          Creativo y emprendedor con más de seis años de experiencia,
          especializado en Laravel, siempre a la vanguardia de las últimas
          tecnologías, lo que me ha permitido construir sistemas web robustos
          utilizando PHP y JavaScript. Además, tengo experiencia en Dart
          (Flutter) para el desarrollo de aplicaciones móviles. Mi pasión por la
          innovación y mi enfoque proactivo me impulsan a aprender continuamente
          y a superar nuevos desafíos.
        </p>
        <hr />
        <Button variant="primary" className="rounded-pill">
          <FontAwesomeIcon icon={faFileLines} /> Descargar CV
        </Button>
      </div>
    </section>
  );
};

export default Home;
