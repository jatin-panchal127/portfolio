import React from "react";
import { Col, Container, Nav, Row, Tab, TabContainer } from "react-bootstrap";
import tvr from "../assets/images/camera_details.png";
import crwnClothing from "../assets/images/crwn-clothing.jpg";
import projectImage3 from "../assets/images/project-img3.png";
import projectImage4 from "../assets/images/project-img1.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import ProjectCard from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Tarsyer TVR",
      description: "Live camera feed application, You can add camera configuration and see the live video from that camera.",
      imageUrl: tvr,
      projectLink: "https://mellifluous-brigadeiros-414461.netlify.app/"
    },
    {
      title: "Crwn Clothing",
      description: "An e-commerce website where you can buy from the trendy to all the vintage clothing apparels.",
      imageUrl: crwnClothing,
      projectLink: "https://mellifluous-brigadeiros-414461.netlify.app/"
    },
    {
      title: "Business Startup 3",
      description: "Design & developmant",
      imageUrl: projectImage3,
      projectLink: "https://mellifluous-brigadeiros-414461.netlify.app/"
    },
    {
      title: "Business Startup 4",
      description: "Design & developmant",
      imageUrl: projectImage3,
      projectLink: "https://mellifluous-brigadeiros-414461.netlify.app/"
    },
    {
      title: "Business Startup 5",
      description: "Design & developmant",
      imageUrl: projectImage4,
      projectLink: "https://mellifluous-brigadeiros-414461.netlify.app/"
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Hello, checkout my projects, Hope you find out them as interesting!!
                  </p>
                </div>
              )}
            </TrackVisibility>

            <TabContainer id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 align-items-center justify-content-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam cupiditate velit repudiandae delectus nemo mollitia, id
                    minus autem a soluta animi qui accusantium maxime distinctio
                    inventore nisi eligendi! Odit similique ex veritatis
                    laboriosam ad.
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, possimus dolores. Error cumque fugiat laudantium
                    enim voluptatem tempora reprehenderit repellendus, cum ullam
                    suscipit facilis nihil incidunt, officiis fuga nesciunt.
                    Esse vel voluptatem expedita! Voluptates?
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};

export default Projects;
