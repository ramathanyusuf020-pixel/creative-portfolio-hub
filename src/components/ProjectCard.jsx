
function ProjectCard({ project, onDelete }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <span>{project.category}</span>
      </div>

      <div className="project-info">
        <h3>{project.name}</h3>

        <p>{project.description}</p>

        <div className="project-actions">
          <span className="project-category">
            {project.category}
          </span>

          <button
            className="delete-btn"
            onClick={() => onDelete(project.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
