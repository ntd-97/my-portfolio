import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <Container id="contact" className="contact">
      <h2 className="common__heading">Contact Me</h2>
      <Container>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            lg={{ span: 6, offset: 3 }}
            className="d-flex flex-column align-items-center"
          >
            <p className="contact__spec">
              If you are looking to hire a product designer, I’m currently
              available for freelance work
            </p>
            <button className="contact__mailBtn pt-4 pb-4 pe-4 mt-5">
              <AiOutlineMail className="contact__mailIcon" />
              Send mail
            </button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
