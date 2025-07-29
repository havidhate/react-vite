const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "C++",
];
const tools = ["Git", "GitHub", "VS Code", "Kafka", "Docker"];

const Skills = () => (
  <section id="skills">
    <h2>Skills & Tools</h2>
    <div className="skills">
      {skills.map((s, i) => (
        <span key={i} className="badge">
          {s}
        </span>
      ))}
    </div>
    <div className="tools">
      {tools.map((t, i) => (
        <span key={i} className="badge">
          {t}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
