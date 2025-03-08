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
                <Card.Text>
                  Proyecto para la gestión de colegios en Venezuela, con
                  tecnologías como laravel, Livewire, Alpine.js, Bootstrap y
                  MySQL
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Negobi1} />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>Negobi</Card.Title>
                <Card.Text>
                  Proyecto para la Gestión y visualización de datos de antiguos
                  ERP y que extiende sus funcionalidades a través de una API y
                  un WEBSOCKET con tecnologías como Laravel, Livewire,
                  Alpine.js, Bootstrap, Reverb y MySQL
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Negobi2} />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>Negobi App</Card.Title>
                <Card.Text>
                  Proyecto para la toma de pedidos de parte de los vendedores
                  registrados en el ERP local, conectada a Negobi Web a través
                  de una API, permitiendo la visualización de datos y la
                  sincronización de los mismos con Negobi Sync usando flutter y
                  SqLite
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Negobi3} />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>Negobi Sync</Card.Title>
                <Card.Text>
                  Proyecto para la extracción y sincronización de datos de
                  sistemas ERP locales con Negobi Web usando Electron con
                  TypeScript y SqlServer
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Remanso1} />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>Jardines del Remanso</Card.Title>
                <Card.Text>
                  Landing page para ofrecer servicios funerarios en Venezuela
                  con tecnologías como WordPress, Elementor y MySQL
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Makechef1} />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>Makechef</Card.Title>
                <Card.Text>
                  Proyecto para la toma de ordenes en restaurantes conectado a
                  la plataforma SAINT con tecnologías como Laravel, Livewire,
                  Alpine.js, Bootstrap y MySQL
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Portfolio;
