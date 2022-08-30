import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

import projects from "../projects";

const ProjectList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  }

  const searchResults = projects.filter(project => {
    // return true if the project should be included and false if not
    return project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           project.about.toLowerCase().includes(searchQuery.toLowerCase())
  })

  // console.log(searchResults)

  const projectListItems = searchResults.map(project => {
    return <ProjectListItem key={project.id} project={project} />
  })


  // console.log('render');
  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
