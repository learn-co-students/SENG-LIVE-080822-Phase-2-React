import { useState, useEffect } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const onAddProject = (newProject) => {
    setProjects(projects => {
      return [...projects, newProject]
    })
  }

  const onToggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  const onSelectedPhaseChange = (phase) => {
    setSelectedPhase(phase);
  }

  useEffect(() => {
    let fetchUrl;
    if (selectedPhase && searchQuery) {
      fetchUrl = `http://localhost:4000/projects?phase=${selectedPhase}&q=${encodeURI(searchQuery)}`;
    } else if (searchQuery) {
      fetchUrl = `http://localhost:4000/projects?q=${encodeURI(searchQuery)}`;
    } else if (selectedPhase) {
      fetchUrl = `http://localhost:4000/projects?phase=${selectedPhase}`;
    } else {
      fetchUrl = "http://localhost:4000/projects";
    }
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }, [selectedPhase, searchQuery])

  console.log(projects);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
      />
      <ProjectForm
        onAddProject={onAddProject}
      />
      <ProjectList
        onSelectedPhaseChange={onSelectedPhaseChange}
        projects={projects}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default App;