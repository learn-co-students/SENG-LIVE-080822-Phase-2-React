import projects from "../projects";
import ProjectListItem from "./ProjectListItem";

const ProjectList = () => {
  console.log('projects', projects);

  // mapping over an array of objects to create an array of react components
  // is a very common pattern that you'll see across react projects
  // there is a component to render each item in a list and it will accept
  // one element in the array (an object) as a prop and then use it to render
  // the contents of that object in the JSX.
  const renderedProjects = projects.map(projectObj => {
    return <ProjectListItem project={projectObj} />
  })
  return (
    <section>
      <h1>All Projects</h1>
      <ul className="cards">
      
        {renderedProjects}
      </ul>
    </section>
  )
}

export default ProjectList