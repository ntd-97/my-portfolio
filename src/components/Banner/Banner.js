import { useContext } from "react";

import { Row, Col, Container } from "react-bootstrap";

import AvatarImg from "../../assets/images/avatar.jpg";

import { motion } from "framer-motion";

import { ThemeContext } from "../../App";

import { useTranslation } from "react-i18next";

const Banner = () => {
  const { theme } = useContext(ThemeContext);

  const { t } = useTranslation();

  const bannerVariants = {
    show: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <Container id="home">
      <Row xs={1} lg={2} className="banner d-flex flex-wrap-reverse">
        <Col className="d-flex flex-column justify-content-evenly">
          <motion.h1
            variants={bannerVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 1 }}
            className="banner__heading mb-5 px-3 px-md-0"
          >
            {t("banner.heading")}
          </motion.h1>

          <motion.p
            variants={bannerVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 1.5 }}
            className={`banner__spec ${theme}  px-3 px-md-0`}
          >
            {t("banner.title")}
          </motion.p>
        </Col>

        <Col
          style={{ position: "relative" }}
          className="d-flex justify-content-center justify-content-lg-end mb-5 mb-lg-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="banner__shape"
          ></motion.div>

          <motion.img
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="img-fluid banner__avatar"
            src={AvatarImg}
            alt="avatar_img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
