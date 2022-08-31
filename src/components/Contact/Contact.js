import { useRef, useState, useContext, useEffect } from "react";

import { motion } from "framer-motion";

import { Col, Container, Row, Toast, Form } from "react-bootstrap";

import { AiOutlineMail } from "react-icons/ai";

import contactImg from "../../assets/images/contact.png";

import emailjs from "@emailjs/browser";

import { ThemeContext } from "../../App";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const { theme } = useContext(ThemeContext);

  const [showSendMailMsg, setShowSendMailMsg] = useState(false);
  const [mailMsg, setMailMsg] = useState("");

  const form = useRef();

  const reRenderMail = useRef("");

  const MotionCol = motion(Col);
  let contactVariants = {};

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
          reRenderMail.current = "mail";
        },
        (err) => {
          setMailMsg("Email sending failed!");
          setShowSendMailMsg(true);
          reRenderMail.current = "mail";
        }
      );
  };

  useEffect(() => {
    reRenderMail.current = "";
  });

  // change variant according to screen width
  if (window.innerWidth < 1200) {
    contactVariants = {
      hideLeft: { opacity: 0, y: 20 },
      hideRight: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    };
  } else {
    contactVariants = {
      hideLeft: { opacity: 0, x: -20 },
      hideRight: { opacity: 0, x: 20 },
      show: { opacity: 1, x: 0 },
    };
  }

  return (
    <Container id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7 }}
        className="common__heading"
      >
        {t("navbar.contact")}
      </motion.h2>
      <Container>
        <Row xs={1} lg={2}>
          <MotionCol
            variants={reRenderMail.current === "mail" ? {} : contactVariants}
            initial="hideLeft"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7 }}
            className="d-flex flex-column align-items-center justify-content-between"
          >
            <p className={`contact__spec ${theme} mb-5 px-4`}>
              {t("contact.title")}
            </p>
            <img className="contact__img" alt="contact img" src={contactImg} />
          </MotionCol>

          <MotionCol
            variants={reRenderMail.current === "mail" ? {} : contactVariants}
            initial="hideRight"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7 }}
            className="common__card p-5"
          >
            <Form onSubmit={sendMail} ref={form}>
              <Row className="mb-5" xs={1} lg={2}>
                <Col className="mb-5 mb-lg-0">
                  <Form.Group controlId="formName">
                    <Form.Label className="mb-3">
                      {t("contact.name")}
                    </Form.Label>
                    <Form.Control
                      className="form__input"
                      size="lg"
                      type="text"
                      name="name"
                      placeholder={t("contact.enterName")}
                      required={true}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="formEmail">
                    <Form.Label className="mb-3">
                      {t("contact.email")}
                    </Form.Label>
                    <Form.Control
                      className="form__input"
                      size="lg"
                      type="email"
                      name="email"
                      placeholder={t("contact.enterEmail")}
                      required={true}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-5">
                <Col>
                  <Form.Group controlId="formMessages">
                    <Form.Label className="mb-3">
                      {t("contact.messages")}
                    </Form.Label>
                    <Form.Control
                      className="form__input"
                      size="lg"
                      as="textarea"
                      placeholder={t("contact.enterMessage")}
                      name="messages"
                      rows={3}
                      required={true}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={8}>
                  <Toast
                    className="contact__toast-msg mb-4 mb-md-0"
                    onClose={() => {
                      setShowSendMailMsg(false);
                      reRenderMail.current = "mail";
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
                <Col xs={12} md={4}>
                  <button
                    type="submit"
                    className="common__btn contact__mail-btn pt-3 pb-3 pe-3"
                  >
                    <AiOutlineMail className="contact__mail-icon" />
                    {t("contact.sendMail")}
                  </button>
                </Col>
              </Row>
            </Form>
          </MotionCol>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
