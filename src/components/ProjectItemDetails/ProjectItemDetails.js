import { useContext } from "react";

import { Col, Container, Row } from "react-bootstrap";

import { AiFillGithub } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

import { ThemeContext } from "../../App";

import { LanguageContext } from "../../App";

import { useTranslation } from "react-i18next";

const ProjectItemDetails = ({ project }) => {
  const { theme } = useContext(ThemeContext);

  const { language } = useContext(LanguageContext);

  const { t } = useTranslation();

  return (
    <Container
      className={`common__card project-item-details ${theme} p-4 d-flex flex-wrap flex-md-nowrap`}
    >
      <Row>
        <Col lg={5} xl={4} className="d-flex align-items-center">
          <img
            src={project.img}
            className=" project-item-details__img mb-5 mb-lg-0"
            alt=""
          ></img>
        </Col>

        <Col lg={7} xl={8} className="px-0 px-lg-1">
          <Container className="project-item-details__details d-flex flex-column justify-content-start">
            <h3 className="project__heading mb-4">{project.title}</h3>

            <Container className="project__specs px-0 pe-lg-5">
              <p>
                <strong>{t("projectSpec.technical")}</strong>
                {project.technicals.join(", ")}
              </p>
              <p>
                <strong>{t("projectSpec.role")}</strong> {project.roles}
              </p>
              <span>
                <strong>{t("projectSpec.details")}</strong>
              </span>
              <p>{language === "en" ? project.details_en : project.details}</p>
            </Container>

            <Container
              style={{ display: `${project.git ? "" : "none"}` }}
              className="project-item-details__btnGroup p-0 mt-3 mt-lg-4"
            >
              <a
                href={project.git}
                target="_blank"
                rel="noreferrer"
                className="common__btn project-item-details__gitBtn"
              >
                <AiFillGithub className="project-item-details__gitIcon" />
                Git
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="project-item-details__demoBtn d-flex align-items-center justify-content-end"
              >
                <BsArrowRight />
              </a>
            </Container>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectItemDetails;
