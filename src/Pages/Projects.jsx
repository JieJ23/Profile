import FloatingNav from "../Componenets/Navigation";
import Footer from "../Componenets/Footer";

export default function Projects() {
  return (
    <>
      <section className="h-lvh relative">
        <div className="fixed bg-[#131111] h-lvh w-full -z-10" />
        <FloatingNav />
        <Footer />
      </section>
    </>
  );
}
