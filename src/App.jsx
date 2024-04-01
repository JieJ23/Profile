import CardTest from "./CardsTop";
import CardMiddle from "./CardsMiddle";
function App() {
  return (
    <>
      <section className="h-lvh relative">
        <div className="fixed bg-[#28282b] h-lvh w-full" />
        <CardTest />
        <CardMiddle />
      </section>
    </>
  );
}

export default App;
