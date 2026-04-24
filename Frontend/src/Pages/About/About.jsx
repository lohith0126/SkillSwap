import React from "react";
import "./About.css";

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "start",
  backgroundColor: "#2D2D2D",
  justifyContent: "center",
};

const contentContainerStyle = {
  maxWidth: "50vw",
  margin: "60px",
  justifyContent: "center",
};

const titleStyle = {
  fontFamily: "Oswald, sans-serif",
  color: "#FBF1A4",
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "left",
};

const descriptionStyle = {
  fontFamily: "Montserrat, sans-serif",
  color: "#f2efdb",
  fontSize: "1rem",
  lineHeight: "1.6",
  textAlign: "left",
  maxHeight: "100vh",
};

const imageContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "50px",
};

const About = () => {
  return (
    <div className="content1-container">
      <div style={contentContainerStyle}>
        <h2 style={titleStyle}>About</h2>
        <p style={descriptionStyle}>
          <i>
            As a developer, I wanted to build something that solves a real problem. Most skill-learning platforms
            require expensive subscriptions or certifications. SkillSwap was built to change that — a free platform
            where people can connect, share what they know, and learn from each other through direct peer-to-peer
            interaction.
          </i>
        </p>
        <p style={descriptionStyle}>
          <br />
          SkillSwap is built on the belief that knowledge grows when shared. This platform connects people from
          different backgrounds to exchange skills and expertise — completely free of cost. Whether you want to teach
          what you know or learn something new, SkillSwap makes it simple and accessible.
          <br />
          <br />
          This project was built as a full-stack web application using the MERN stack, featuring real-time chat, Google
          OAuth authentication, and a peer-to-peer connection system. The goal was to create a platform where learning
          happens through community, not classrooms.
        </p>
      </div>
      <img src={"/assets/images/about us.png"} style={{ maxWidth: "50vw", maxHeight: "100vh" }} />
    </div>
  );
};

export default About;
