import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIsLoop from "./components/WhatIsLoop";
import Problem from "./components/Problem";
import Capabilities from "./components/Capabilities";
import Impact from "./components/Impact";
import Solutions from "./components/Solutions";
import Technology from "./components/Technology";
import Dashboards from "./components/Dashboards";
import Security from "./components/Security";
import Pilot from "./components/Pilot";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#040a17] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <WhatIsLoop />
        <Problem />
        <Capabilities />
        <Impact />
        <Solutions />
        <Technology />
        <Dashboards />
        <Security />
        <Pilot />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
