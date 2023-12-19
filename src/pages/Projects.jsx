import React from "react";
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  return (
    <div className=" w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 py-20 mx-5">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};
export default Projects;