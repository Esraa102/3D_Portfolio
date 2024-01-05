import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <section className="relative bg-primary z-0">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0 overflow-y-hidden">
        <Contact />
        <StarsCanvas />
      </div>
    </section>
  );
}

export default App;
