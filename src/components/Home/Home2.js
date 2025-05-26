import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    // AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
  My journey into programming started with curiosity and quickly turned into a passion. Over the years, I've built a strong foundation and gained practical experience across multiple technologies.
  <br />
  <br />
  I am proficient in technologies like
  <i>
    <b className="purple"> JavaScript, TypeScript, Next.js, Material UI, Prisma, PostgreSQL, and Docker. </b>
  </i>
  <br />
  <br />
  
  <br />
  <br />
  I enjoy working on innovative projects, especially those involving 
  <b className="purple"> real-time features, data-driven applications, and user-centric design</b>.
  <br />
  <br />
  Whenever possible, I apply my skills to develop full-stack applications using
  <i>
    <b className="purple"> Next.js, Node.js</b>
  </i>
  &nbsp;and a modern toolchain including
  <i>
    <b className="purple"> Prisma, PostgreSQL, and Material UI.</b>
  </i>
</p>

                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/Malikhussainahmed-pixel"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            {/* <li className="social-icons">
                                <a
                                    href="https://twitter.com/iabdullahkhanofficial"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li> */}
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/malik-hussain-ahmed-195bba213"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
