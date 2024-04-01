import Intro from "./Componenets/Intro";
import FloatingNav from "./Componenets/Navigation";
import SimpleCard from "./Componenets/InfoCards";
import SimpleCard2 from "./Componenets/InfoCards2";
import Footer from "./Componenets/Footer";

function App() {
  return (
    <>
      <section className="h-lvh relative">
        <div className="fixed bg-[#131111] h-lvh w-full -z-10" />
        <FloatingNav />
        <Intro />
        <SimpleCard />
        <SimpleCard2 />
        <Footer />
      </section>
    </>
  );
}

export default App;
