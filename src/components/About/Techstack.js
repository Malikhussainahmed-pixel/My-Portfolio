import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiNodejs,
    DiPython,
    DiGit,
} from "react-icons/di";
import {
    SiLaravel,
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiVuedotjs,
    SiPhp,
    SiMysql,
    SiMongodb,
    SiExpress,
    SiReact,
    SiTypescript,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* PHP Stack */}
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiPhp />
                <h6>PHP</h6>
            </Col> */}
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiLaravel />
                <h6>Laravel</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVuedotjs />
                <h6>Vue.js</h6>
            </Col> */}
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
                <h6>MySQL</h6>
            </Col>

            {/* MERN Stack */}
            <Col xs={4} md={2} className="tech-icons">
                <SiMongodb />
                <h6>MongoDB</h6>
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiExpress />
                <h6>Express.js</h6>
            </Col> */}
            <Col xs={4} md={2} className="tech-icons">
                <SiReact />
                <h6>React.js</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
                <h6>Node.js</h6>
            </Col>

            {/* JS Stack */}
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
                <h6>Next.js</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
                <h6>JavaScript</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
                <h6>TypeScript</h6>
            </Col>

            {/* Generic */}
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus />
                <h6>C++</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
                <h6>Git</h6>
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
                <h6>Firebase</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis />
                <h6>Redis</h6>
            </Col> */}
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
                <h6>Python</h6>
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
                <TbBrandGolang />
                <h6>Golang</h6>
            </Col> */}
        </Row>
    );
}

export default Techstack;
