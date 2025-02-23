import { Card, CardBody } from "react-bootstrap";

const Education = () => {
  return (
    <section id="education">
      <h2>Educación y Certificaciones</h2>
      <Card>
        <CardBody>
          <Card.Title as="h5">
            Universidad Nacional Experimental Politecnica de la Fuerza Armada
          </Card.Title>
          <Card.Subtitle as="h6" className="mb-2 text-muted">
            Ingenieria de Sistemas
          </Card.Subtitle>
          <Card.Text className="text-secondary">
            <small>Enero, 2017 - Junio, 2022</small>
            <br />
            <small>Ultimo semestre: 7° Semestre</small>
          </Card.Text>
          <hr />
          <div className="d-flex flex-column gap-4">
            <div>
              <Card.Title as="h5">Platzi</Card.Title>
              <Card.Subtitle as="h6">Curso de PHP con Composer</Card.Subtitle>
            </div>
            <div>
              <Card.Title as="h5">Platzi</Card.Title>
              <Card.Subtitle as="h6">Curso de TypeScript</Card.Subtitle>
            </div>
            <div>
              <Card.Title as="h5">Platzi</Card.Title>
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
