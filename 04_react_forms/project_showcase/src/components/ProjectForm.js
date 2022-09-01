import React, { useState } from "react";

const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    phase: "",
    link: "",
    image: ""
  })

  // const handleOnChange = (e) => {
  //   setFormData(formData => {
  //     return {
  //       ...formData,
  //       [e.target.name]: e.target.value
  //     }
  //   })
  // }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAddProject({
      name: name,
      about: about,
      phase: phase,
      link: link,
      image: image
  })
  }
  // const { name, about, phase, link, image } = formData;

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [phase, setPhase] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");


  // one handler for all inputs
  // const handleOnChange = (e) => {
  //   switch (e.target.name) {
  //     case "name":
  //       setName(e.target.value);
  //       break;
  //     case "about":
  //       setAbout(e.target.value);
  //       break;
  //     case "phase":
  //       setPhase(e.target.value);
  //       break;
  //     case "link":
  //       setLink(e.target.value);
  //       break;
  //     case "image":
  //       setImage(e.target.value);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // or separate handlers for each input
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  }

  const handlePhaseChange = (e) => {
    setPhase(e.target.value);
  }

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  }

  const handleImageChange = (e) => {
    setImage(e.target.value);
  }

  return (
    <section>
      <form onSubmit={handleOnSubmit} className="form" autoComplete="off">
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="about">About</label>
        <textarea 
          id="about" 
          name="about"
          value={about}
          onChange={handleAboutChange}
        />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          value={phase}
          onChange={handlePhaseChange}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input 
          type="text" 
          id="link" 
          name="link"
          value={link}
          onChange={handleLinkChange}
        />

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image" 
          value={image}
          onChange={handleImageChange}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
