import { useState } from "react";
import ProjectItemDetails from "../ProjectItemDetails/ProjectItemDetails";
import { Modal } from "react-bootstrap";

const ProjectItem = ({ project }) => {
  const [showDetails, setShowDeTails] = useState(false);

  const onclickCloseBtnHandler = () => setShowDeTails(false);

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
        contentClassName="contentModal"
        centered
        keyboard={true}
        show={showDetails}
        onHide={onclickCloseBtnHandler}
      >
        <ProjectItemDetails project={project} />
      </Modal>
    </>
  );
};
export default ProjectItem;
