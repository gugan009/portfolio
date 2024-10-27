import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import Youtube from "../../Assets/Projects/Youtube.png";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import Food from "../../Assets/Projects/Food.png";
import Todos from "../../Assets/Projects/Todos.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Youtube}
              isBlog={false}
              title="Youtube Clone"
              description="I developed the Youtube clone application, that allows user login and video browsing, including Trending and Gaming sections. Users can search for videos and view details, with authentication managed via JWT tokens in local storage. The app features routing with protected routes and a theme toggle between Light and Dark modes. Built using React js"
              ghLink="https://github.com/soumyajit4419/Chatify"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="Ecommerce Clone"
              description="I developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart, featuring Login, Products, and Product Details pages with React Router. Secure authentication is handled using JWT tokens and REST API calls. Technologies used include React, JavaScript, CSS, and Bootstrap."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todos}
              isBlog={false}
              title="Todos Application"
              description="I developed a dynamic Todos application that allows users to add, save, and delete items from their to-do list. The user-friendly interface enables easy management of tasks. Technologies used include HTML, CSS, and JavaScript."
              ghLink="https://github.com/gugan009/Todos-Application"
              demoLink="https://todos-application-rosy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Food}
              isBlog={false}
              title="Food Munch"
              description="I implemented a responsive web design for Food Munch utilizing Bootstrap, HTML, CSS, and Font Awesome. The design adapts seamlessly to various devices, ensuring a user-friendly experience. Key features include a visually appealing layout and easy navigation."
              ghLink="https://github.com/gugan009/Food-Munch"
                        
            />
          </Col>

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
