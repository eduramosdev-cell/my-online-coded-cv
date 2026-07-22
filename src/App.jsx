import { Navbar } from './layout/Navbar';
import { Testimonials } from './sections/Testimonials';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/*bg*/}
      <div className="fixed inset-0 -z-10">
        <img
          src="/projects/Hero-bg.png"
          alt="Hero background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
