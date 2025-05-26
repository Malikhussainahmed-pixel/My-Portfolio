import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img 
  style={{ width: '100%', height: '300px', objectFit: 'cover' }} 
  variant="top" 
  src={props.imgPath} 
  alt="card-img" 
/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {props.isBlog && (
          <Button variant="primary" href={props.bLink} target="_blank">
            <BsGithub /> &nbsp;
            Blog
          </Button>
        )}
        {"\n"}
        {"\n"}
        
        {props.isGithub && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            GitHub
          </Button>
        )}
        {"\n"}
        {"\n"}

        {props.isDemo && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
