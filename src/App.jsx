import Intro from "./Componenets/Intro";
import FloatingNav from "./Componenets/Navigation";
import SimpleCard from "./Componenets/InfoCards";
import SimpleCard2 from "./Componenets/InfoCards2";
import SimpleCard3 from "./Componenets/InfoCards3";
import Footer from "./Componenets/Footer";
import SectionTemplate from "./Template/SectionWrap";

export default function App() {
  return (
    <SectionTemplate>
      <FloatingNav />
      <Intro />
      <SimpleCard />
      <SimpleCard2 />
      <SimpleCard3 />
      <Footer />
    </SectionTemplate>
  );
}
