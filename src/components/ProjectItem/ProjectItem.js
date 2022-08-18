// import { Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import DemoImg from "../../assets/images/demo_img_project.png";

const ProjectItem = () => {
  return (
    <Container className="common__card projectItem p-4 d-flex flex-wrap flex-md-nowrap">
      <Row>
        <Col lg={5} xl={4}>
          <img
            src={DemoImg}
            className=" projectItem__img mb-5 mb-lg-0"
            alt=""
          ></img>
        </Col>
        <Col lg={7} xl={8}>
          <Container className="projectItem__details p-0 p-lg-4 d-flex flex-column justify-content-between">
            <h3 className="project__heading">Sale Order Systems</h3>
            <Container className="project__specs p-0">
              <p>
                Technical: <span>VB6, VB.Net, SVN, Postgresql</span>
              </p>
              <p>
                Role: <span>Tester</span>
              </p>
              <p>
                Details: The CSS justify-content property defines how the
                browser distributes space between and around content items along
                the main-axis of a flex container, and the inline axis of a grid
                container
              </p>
            </Container>
            <Container className="projectItem__btnGroup p-0 mt-3 mt-xl-0">
              <a href="#git" className="projectItem__gitBtn">
                <AiFillGithub className="projectItem__gitIcon" />
                Git
              </a>
              <a href="#demo" className="projectItem__demoBtn">
                <BsArrowRight />
              </a>
            </Container>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectItem;
