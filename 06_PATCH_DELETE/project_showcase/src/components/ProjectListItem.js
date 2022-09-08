import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ProjectListItem = ({
  project,
  onEditProject,
  onUpdateProject,
  onDeleteProject
}) => {
  const { id, image, about, name, link, phase, claps } = project;

  // const [clapCount, setClapCount] = useState(0);

  const handleClap = () => {
    // setClapCount(clapCount => clapCount + 1)
    fetch(`http://localhost:4000/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ claps: claps + 1 })
    })
      .then(res => res.json())
      .then(updatedProject => {
        onUpdateProject(updatedProject)
      })
  };

  const handleEditClick = () => {
    onEditProject(project);
  };

  const handleDeleteClick = () => {
    fetch(`http://localhost:4000/projects/${id}`, {
      method: "DELETE"
    })// pessimistic rendering with the onDeleteProject in a promise callback
      .then(res => onDeleteProject(id))
    // optimistic rendering with the onDeleteProject independent of the fetch
    onDeleteProject(id)
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClap} className="claps">
          👏{claps}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
