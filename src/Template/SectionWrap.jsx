import { useState, useEffect } from "react";
import FloatingNav from "../Componenets/Navigation";

export default function SectionTemplate({ children }) {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkMode") === "false"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", !isDark);
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <section
      className={`wrapper h-full relative ${
        isDark ? "text-white" : "dark bg-[#BEBEBE] text-black"
      }`}
    >
      <div className="fixed bg-[#131111] h-full w-full -z-10" />
      <FloatingNav toggleDarkMode={toggleDarkMode} isDark={!isDark} />
      {children}
    </section>
  );
}
