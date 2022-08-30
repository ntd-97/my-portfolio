import { useRef, useContext } from "react";

import { motion } from "framer-motion";

import { Col, Container, Row } from "react-bootstrap";

import { ThemeContext } from "../../App";
import ProjectItem from "../ProjectItem/ProjectItem";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaLessThan, FaGreaterThan } from "react-icons/fa";

import { workExperiences } from "../../assets/mock_data";

const ProjectsList = () => {
  const { theme } = useContext(ThemeContext);

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
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  };

  const MotionCol = motion(Col);
  const MotionRow = motion(Row);
  let projectVarians = {};

  if (window.innerWidth < 1200) {
    projectVarians = {
      hideLeft: { opacity: 0 },
      hideRight: { opacity: 0 },
      show: { opacity: 1, x: 0 },
    };
  } else {
    projectVarians = {
      hideLeft: { opacity: 0, x: -20 },
      hideRight: { opacity: 0, x: 20 },
      show: { opacity: 1, x: 0 },
    };
  }

  return (
    <Container id="experiences" className="experiences">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7 }}
        className="common__heading"
      >
        Dự án
      </motion.h2>
      {workExperiences.map((workExYear) => (
        <Container key={workExYear.year} className="projects-list">
          <Row className="pb-4">
            <MotionCol
              variants={projectVarians}
              initial="hideLeft"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
              xs={3}
              md={2}
              lg={1}
            >
              <h3 className={`projects-list__year ${theme}`}>
                {workExYear.year}
              </h3>
            </MotionCol>
            <MotionCol
              variants={projectVarians}
              initial="hideRight"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
              xs={9}
              md={10}
              lg={11}
              className="d-flex align-items-center"
            >
              <div className={`projects-list__break-line ${theme}`}></div>
            </MotionCol>
          </Row>

          <MotionRow
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <Swiper
              modules={[Pagination, Navigation]}
              className={`mySwiper${workExYear.year}`}
              spaceBetween={15}
              //add swiper custom navigation
              navigation={{
                prevEl: `.btnPrev-${workExYear.year}`,
                nextEl: `.btnNext-${workExYear.year}`,
              }}
              //add swiper custom pagination
              pagination={{
                el: `.swiper-pagination-${workExYear.year}`,
                type: "bullets",
                clickable: true,
              }}
              centerInsufficientSlides={true}
              breakpoints={swiperResponsiveConfig}
              //get swiper
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

            {/* custom navigation button */}
            <button
              className={`slider-arrow-btn__prev btnPrev-${workExYear.year} ${theme}`}
              onClick={() => {
                swiperRef.current.slidePrev();
              }}
            >
              <FaLessThan className="slider-arrow-btn__icon--prev" />
            </button>
            <button
              className={`slider-arrow-btn__next btnNext-${workExYear.year} ${theme}`}
              onClick={() => {
                swiperRef.current.slideNext();
              }}
            >
              <FaGreaterThan className="slider-arrow-btn__icon--next" />
            </button>

            {/* custom pagination  */}
            <div
              className={`swiper-pagination-style swiper-pagination-${workExYear.year}`}
            ></div>
          </MotionRow>
        </Container>
      ))}
    </Container>
  );
};

export default ProjectsList;
