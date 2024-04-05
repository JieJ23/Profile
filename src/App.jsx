import Intro from "./Componenets/Intro";
import SimpleCard from "./Componenets/InfoCards";
import SimpleCard2 from "./Componenets/InfoCards2";
import Footer from "./Componenets/Footer";
import SectionTemplate from "./Template/SectionWrap";
import CenterHeroes from "./Componenets/CenterHeroes";

export default function App() {
  return (
    <SectionTemplate>
      <Intro />
      <SimpleCard />
      <CenterHeroes />
      <SimpleCard2 />
      <Footer />
    </SectionTemplate>
  );
}
