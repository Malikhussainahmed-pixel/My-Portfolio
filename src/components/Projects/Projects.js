import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/chatbot.png";
import gymnasium from "../../Assets/Projects/gymnasium.png";
import Hajisite from "../../Assets/Projects/Hajisite.png";
import Headphonessite from "../../Assets/Projects/Headphonessite.png";
import home_decor_cut from "../../Assets/Projects/home_decor_cut.jpeg";
import moviessite from "../../Assets/Projects/moviessite.jpg";
import sarena from "../../Assets/Projects/sarena.jpg";
import shoeswebsite from "../../Assets/Projects/shoeswebsite.png";
import watcheswebsite from "../../Assets/Projects/watcheswebsite.png";



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
              imgPath={chatbot}
              isBlog={false}
              isGithub={false}
              isDemo={false}
              title="Chat Bot 1.0"
              description="This AI chatbot is an intelligent conversational assistant designed to answer your questions effortlessly. Built using the powerful Next.js framework, it delivers fast and efficient performance. The frontend is crafted with HTML and styled using Tailwind CSS for a sleek and modern interface. Powered by Google's Gemini APIs, the bot understands and responds with accuracy and context. Whether for casual queries or technical help, it offers seamless interaction and a futuristic chat experience.

"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymnasium}
              isBlog={false}
              isGithub={false}
              isDemo={false}
              title="Gymnasium"
              description="Gymnasium is a comprehensive fitness platform designed to enhance your health journey. It features an exercise library with beginner to advanced workouts, real-time posture correction using MediaPipe and OpenCV, and a calorie calculator tailored to your body metrics and goals. The diet planner lets users create and save custom meal plans. Built with Flask, PostgreSQL, and Prisma, Gymnasium empowers users to train smarter, eat better, and track progress with personalized fitness tools."
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sarena}
              isBlog={false}
              isGithub={false}
              isDemo={false}
              title="Serena GIS Forest"
              description="Serena GIS Forest is a geographic information website that provides detailed insights into forests using aerial satellite imagery. It tracks and visualizes deforestation and plantation activities over the past decade. The platform aims to raise environmental awareness, support afforestation efforts, and help users understand the ecological changes happening across various forest regions."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={home_decor_cut}
              isBlog={false}
              isGithub={false}
              isDemo={false}
              title="Home Decor"
              description="This furniture e-commerce website offers a sleek and responsive shopping experience, allowing users to browse and purchase home decor items with ease. Built using Next.js, Tailwind CSS, PostgreSQL, and Prisma, the platform ensures fast performance, secure data handling, and seamless product management for both users and administrators. It’s designed for scalability and modern usability."
                     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watcheswebsite}
              isBlog={false}
              isGithub={false}
              isDemo={false}
              title="Timeless Elegance"
              description="Timeless Elegance is modern and responsive shopping experience, allowing users to explore and purchase a wide range of premium timepieces effortlessly. Developed with Next.js, Tailwind CSS, PostgreSQL, and Prisma, the site ensures high-speed performance, secure data transactions, and smooth product management for both customers and admins. Designed with scalability in mind, it combines elegant UI with robust backend functionality to meet the needs of today’s digital watch retail market."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Headphonessite}
              isBlog={false}
              isGithub={false}
              isDemo={false}
              title="Soundcore"
              description="Soundcore offers a sleek, user-friendly shopping experience where customers can easily browse and purchase high-quality audio gear. Built with Next.js, Tailwind CSS, PostgreSQL, and Prisma, the platform ensures fast performance, secure transactions, and efficient product management for both users and administrators. With a focus on scalability and modern design, the site delivers a seamless experience that blends aesthetic appeal with powerful functionality for the evolving audio product market."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoeswebsite}
              isBlog={false}
              isGithub={false}
              isDemo={false}
              title="Boot Hero"
              description="An e-commerce platform for shoes built with Next.js, Tailwind CSS, Prisma, and PostgreSQL. It offers a seamless shopping experience with fast performance, responsive design, and secure database management. Users can browse, filter, and purchase a wide variety of shoes with smooth navigation and real-time inventory updates.

"
              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviessite}
              isBlog={false}
              isGithub={false}
              isDemo={false}
              title="HD Movies"
              description="HD Movies powered by Next.js and styled with Tailwind CSS, utilizing the MoviesDB API for comprehensive movie data. Users can browse films, access detailed information, and discover trending releases through a responsive, user-friendly interface, ensuring a seamless experience"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hajisite}
              isBlog={false}
              isGithub={false}
              isDemo={false}
              title="Pilgrimage Planner"
              description="Pilgrimage Planner is a dedicated website for Hajis, offering seamless Umrah planning. Featuring comprehensive 7-night and 10-night packages, it includes flights, accommodations, guided tours, and visits to holy sites. The luxury option provides premium stays, private transport, and personalized services, ensuring a spiritually enriching and hassle-free journey to the sacred lands."
              
            />
          </Col>

         

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;