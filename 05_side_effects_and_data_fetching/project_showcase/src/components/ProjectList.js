import ProjectListItem from "./ProjectListItem";
import { useState, useEffect } from "react";

const ProjectList = ({
  projects,
  onSelectedPhaseChange,
  searchQuery,
  setSearchQuery
}) => {

  const [searchInputText, setSearchInputText] = useState("");
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(searchInputText);
    }, 300)

    return () => {
      clearTimeout(timeoutId);
    }
  })

  const projectListItems = projects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  const handleOnChange = (e) => setSearchInputText(e.target.value);

  return (
    <section>
      <h2>Projects</h2>
      {/* <h1>Count: {count}</h1> */}
      <div className="filter">
        <button onClick={() => onSelectedPhaseChange("")}>All</button>
        <button onClick={() => onSelectedPhaseChange("5")}>Phase 5</button>
        <button onClick={() => onSelectedPhaseChange("4")}>Phase 4</button>
        <button onClick={() => onSelectedPhaseChange("3")}>Phase 3</button>
        <button onClick={() => onSelectedPhaseChange("2")}>Phase 2</button>
        <button onClick={() => onSelectedPhaseChange("1")}>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
