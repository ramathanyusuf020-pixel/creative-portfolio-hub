
import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Travel Blog",
      description: "A website showcasing beautiful travel destinations.",
      category: "Web Design"
    },
    {
      id: 2,
      name: "Shopping List",
      description: "An interactive shopping list built with JavaScript.",
      category: "JavaScript"
    },
    {
      id: 3,
      name: "Color Clock",
      description: "A dynamic clock application built with React.",
      category: "React"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "React"
  });

  const categories = ["All", "React", "JavaScript", "Web Design"];

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleDelete(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name.trim() || !formData.description.trim()) {
      return;
    }

    const newProject = {
      id: Date.now(),
      ...formData
    };

    setProjects([...projects, newProject]);

    setFormData({
      name: "",
      description: "",
      category: "React"
    });

    setShowForm(false);
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <span className="section-tag">MY RECENT WORK</span>
        <h2>Featured Projects</h2>
        <p>Some of the projects I have been working on.</p>
      </div>

      <div className="project-controls">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={handleSearch}
        />

        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "+ Add Project"}
        </button>
      </div>

      {showForm && (
        <form className="project-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Project name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            name="description"
            placeholder="Project description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Web Design">Web Design</option>
          </select>

          <button type="submit">Save Project</button>
        </form>
      )}

      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category ? "active-filter" : ""
            }
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p className="no-projects">No projects found.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
