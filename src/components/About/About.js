import { Col, Container, Row } from "react-bootstrap";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

const About = () => {
  const MotionContainer = motion(Container);

  let boxVariants = {};

  const { t } = useTranslation();

  // change variant according to screen width
  if (window.innerWidth < 1200) {
    boxVariants = {
      hideLeft: { opacity: 0, y: 20 },
      hideRight: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    };
  } else {
    boxVariants = {
      hideLeft: { opacity: 0, x: -20 },
      hideRight: { opacity: 0, x: 20 },
      show: { opacity: 1, x: 0 },
    };
  }

  return (
    <Container id="about" className={`about`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7 }}
        className="common__heading"
      >
        {t("about.heading")}
      </motion.h2>

      <Container>
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <MotionContainer
              variants={boxVariants}
              initial="hideLeft"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7 }}
              className="p-5 common__card"
            >
              <h3>{t("about.specHeading")}</h3>
              <p className="about__description">{t("about.spec")}</p>
            </MotionContainer>
          </Col>

          <Col lg={6}>
            <MotionContainer
              variants={boxVariants}
              initial="hideRight"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7 }}
              className="p-5 common__card"
            >
              <h3>{t("about.education")}</h3>
              <div>
                <p className="about__year">2015 - 2019</p>
                <p>
                  {t("about.major")} - {t("about.university")}{" "}
                </p>
                <p>GPA: 3.35/4</p>
              </div>
              <h3>{t("about.experiences")}</h3>
              <div>
                <p className="about__year">2020 - 2022</p>
                <p>{t("about.company1")}</p>
              </div>
            </MotionContainer>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
