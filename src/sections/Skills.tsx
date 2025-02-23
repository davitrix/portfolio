import { Card, CardBody, CardTitle, Col, Row } from "react-bootstrap";

interface SkillsProps {
  theme: themeType;
}

const Skills = ({ theme }: SkillsProps) => {
  return (
    <section id="skills">
      <h2>Habilidades</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Frontend</CardTitle>
              <img
                src={`https://skillicons.dev/icons?i=html,css,ts,react,vue&perline=3&theme=${theme}`}
              />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Backend</CardTitle>
              <img
                src={`https://skillicons.dev/icons?i=dart,nodejs,php,flutter,electron,laravel&perline=3&theme=${theme}`}
              />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Herramientas</CardTitle>
              <img
                src={`https://skillicons.dev/icons?i=windows,git,github,cloudflare,androidstudio,vscode,powershell,postman&perline=5&theme=${theme}`}
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
