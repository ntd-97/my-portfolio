import { useContext } from "react";

import { Col, Container, Row } from "react-bootstrap";

import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import { ThemeContext } from "../../App";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container fluid className="footer">
      <Container>
        <Row className="pt-5 pb-5 d-flex flex-wrap-reverse flex-md-nowrap justify-content-between">
          <Col
            xs={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center justify-content-md-start footer__copy-right"
          >
            <p>
              Make by <strong>me</strong>.
            </p>
          </Col>
          <Col
            xs={12}
            md={4}
            lg={3}
            className={`d-flex justify-content-center justify-content-md-end footer__button-group ${theme}`}
          >
            <a
              href="https://github.com/ntd-97"
              target="_blank"
              rel="noreferrer"
              className="me-4"
            >
              <BsGithub />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/tandat.nguyen.1042032"
            >
              <BsFacebook />
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
