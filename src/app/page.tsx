import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Navbar } from "@/components/Navbar";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { getGithubProfile } from "@/lib/github";

export default async function Home() {
  const github = await getGithubProfile();

  return (
    <div id="top" className="relative">
      <NeuralBackground />
      <div className="noise" />
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Journey />
        <Achievements github={github} />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
