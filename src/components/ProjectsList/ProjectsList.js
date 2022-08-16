import { Col, Container, Row } from "react-bootstrap";
import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectsList = () => {
  return (
    <Container id="experiences" className="projects">
      <h2 className="common__heading">Experiences</h2>
      <Container>
        <Row className="pb-4">
          <Col xs={3} md={2} lg={1}>
            <h3 className="projects__year">2019</h3>
          </Col>
          <Col xs={9} md={10} lg={11} className="d-flex align-items-center ">
            <div className="projects__breakLine"></div>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={1}>
          <Col>
            <ProjectItem></ProjectItem>
          </Col>
          <Col>
            <ProjectItem></ProjectItem>
          </Col>
          <Col>
            <ProjectItem></ProjectItem>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProjectsList;
