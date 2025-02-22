import { Card, CardBody, CardTitle, Col, Row } from "react-bootstrap";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experiencia</h2>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Desarrollador Full Stack</CardTitle>
              <p>Freelancer</p>
              <p>2015 - Actualidad</p>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Desarrollador Web</CardTitle>
              <p>Empresa X</p>
              <p>2013 - 2015</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Experience;
