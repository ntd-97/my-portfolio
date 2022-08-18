import { Col, Container, Row } from "react-bootstrap";
import ProjectItem from "../ProjectItem/ProjectItem";
import Slider from "react-slick";

const ProjectsList = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

        <Row>
          <Slider {...sliderSettings}>
            <Col md={6} lg={12} className="px-2">
              <ProjectItem></ProjectItem>
            </Col>
            <Col md={6} lg={12} className="px-2">
              <ProjectItem></ProjectItem>
            </Col>
            <Col md={6} lg={12} className="px-2">
              <ProjectItem></ProjectItem>
            </Col>
          </Slider>
        </Row>
      </Container>
    </Container>
  );
};

export default ProjectsList;
