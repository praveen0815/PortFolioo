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
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { TechStrip } from "@/components/TechStrip";
import { getGithubProfile } from "@/lib/github";

export default async function Home() {
  const github = await getGithubProfile();

  return (
    <div className="page-frame">
      <div className="noise" />
      <div id="top" className="site-frame">
        <div className="hero-gradient relative overflow-hidden rounded-b-[2.75rem]">
          <Navbar />
          <Hero />
        </div>
        <main id="main">
          <TechStrip />
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
        <Footer />
      </div>
    </div>
  );
}
