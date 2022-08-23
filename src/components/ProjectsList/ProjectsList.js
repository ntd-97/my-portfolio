import { Col, Container, Row } from "react-bootstrap";
import ProjectItem from "../ProjectItem/ProjectItem";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { workExperiences } from "../../assets/mock_data";
import { useRef } from "react";

const ProjectsList = () => {
  const swiperRef = useRef();
  const swiperResponsiveConfig = {
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  };

  return (
    <Container id="experiences" className="experiences">
      <h2 className="common__heading">Experiences</h2>
      {workExperiences.map((workExYear) => (
        <Container key={workExYear.year} className="projects-list">
          <Row className="pb-4">
            <Col xs={3} md={2} lg={1}>
              <h3 className="projects-list__year">{workExYear.year}</h3>
            </Col>
            <Col xs={9} md={10} lg={11} className="d-flex align-items-center">
              <div className="projects-list__break-line"></div>
            </Col>
          </Row>
          <Row style={{ position: "relative" }}>
            <Swiper
              modules={[Pagination, Navigation]}
              className={`mySwiper${workExYear.year}`}
              spaceBetween={15}
              navigation={{
                prevEl: `.btnPrev-${workExYear.year}`,
                nextEl: `.btnNext-${workExYear.year}`,
              }}
              pagination={{
                el: `.swiper-pagination-${workExYear.year}`,
                type: "bullets",
                clickable: true,
              }}
              centerInsufficientSlides={true}
              breakpoints={swiperResponsiveConfig}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {workExYear.projects.map((project) => (
                <SwiperSlide key={workExYear.year + project.title}>
                  <ProjectItem project={project}></ProjectItem>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className={`slider-arrow-btn__prev btnPrev-${workExYear.year}`}
              onClick={() => {
                swiperRef.current.slidePrev();
              }}
            >
              <FaLessThan className="slider-arrow-btn__icon--prev" />
            </button>
            <button
              className={`slider-arrow-btn__next btnNext-${workExYear.year}`}
              onClick={() => {
                swiperRef.current.slideNext();
              }}
            >
              <FaGreaterThan className="slider-arrow-btn__icon--next" />
            </button>
            <div
              className={`swiper-pagination-style swiper-pagination-${workExYear.year}`}
            ></div>
          </Row>
        </Container>
      ))}
    </Container>
  );
};

export default ProjectsList;
