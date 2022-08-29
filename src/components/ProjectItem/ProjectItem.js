import { useState } from "react";

import ProjectItemDetails from "../ProjectItemDetails/ProjectItemDetails";

import { Modal } from "react-bootstrap";
import { CgClose } from "react-icons/cg";

const ProjectItem = ({ project }) => {
  const [showDetails, setShowDeTails] = useState(false);

  const onClickCloseBtnHandler = () => setShowDeTails(false);

  const onClickProjectItemHandler = () => setShowDeTails(true);

  return (
    <>
      <div
        className="project-item common__card p-4 d-flex flex-column justify-content-between"
        onClick={onClickProjectItemHandler}
      >
        <img src={project.img} className="project-item__img mb-4" alt="" />
        <h2 className="project-item__heading mb-0">{project.title}</h2>
      </div>

      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        contentClassName="modal__content"
        centered
        keyboard={true}
        show={showDetails}
        onHide={onClickCloseBtnHandler}
      >
        <ProjectItemDetails project={project} />
        <CgClose
          className="modal__close-btn"
          onClick={onClickCloseBtnHandler}
        />
      </Modal>
    </>
  );
};
export default ProjectItem;
