import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  const MotionContainer = motion(Container);
  let boxVariants = {};

  if (window.innerWidth < 1200) {
    boxVariants = {
      hideLeft: { opacity: 0, y: 20 },
      hideRight: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    };
  } else {
    boxVariants = {
      hideLeft: { opacity: 0, x: -20 },
      hideRight: { opacity: 0, x: 20 },
      show: { opacity: 1, x: 0 },
    };
  }

  return (
    <Container id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7 }}
        className="common__heading"
      >
        Giới thiệu
      </motion.h2>

      <Container>
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <MotionContainer
              variants={boxVariants}
              initial="hideLeft"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7 }}
              className="p-5 common__card"
            >
              <h3>Một vài điều về mình</h3>
              <p className="about__description">
                Mình là Nguyễn Tấn Đạt, tốt nghiệp ngành Công Nghệ thông tin -
                Đại học Cần Thơ. Mình có hơn hai năm làm việc cho một công ty
                outsourcing ở cả vị trí developer và tester. Sau khoảng thời
                gian đó mình nhận thấy lập trình giao diện web, app là thứ mình
                thích nhất. Do đó mình đã dành nhiều hơn thời gian và tâm huyết
                cho nó. Mình là người hòa đồng, có tinh thần trách nhiệm cao và
                luôn học hỏi để nâng cao kiến thức, kỹ năng của bản thân.
              </p>
            </MotionContainer>
          </Col>

          <Col lg={6}>
            <MotionContainer
              variants={boxVariants}
              initial="hideRight"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7 }}
              className="p-5 common__card"
            >
              <h3>Học vấn</h3>
              <div>
                <p className="about__year">2015 - 2019</p>
                <p>Công nghệ thông tin - Đại học Cần Thơ </p>
                <p>GPA: 3.35/4</p>
              </div>
              <h3>Kinh nghiệm làm việc</h3>
              <div>
                <p className="about__year">2020 - 2022</p>
                <p>Invidual Systems Company</p>
              </div>
            </MotionContainer>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
