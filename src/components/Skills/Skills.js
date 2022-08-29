import { motion } from "framer-motion";

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
import kintoneIcon from "../../assets/images/kintone.png";
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
  { icon: kintoneIcon, name: "Kintone" },
  { icon: sapui5Icon, name: "SAP UI5" },
  { icon: vbIcon, name: "Visual basic" },
];

const Skills = () => {
  const rowVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const colVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const MotionCol = motion(Col);
  const MotionRow = motion(Row);

  return (
    <Container id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7 }}
        className="common__heading"
      >
        Kỹ năng
      </motion.h2>

      <Container>
        <MotionRow
          variants={rowVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          xs={3}
          md={4}
          lg={6}
          className="d-flex justify-content-center"
        >
          {skillIcons.map((skill) => {
            return (
              <MotionCol
                variants={colVariants}
                key={skill.name}
                className="mb-4"
              >
                <Container className="common__card skills__item d-flex flex-column justify-content-between align-items-center">
                  <img src={skill.icon} alt="Skill img" />
                  <p className="mb-0 mt-4">{skill.name}</p>
                </Container>
              </MotionCol>
            );
          })}
        </MotionRow>
      </Container>
    </Container>
  );
};
export default Skills;
