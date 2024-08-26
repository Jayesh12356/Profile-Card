import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "lightpink",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "lightblue",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "lightgreen",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "lightgrey",
  },
  {
    skill: "React",
    level: "advanced",
    color: "lightblue",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "lightpink",
  },
];

function App() {
  return (
    <div className="card">
      <Image />
      <div className="data">
        <Information />
        <Skilllist />
      </div>
    </div>
  );
}

function Image() {
  return (
    <img
      className="avatar"
      src="pizzas/focaccia.jpg"
      alt="pizzas/focaccia.jpg"
    />
  );
}

function Information() {
  return (
    <div>
      <h1>Jayesh Koli</h1>
      <p>
        ashg ygdiya gyag dyiag iyadgf yadgfuyg adyfa gsdiy gfiasyd gfiydgfiysagf
        iygiy iy gfiy gfiy gfiyaegfiygasdiysaefiyiy gfe
      </p>
    </div>
  );
}

function Skilllist({ skill, emoji }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          emoji={
            skill.level === "advanced"
              ? "😘"
              : skill.level === "intermediate"
              ? "❤️"
              : "😒"
          }
          color={skill.color}
        />
      ))}
      {/* <Skill skill="Html + css" emoji="👌" color="lightblue" />
      <Skill skill="JavaScript" emoji="👌" color="lightgreen" />
      <Skill skill="Python" emoji="👌" color="lightgrey" />
      <Skill skill="SQL" emoji="👌" color="lightblue" />
      <Skill skill="Frappe" emoji="👌" color="lightpink" /> */}
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
