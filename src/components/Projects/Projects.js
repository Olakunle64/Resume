import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import iamready from "../../Assets/Projects/iamready.png"
import tutorplan from "../../Assets/Projects/tutorplan.png"

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
              imgPath={iamready}
              isBlog={false}
              title="iAmReady"
              description="iAmReady is a website that helps recruiters efficiently match with job seekers. Recruiters can visit the website, search for candidates that fit their requirements, and directly contact them, saving time in going through numerous CVs."
              ghLink="https://github.com/Olakunle64/IAmReady"
              demoLink="https://iamreadyy.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutorplan}
              isBlog={false}
              title="TutorPlan"
              description="TutorPlan is a scheduling platform designed to streamline the coordination of tutoring sessions for both tutors and students. Inspired by the frustration of scheduling piano lessons, TutorPlan was founded in 2024 with the mission of simplifying the tutoring experience through intuitive booking, automatic reminders, and built-in messaging."
              ghLink="https://github.com/Olakunle64/TutorPlan"
              demoLink="https://tutor-plan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Terminal-Utils"
              description="A collection of custom commands and utilities for the terminal."
              ghLink="https://github.com/Olakunle64/Terminal-Utils"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Simple Shell"
              description="A custom shell that mimics the basic functionalities of the bash shell."
              ghLink="https://github.com/Olakunle64/simple_shell"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="Job Sender Automation"
              description="A python script that scrapes email of preferred job on indeed website and also send all your resume and other attachements to the scraped emails"
              ghLink="https://github.com/Olakunle64/Portfolio/blob/master/WebScraping/indeed_job_xender.py"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="Handwriting detection AI"
              description="This project uses the MNIST dataset to train a machine learning model that predicts handwritten digits (0-9). The model is trained using a `KNeighborsClassifier` wrapped in a `OneVsOneClassifier`. After training, the model is saved as a file (`minst_model.pkl`) for easy loading and testing."
              ghLink="https://github.com/Olakunle64/Machine_Learning/tree/master/Minst_Model"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
