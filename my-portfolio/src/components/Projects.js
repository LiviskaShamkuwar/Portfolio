import React from "react";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>My personal portfolio built using React and modern CSS.</p>
        </div>
        <div className="project-card">
          <h3>To-Do App</h3>
          <p>Simple task management web app with local storage.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
