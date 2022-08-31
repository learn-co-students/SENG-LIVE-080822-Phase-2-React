import React, { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const onLoadProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }

  const onToggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  console.log("App: render")
  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        onToggleDarkMode={onToggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <ProjectForm />
      <ProjectList
        projects={projects}
        onLoadProjects={onLoadProjects}
      />
    </div>
  );
};

export default App;
