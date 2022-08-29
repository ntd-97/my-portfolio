import { Col, Container, Row } from "react-bootstrap";

import { AiFillGithub } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const ProjectItemDetails = ({ project }) => {
  return (
    <Container className="common__card project-item-details p-4 d-flex flex-wrap flex-md-nowrap">
      <Row>
        <Col lg={5} xl={4} className="d-flex align-items-center">
          <img
            src={project.img}
            className=" project-item-details__img mb-5 mb-lg-0"
            alt=""
          ></img>
        </Col>

        <Col lg={7} xl={8} className="px-0 px-lg-1">
          <Container className="project-item-details__details d-flex flex-column justify-content-center">
            <h3 className="project__heading mb-4">{project.title}</h3>

            <Container className="project__specs px-0 pe-lg-5">
              <p>Technical: {project.technicals.join(", ")}</p>
              <p>Role: {project.roles}</p>
              <p>Details: {project.details}</p>
            </Container>

            <Container
              style={{ display: `${project.git ? "" : "none"}` }}
              className="project-item-details__btnGroup p-0 mt-3 mt-lg-4"
            >
              <a
                href={project.git}
                className="common__btn project-item-details__gitBtn"
              >
                <AiFillGithub className="project-item-details__gitIcon" />
                Git
              </a>
              <a
                href={project.demo}
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
