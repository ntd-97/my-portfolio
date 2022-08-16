import { Col, Container, Row } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container>
        <Row className="pt-5 pb-5 d-flex flex-wrap-reverse flex-md-nowrap justify-content-between">
          <Col
            xs={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center justify-content-md-start footer_copyRight"
          >
            <p>
              Make by <strong>Me</strong> - Copy rigth 2022.
            </p>
          </Col>
          <Col
            xs={12}
            md={4}
            lg={3}
            className="d-flex justify-content-center justify-content-md-end footer_buttonGroup"
          >
            <a href="git" className="me-4">
              <BsGithub />
            </a>
            <a href="face">
              <BsFacebook />
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
