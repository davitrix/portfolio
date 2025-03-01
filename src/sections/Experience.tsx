// import styles from "../assets/css/luminousScroll.module.css";

import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Card } from "react-bootstrap";

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
            width={80}
          />
          <div>
            <Card.Title as="h3">{props.company}</Card.Title>
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
          company="U.E.P Nuestra Señora de Agua Santa III"
          position="Desarrollador Web"
          startDate="Abril, 2019"
          endDate="Septiembre, 2022"
          logo="src/assets/images/logo-ag.jpg"
        >
          Como desarrollador en esta institución, implementé un sistema web ERP
          utilizando Laravel, diseñado para la gestión escolar. Este sistema
          cuenta con múltiples funcionalidades, incluyendo un algoritmo para la
          generación automática de horarios, exportación de diversos tipos de
          reportes y capacidad para la administración de múltiples
          instituciones. A través del sitio web educasis.net, se pueden
          gestionar estudiantes, calificaciones, docentes, representantes,
          asistencias, pagos, generar carnets, etc. Actualmente, el sistema está
          activo y recibe una buena cantidad de visitas mensuales.
          <hr />
          <div className="d-flex flex-wrap gap-2">
            <Badge bg="secondary">Laravel</Badge>
            <Badge bg="secondary">PHP</Badge>
            <Badge bg="secondary">MySQL</Badge>
            <Badge bg="secondary">JavaScript</Badge>
            <Badge bg="secondary">HTML</Badge>
            <Badge bg="secondary">CSS</Badge>
          </div>
        </ExperienceCard>

        <ExperienceCard
          company="Buisuch Technology C.A"
          position="Desarrollador Full Stack"
          startDate="Enero, 2022"
          endDate="Presente"
          logo="src/assets/images/logo-bt.jpg"
        >
          En esta empresa lidere el desarrollo de la plataforma NEGOBI con la
          ayuda de un gran equipo, consta de tres aplicaciones. La primera es un
          sincronizador de datos hecho con Electron.js (framework de JavaScript
          para aplicaciones de escritorio), el cual se conecta a la segunda
          aplicación a través de una API y un WEBSOCKET, negobi.com, un servicio
          web desarrollado con Laravel, este servicio se encarga de mostrar
          información de manera gráfica y también de proporcionar una API para
          la tercera aplicación, que está hecha con Flutter y se encarga de la
          toma de pedidos por parte de los vendedores, negobi es una plataforma
          cuyo objetivo es sincronizar datos de algunos antiguos ERP, como es el
          caso de SAINT, que no cuentan con servicios web. Aquí es donde brilla
          NEGOBI, ofreciendo una solución para extender las funcionalidades de
          estos sistemas y sacarlas del ámbito local. Actualmente esta
          plataforma cuenta con clientes en Venezuela y República Dominicana.
          <hr />
          <div className="d-flex flex-wrap gap-2">
            <Badge bg="secondary">Laravel</Badge>
            <Badge bg="secondary">PHP</Badge>
            <Badge bg="secondary">MySQL</Badge>
            <Badge bg="secondary">JavaScript</Badge>
            <Badge bg="secondary">HTML</Badge>
            <Badge bg="secondary">CSS</Badge>
          </div>
        </ExperienceCard>
      </div>
    </section>
  );
};

export default Experiences;
