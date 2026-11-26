
function SkillCard({ name, description, level }) {
  return (
    <div className="skill-card">
      <h3>{name}</h3>
      <p>{description}</p>

      <div className="skill-progress">
        <div
          className="skill-progress-fill"
          style={{ width: `${level}%` }}
        ></div>
      </div>

      <span>{level}%</span>
    </div>
  );
}

export default SkillCard;
