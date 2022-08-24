import { Col, Container, Row, Toast } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { Form } from "react-bootstrap";
import contactImg from "../../assets/images/contact.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const [showSendMailMsg, setShowSendMailMsg] = useState(false);
  const [mailMsg, setMailMsg] = useState("");

  const form = useRef();

  const sendMail = (event) => {
    const mailData = {
      name: form.current.elements.name.value,
      email: form.current.elements.email.value,
      messages: form.current.elements.messages.value,
    };
    event.preventDefault();

    emailjs
      .send(
        "service_1v19kei",
        "template_9962fmk",
        mailData,
        "ZxWiwkRm2LbymPPKV"
      )
      .then(
        (response) => {
          form.current.elements.name.value = "";
          form.current.elements.email.value = "";
          form.current.elements.messages.value = "";
          setMailMsg("Email sent successfully!");
          setShowSendMailMsg(true);
        },
        (err) => {
          setMailMsg("Email sending failed!");
          setShowSendMailMsg(true);
        }
      );
  };

  return (
    <Container id="contact" className="contact">
      <h2 className="common__heading">Contact Me</h2>
      <Container>
        <Row xs={1} lg={2}>
          <Col className="d-flex flex-column align-items-center justify-content-between">
            <p className="contact__spec mb-5">
              If you are looking to hire a product designer, I’m currently
              available for freelance work
            </p>
            <img className="contact__img" alt="contact img" src={contactImg} />
          </Col>
          <Col className="common__card p-5">
            <Form onSubmit={sendMail} ref={form}>
              <Row className="mb-5" xs={1} lg={2}>
                <Col className="mb-5 mb-lg-0">
                  <Form.Group controlId="formName">
                    <Form.Label className="mb-3">Your Name</Form.Label>
                    <Form.Control
                      className="form__input"
                      size="lg"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required={true}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formEmail">
                    <Form.Label className="mb-3">Your email</Form.Label>
                    <Form.Control
                      className="form__input"
                      size="lg"
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      required={true}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-5">
                <Col>
                  <Form.Group controlId="formMessages">
                    <Form.Label className="mb-3">Your messages</Form.Label>
                    <Form.Control
                      className="form__input"
                      size="lg"
                      as="textarea"
                      placeholder="Enter your messages"
                      name="messages"
                      rows={3}
                      required={true}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row xs={1} md={2}>
                <Col>
                  <Toast
                    className="contact__toast-msg mb-4 mb-md-0"
                    onClose={() => {
                      setShowSendMailMsg(false);
                    }}
                    show={showSendMailMsg}
                    animation={true}
                    delay={2000}
                    autohide
                  >
                    <Toast.Header
                      closeButton={true}
                      className="contact__toast-msg-header"
                    >
                      <strong className="me-auto">{mailMsg}</strong>
                    </Toast.Header>
                  </Toast>
                </Col>
                <Col>
                  <button
                    type="submit"
                    className="contact__mail-btn pt-3 pb-3 pe-3"
                  >
                    <AiOutlineMail className="contact__mail-icon" />
                    Send mail
                  </button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
