import {
  faAddressBook,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="mb-5">
      <h2>
        <FontAwesomeIcon icon={faAddressBook} className="me-2" />
        Contacto
      </h2>
      <Card>
        <CardBody>
          <div>
            <h5>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Correo Electrónico
            </h5>
            <a href="mailto:davicii711@gmail.com">davicii711@gmail.com</a>
          </div>
          <hr />
          <div>
            <h5>
              <FontAwesomeIcon icon={faMobile} className="me-2" />
              Teléfono
            </h5>
            <a href="tel:+584241807220">+58 424 1807220</a>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default Contact;
