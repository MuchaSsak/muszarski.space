import SaturnModel from "@/canvases/space/saturn/components/SaturnModel";
import ProjectsList from "@/canvases/space/sections/projectsSection/components/ProjectsList";
import ProjectsTitle from "@/canvases/space/sections/projectsSection/components/ProjectsTitle";

function ProjectsSection() {
  return (
    <>
      <SaturnModel />

      <ProjectsTitle />
      <ProjectsList />
    </>
  );
}

export default ProjectsSection;
