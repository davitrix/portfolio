import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody } from "react-bootstrap";

const Education = () => {
  return (
    <section id="education" className="mb-5">
      <h2>
        <FontAwesomeIcon icon={faAward} className="me-2" />
        Educación y Certificaciones
      </h2>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center gap-3">
            <img
              src="src/assets/images/logo-unefa.jpg"
              className="rounded-circle"
              width={80}
            />
            <div>
              <Card.Title as="h5">
                Universidad Nacional Experimental Politécnica de la Fuerza
                Armada
              </Card.Title>
              <Card.Subtitle as="h6" className="mb-2 text-muted">
                Ingeniería de Sistemas
              </Card.Subtitle>
              <Card.Text className="text-secondary">
                <small>Enero, 2017 - Junio, 2022</small>
                <br />
                <small>Ultimo semestre: 7° Semestre</small>
              </Card.Text>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-column gap-4">
            <div>
              <figure>
                <img
                  src="src/assets/images/platzi.png"
                  width={60}
                  alt="platzi"
                />
              </figure>
              <Card.Subtitle as="h6">Curso de PHP con Composer</Card.Subtitle>
            </div>
            <div>
              <figure>
                <img
                  src="src/assets/images/platzi.png"
                  width={60}
                  alt="platzi"
                />
              </figure>
              <Card.Subtitle as="h6">Curso de TypeScript</Card.Subtitle>
            </div>
            <div>
              <figure>
                <img
                  src="src/assets/images/platzi.png"
                  width={60}
                  alt="platzi"
                />
              </figure>
              <Card.Subtitle as="h6">
                Curso de TypeScript: Tipos Avanzados y Funciones
              </Card.Subtitle>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default Education;
