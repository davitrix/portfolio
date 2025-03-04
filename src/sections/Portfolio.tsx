import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "react-bootstrap";

import Educasis1 from "../assets/porfolio/educasis/educasis1.png";
import Makechef1 from "../assets/porfolio/makechef/makechef1.png";
import Negobi1 from "../assets/porfolio/negobi/negobi1.png";
import Negobi2 from "../assets/porfolio/negobi/negobi2.png";
import Negobi3 from "../assets/porfolio/negobi/negobi3.png";
import Remanso1 from "../assets/porfolio/remanso/remanso1.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="mb-5">
      <h2>
        <FontAwesomeIcon icon={faBriefcase} className="me-2" />
        Portafolio
      </h2>

      <Row lg={3} md={2} xs={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={Educasis1} />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>Educasis</Card.Title>
                <Card.Text>Proyecto para la gestión de escuelas</Card.Text>
              </div>
              <figure></figure>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Negobi1} />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>Negobi</Card.Title>
                <Card.Text>Proyecto para la gestión de escuelas</Card.Text>
              </div>
              <figure></figure>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Negobi2} />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>Negobi App</Card.Title>
                <Card.Text>Proyecto para la gestión de escuelas</Card.Text>
              </div>
              <figure></figure>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Negobi3} />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>Negobi Sync</Card.Title>
                <Card.Text>Proyecto para la gestión de escuelas</Card.Text>
              </div>
              <figure></figure>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Remanso1} />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>Jardines del Remanso</Card.Title>
                <Card.Text>Proyecto para la gestión de escuelas</Card.Text>
              </div>
              <figure></figure>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Makechef1} />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>Makechef</Card.Title>
                <Card.Text>Proyecto para la gestión de escuelas</Card.Text>
              </div>
              <figure></figure>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Portfolio;
