import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardTitle, Col, Row } from "react-bootstrap";

interface SkillsProps {
  theme: themeType;
}

const Skills = ({ theme }: SkillsProps) => {
  return (
    <section id="skills" className="mb-5">
      <h2>
        <FontAwesomeIcon icon={faScrewdriverWrench} className="me-2" />
        Habilidades
      </h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Lenguajes</CardTitle>
              <img
                src={`https://skillicons.dev/icons?i=html,css,js,ts,php,dart&perline=3&theme=${theme}`}
              />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Frameworks y Librerías</CardTitle>
              <img
                src={`https://skillicons.dev/icons?i=flutter,electron,laravel,react,vue&perline=3&theme=${theme}`}
              />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Herramientas</CardTitle>
              <img
                src={`https://skillicons.dev/icons?i=windows,git,github,cloudflare,androidstudio,vscode,powershell,postman,nodejs&perline=5&theme=${theme}`}
              />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Bases de Datos</CardTitle>
              <img
                src={`https://skillicons.dev/icons?i=mysql,sqlite,postgres,redis&perline=3&theme=${theme}`}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Skills;
