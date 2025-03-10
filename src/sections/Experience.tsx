// import styles from "../assets/css/luminousScroll.module.css";

import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Card } from "react-bootstrap";

import logoAg from "../assets/images/logo-ag.jpg";
import logoBt from "../assets/images/logo-bt.jpg";

interface ExperienceCardProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  logo: string;
  children: React.ReactNode;
}

const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center gap-3 mb-3">
          <img
            className="rounded rounded-circle img-fluid"
            src={props.logo}
            style={{ maxWidth: "70px", width: "100%" }} // responsive
          />
          <div>
            <Card.Title as="h5">{props.company}</Card.Title>
            <Card.Subtitle as="h6" className="mb-2 text-muted">
              {props.position}
            </Card.Subtitle>
            <Card.Text className="text-secondary small">
              {props.startDate} - {props.endDate}
            </Card.Text>
          </div>
        </div>
        <Card.Text>{props.children}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const Experiences = () => {
  return (
    <section id="experiences" className="mb-5">
      <h2>
        <FontAwesomeIcon icon={faRankingStar} className="me-2" />
        Experiencia
      </h2>
      <div className="d-flex flex-column gap-4">
        <ExperienceCard
          company="Buisuch Technology C.A"
          position="Desarrollador Full Stack"
          startDate="Enero, 2022"
          endDate="Presente"
          logo={logoBt}
        >
          En esta empresa lidere el desarrollo de la plataforma{" "}
          <a href="https://www.negobi.com">www.negobi.com</a>, la cual se
          compone de tres aplicaciones:
          <ul>
            <li>
              <strong>Negobi Web:</strong> Plataforma web de gestión de datos y
              visualización de información proveniente de sistemas ERP locales
              (como SAINT) y de la aplicación móvil, proporcionando una API y un
              WEBSOCKET para la sincronización de datos.
            </li>
            <li>
              <strong>Negobi Sync:</strong> Aplicación de escritorio para la
              extracción de datos de sistemas ERP locales y sincronización de
              los mismos con Negobi Web.
            </li>
            <li>
              <strong>Negobi App:</strong> Aplicación móvil para la toma de
              pedidos de parte de los vendedores registrados en el ERP local,
              conectada a Negobi Web a través de una API, permitiendo la
              sincronización de datos en tiempo real y abriendo la posibilidad
              de modernizar los procesos de ventas de las empresas.
            </li>
          </ul>
          <hr />
          Otros proyectos en los que he participado en esta empresa incluyen
          desarrollo de landing pages con WordPress, desarrollo de aplicaciones
          de escritorio con Electron y soporte técnico a clientes.
          <hr />
          <div className="d-flex flex-wrap gap-2">
            <Badge bg="secondary">Laravel</Badge>
            <Badge bg="secondary">Livewire</Badge>
            <Badge bg="secondary">MySQL</Badge>
            <Badge bg="secondary">TypeScript</Badge>
            <Badge bg="secondary">React</Badge>
            <Badge bg="secondary">Electron</Badge>
            <Badge bg="secondary">SqlServer</Badge>
            <Badge bg="secondary">Flutter</Badge>
            <Badge bg="secondary">SqLite</Badge>
            <Badge bg="secondary">WordPress</Badge>
          </div>
        </ExperienceCard>

        <ExperienceCard
          company="U.E.P Nuestra Señora de Agua Santa III"
          position="Desarrollador Web"
          startDate="Abril, 2019"
          endDate="Septiembre, 2022"
          logo={logoAg}
        >
          Como desarrollador en esta institución educativa, implementé un
          sistema web ERP utilizando Laravel y Livewire, diseñado para la
          gestión escolar. Este sistema cuenta con múltiples funcionalidades
          como:
          <ul>
            <li>Algoritmo de generación automática de horarios escolares.</li>
            <li>Exportación de diversos tipos de reportes en Excel y Pdf.</li>
            <li>Registro y control de asistencia de los estudiantes.</li>
            <li>Registro y control de calificaciones.</li>
            <li>Registro y control de pagos.</li>
            <li>Registro y control de personal docente y administrativo.</li>
            <li>Envío de notificaciones a través de correo electrónico.</li>
            <li>
              Capacidad para la administración de múltiples instituciones.
            </li>
          </ul>
          <hr />
          Actualmente este servicio se ofrece a través del sitio web{" "}
          <a href="https://www.educasis.net">www.educasis.net</a> disponible
          para otras instituciones educativas en Venezuela.
          <hr />
          <div className="d-flex flex-wrap gap-2">
            <Badge bg="secondary">Laravel</Badge>
            <Badge bg="secondary">Livewire</Badge>
            <Badge bg="secondary">MySQL</Badge>
            <Badge bg="secondary">JavaScript</Badge>
            <Badge bg="secondary">SCSS</Badge>
          </div>
        </ExperienceCard>
      </div>
    </section>
  );
};

export default Experiences;
