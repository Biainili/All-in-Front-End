import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Contractservices from "../components/sections/Contractservices";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero  />
      <Services />
      <Contractservices />
      <About />
      <Contact />
    </div>
  );
}
