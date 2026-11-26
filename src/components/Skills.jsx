
import SkillCard from "./SkillCard";

function Skills() {
  const skills = [
    {
      id: 1,
      name: "HTML",
      description: "Building structured web pages.",
      level: 90
    },
    {
      id: 2,
      name: "CSS",
      description: "Designing beautiful and responsive websites.",
      level: 85
    },
    {
      id: 3,
      name: "JavaScript",
      description: "Creating interactive web applications.",
      level: 75
    },
    {
      id: 4,
      name: "React",
      description: "Building reusable user interfaces.",
      level: 65
    },
    {
      id: 5,
      name: "Git & GitHub",
      description: "Managing and sharing code projects.",
      level: 70
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <span className="section-tag">WHAT I KNOW</span>
        <h2>My Technical Skills</h2>
        <p>Technologies I use to bring digital ideas to life.</p>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            description={skill.description}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
