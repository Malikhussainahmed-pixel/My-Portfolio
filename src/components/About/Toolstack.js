import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiLinux,

    SiVisualstudiocode,
    SiPhpstorm,

    SiPostman,
    SiSwagger,

    SiPhpmyadmin,
    SiDocker,
    SiKubernetes,

    SiSlack,
    SiMicrosoftteams,
    SiJira,
    SiTrello,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* OS */}
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiLinux />
                <h6>Linux</h6>
            </Col> */}

            {/* Code Editors */}
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
                <h6>Visual Studio Code</h6>
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiPhpstorm />
                <h6>PhpStorm</h6>
            </Col> */}

            {/* Testing APIs */}
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
                <h6>Postman</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSwagger />
                <h6>Swagger</h6>
            </Col>

            {/* Softwares */}
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiPhpmyadmin />
                <h6>phpMyAdmin</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker />
                <h6>Docker</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes />
                <h6>Kubernetes</h6>
            </Col> */}

            {/* Chat & Management */}
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack />
                <h6>Slack</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMicrosoftteams />
                <h6>Microsoft Teams</h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJira />
                <h6>Jira</h6>
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiTrello />
                <h6>Trello</h6>
            </Col> */}
        </Row>
    );
}

export default Toolstack;
