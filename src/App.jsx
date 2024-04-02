import Intro from "./Componenets/Intro";
import FloatingNav from "./Componenets/Navigation";
import SimpleCard from "./Componenets/InfoCards";
import SimpleCard2 from "./Componenets/InfoCards2";
import SimpleCard3 from "./Componenets/InfoCards3";
import Footer from "./Componenets/Footer";

export default function App() {
  return (
    <>
      <section className="h-lvh relative">
        <div className="fixed bg-[#131111] h-lvh w-full -z-10" />
        <FloatingNav />
        <Intro />
        <SimpleCard />
        <SimpleCard2 />
        <SimpleCard3 />
        <Footer />
      </section>
    </>
  );
}
