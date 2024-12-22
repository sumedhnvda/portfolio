import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';

function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-white py-8 space-y-8">
        <HeroSection />
        <AboutSection />
        <ProjectsSection/>
      </div>
    </>
  );
}

export default App;