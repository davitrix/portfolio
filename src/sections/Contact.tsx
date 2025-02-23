import { Card, CardBody } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="mt-4">
      <h2>Contacto</h2>
      <Card>
        <CardBody>
          <div>
            <h5>Correo Electrónico</h5>
            <a href="mailto:davicii711@gmail.com">davicii711@gmail.com</a>
          </div>
          <hr />
          <div>
            <h5>Telefono</h5>
            <a href="tel:+584241807220">+58 424 1807220</a>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default Contact;
