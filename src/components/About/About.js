import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container id="about" className="about">
      <h2 className="common__heading">About Me</h2>
      <Container>
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <Container className="p-5 common__card">
              <h3>Something about me</h3>
              <p>
                Lorem do consectetur occaecat pariatur nostrud.Lorem do
                consectetur occaecat pariatur nostrud.Lorem do consectetur
                occaecat pariatur nostrud.Lorem do consectetur occaecat pariatur
                nostrud.Lorem do consectetur occaecat pariatur nostrud.Lorem do
                consectetur occaecat pariatur nostrud.Lorem do consectetur
                occaecat pariatur nostrud.Lorem do consectetur occaecat pariatur
                nostrud
              </p>
            </Container>
          </Col>
          <Col lg={6}>
            <Container className="p-5 common__card">
              <h3>Education</h3>
              <div>
                <p className="about__year">2015 - 2019</p>
                <p>Information technology - Can Tho University (GPA: 3.35/4)</p>
              </div>
              <h3>Work Experiences</h3>
              <div>
                <p className="about__year">2020 - 2022</p>
                <p>Invidual Systems Company</p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
