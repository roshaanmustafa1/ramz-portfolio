import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Stats } from "@/components/Stats"
import { Expertise } from "@/components/Expertise"
import { Achievements } from "@/components/Achievements"
import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { Education } from "@/components/Education"
import { SkillsGrid } from "@/components/SkillsGrid"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ScrollToTop } from "@/components/ScrollToTop"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#140c1c] flex flex-col font-sans selection:bg-[#8750f7]/20 selection:text-[#2a1454]">
      {/* 1. Header with Sticky Behavior & Mobile Drawer */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Metrics / Animated Statistics Section */}
        <Stats />

        {/* 4. Expertise / Services Section */}
        <Expertise />

        {/* 5. Achievements / Case-Study Portfolio Section */}
        <Achievements />

        {/* 6. Experience Section */}
        <ExperienceTimeline />

        {/* 7. Dedicated Education & Credentials Section */}
        <Education />

        {/* 8. Skills Grid Section */}
        <SkillsGrid />

        {/* 8. About Section */}
        <About />

        {/* 9. Contact Section with Zod Validation */}
        <Contact />
      </main>

      {/* 10. Footer Area */}
      <Footer />

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  )
}
