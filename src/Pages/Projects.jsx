import FloatingNav from "../Componenets/Navigation";
import Footer from "../Componenets/Footer";
import ProjectCards from "../Componenets/ProjectCard";
import SectionTemplate from "../Template/SectionWrap";

export default function Projects() {
  return (
    <SectionTemplate>
      <FloatingNav />
      <ProjectCards />
      <Footer />
    </SectionTemplate>
  );
}
