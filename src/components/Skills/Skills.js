import { Col, Container, Row } from "react-bootstrap";
import htmlIcon from "../../assets/images/html.png";
import cssIcon from "../../assets/images/css.png";
import jsIcon from "../../assets/images/js.png";
import reactjsIcon from "../../assets/images/reactjs.png";
import reduxIcon from "../../assets/images/redux.png";
import reactBootstrapIcon from "../../assets/images/react-bootstrap.png";
import tailwindIcon from "../../assets/images/tailwind.png";
import nodejsIcon from "../../assets/images/nodejs.png";
import expressjsIcon from "../../assets/images/expressjs.png";
import mongoIcon from "../../assets/images/mongo.png";
import sapIcon from "../../assets/images/sap.png";
import sapui5Icon from "../../assets/images/sapui5.png";
import vbIcon from "../../assets/images/vb.png";

const skillIcons = [
  { icon: htmlIcon, name: "HTML" },
  { icon: cssIcon, name: "CSS" },
  { icon: jsIcon, name: "Javascript" },
  { icon: reactjsIcon, name: "ReactJS" },
  { icon: reduxIcon, name: "Redux" },
  { icon: reactBootstrapIcon, name: "React Bootstrap" },
  { icon: tailwindIcon, name: "Tailwind CSS" },
  { icon: nodejsIcon, name: "NodeJS" },
  { icon: expressjsIcon, name: "ExpressJS" },
  { icon: mongoIcon, name: "MongoDB" },
  { icon: sapIcon, name: "SAP Cloud Platform" },
  { icon: sapui5Icon, name: "SAP UI5" },
  { icon: vbIcon, name: "Visual basic" },
];

const Skills = () => {
  return (
    <Container id="skills" className="skills">
      <h2 className="common__heading">Skills</h2>
      <Container>
        <Row xs={2} md={3} lg={6} className="d-flex justify-content-center">
          {skillIcons.map((skill) => {
            return (
              <Col className="mb-4">
                <Container className="common__card skills__item d-flex flex-column justify-content-between align-items-center">
                  <img src={skill.icon} fluid alt="Skill img" />
                  <p className="mb-0 mt-4">{skill.name}</p>
                </Container>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};
export default Skills;
