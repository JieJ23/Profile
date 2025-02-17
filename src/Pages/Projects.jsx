import Footer from "../Componenets/Footer";
import ProjectCards from "../Componenets/ProjectCard";
import SectionTemplate from "../Template/SectionWrap";
import { BackgroundParticles } from "../Componenets/Particles";

export default function Projects() {
  return (
    <>
      <SectionTemplate>
        <BackgroundParticles />
        <ProjectCards />
        <Footer />
      </SectionTemplate>
    </>
  );
}
