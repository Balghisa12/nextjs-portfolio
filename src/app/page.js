import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import CreativitySection from "./components/CreativitySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
          <div className="video-background">
        <video autoplay muted loop>
            <source src={"../../public/music_background.mp4"} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    </div>
      <Navbar />
  
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CreativitySection/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
