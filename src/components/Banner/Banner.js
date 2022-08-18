import { Row, Col, Container } from "react-bootstrap";
import AvatarImg from "../../assets/images/avatar.jpg";

const Banner = () => {
  return (
    <Container id="home">
      <Row xs={1} lg={2} className="banner d-flex flex-wrap-reverse">
        <Col>
          <h1 className="banner__heading">
            Hi, I am Dat A Developer based in City.
          </h1>
          <p className="banner__spec">
            I help businesses and companies reach their goals by designing
            user-centric digital products and interactive experiences.
          </p>
        </Col>
        <Col className="d-flex justify-content-center justify-content-lg-end mb-5 mb-lg-0 banner__shape">
          <img
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
