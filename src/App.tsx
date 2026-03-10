import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Solutions } from "./components/Solutions";
import { Impact } from "./components/Impact";
import { InteractiveMap } from "./components/InteractiveMap";
import { VideoTestimonials } from "./components/VideoTestimonials";
import { ProjectsGallery } from "./components/ProjectsGallery";
import { Partners } from "./components/Partners";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Solutions />
      <Impact />
      <InteractiveMap />
      <VideoTestimonials />
      <ProjectsGallery />
      <Partners />
      <CallToAction />
      <Footer />
    </div>
  );
}