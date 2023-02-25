import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imageUrl, projectLink }) => {

  return (
    <Col sm={6} md={4}>
      <a href={projectLink} target="_blank" className="text-white">
        <div className="proj-imgbx">
          <img src={imageUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
