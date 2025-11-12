import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
  ];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((s, i) => (
          <div key={i} className="skill-bar">
            <div className="skill-info">
              <span>{s.name}</span>
              <span>{s.level}</span>
            </div>
            <div className="progress">
              <div className="progress-fill" style={{ width: s.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
