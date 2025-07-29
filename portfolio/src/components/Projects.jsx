const projects = [
  {
    title: "Loan Application Full stack App",
    description:
      "A full-stack web application designed to streamline the loan application process for users. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it features:🔐 Secure User Authentication (JWT-based Sign Up/Login)📝 Multi-step Loan Application Form",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/havidhate/Loan_Full_stack_project_MERN_stack",
    demo: "https://684ac9ae246f2a53efe09d93--snazzy-semifreddo-415586.netlify.app/",
  },
  {
    title: "Online pharmacy",
    description:
      "use most of the concept of js(like denouncing for search optimization, throttling for smooth experience,also used dynamic features and UI/UX and pagination)",
    tech: ["Javascript", "HTML", "CSS", "firebase", "react-vite"],
    github: "https://github.com/havidhate/Online_pharmacy_react_vite",
    demo: "https://splendorous-horse-d197b5.netlify.app/",
  },
  // Add 3 more projects like above
];

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((p, i) => (
        <div key={i} className="project-card">
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p>
            <strong>Tech:</strong> {p.tech.join(", ")}
          </p>
          <div className="project-links">
            <a href={p.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={p.demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
