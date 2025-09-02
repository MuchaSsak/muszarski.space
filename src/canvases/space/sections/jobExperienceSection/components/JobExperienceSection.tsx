import MarsModel from "@/canvases/space/mars/components/MarsModel";
import JobExperienceDownloadResume from "@/canvases/space/sections/jobExperienceSection/components/JobExperienceDownloadResume";
import JobExperienceList from "@/canvases/space/sections/jobExperienceSection/components/JobExperienceList";
import JobExperienceTitle from "@/canvases/space/sections/jobExperienceSection/components/JobExperienceTitle";

function JobExperienceSection() {
  return (
    <>
      <MarsModel />

      <JobExperienceTitle />
      <JobExperienceList />
      <JobExperienceDownloadResume />
    </>
  );
}

export default JobExperienceSection;
