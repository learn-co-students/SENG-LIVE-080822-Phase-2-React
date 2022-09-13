import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles";

const Claps = styled(Button)`
  color: transparent;
  text-shadow: 0 0 0 var(--primary);
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    color: transparent;
    text-shadow: 0 0 0 var(--background);
  }
`

const ProjectListItem = ({
  project,
  onProjectDelete,
}) => {
  const { id, image, about, name, link, phase } = project;

  const [clapCount, setClapCount] = useState(0);

  const handleClap = (clapCount) => setClapCount(clapCount + 1);

  const handleDeleteClick = () => {
    onProjectDelete(id)
    fetch(`http://localhost:4000/projects/${id}`, {
      method: "DELETE"
    })
  };

  return (
    <li className="card">
      <Link to={`/projects/${id}`}>
        <figure className="image">
          <img src={image} alt={name} />
          <Claps onClick={handleClap}>
            👏{clapCount}
          </Claps>
        </figure>
      </Link>

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
          <Button as={Link} to={`/projects/${id}/edit`}>
            <FaPencilAlt />
          </Button>
          <Button onClick={handleDeleteClick}>
            <FaTrash />
          </Button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
