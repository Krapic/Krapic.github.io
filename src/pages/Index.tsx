import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SectionDivider } from "@/components/SectionDivider";
import { Skeleton } from "@/components/ui/skeleton";

const ContributionGraph = lazy(() =>
  import("@/components/ContributionGraph").then((m) => ({ default: m.ContributionGraph })),
);
const ExperienceSection = lazy(() =>
  import("@/components/ExperienceSection").then((m) => ({ default: m.ExperienceSection })),
);
const EducationSection = lazy(() =>
  import("@/components/EducationSection").then((m) => ({ default: m.EducationSection })),
);
const ProjectsSection = lazy(() =>
  import("@/components/ProjectsSection").then((m) => ({ default: m.ProjectsSection })),
);
const SkillsSection = lazy(() =>
  import("@/components/SkillsSection").then((m) => ({ default: m.SkillsSection })),
);
const CertificatesSection = lazy(() =>
  import("@/components/CertificatesSection").then((m) => ({ default: m.CertificatesSection })),
);
const TestimonialsSection = lazy(() =>
  import("@/components/TestimonialsSection").then((m) => ({ default: m.TestimonialsSection })),
);
const InterestsSection = lazy(() =>
  import("@/components/InterestsSection").then((m) => ({ default: m.InterestsSection })),
);
const ContactSection = lazy(() =>
  import("@/components/ContactSection").then((m) => ({ default: m.ContactSection })),
);

const SectionFallback = () => (
  <div className="py-24 px-6">
    <div className="max-w-4xl mx-auto space-y-6">
      <Skeleton className="h-8 w-48 mx-auto" />
      <Skeleton className="h-40 w-full rounded-xl" />
    </div>
  </div>
);

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-background"
    >
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <Suspense fallback={<SectionFallback />}>
          <ContributionGraph />
          <SectionDivider />
          <ExperienceSection />
          <EducationSection />
          <SectionDivider />
          <ProjectsSection />
          <SkillsSection />
          <SectionDivider />
          <CertificatesSection />
          <TestimonialsSection />
          <SectionDivider />
          <InterestsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default Index;
