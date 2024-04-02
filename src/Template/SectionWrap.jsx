export default function SectionTemplate({ children }) {
  return (
    <section className="h-lvh relative">
      <div className="fixed bg-[#131111] h-lvh w-full -z-10" />
      {children}
    </section>
  );
}
