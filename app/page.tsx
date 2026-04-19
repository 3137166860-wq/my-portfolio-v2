import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import SelectedWorksSection from "@/components/SelectedWorksSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WorkflowSection />
      <SelectedWorksSection />
      <FooterSection />
    </main>
  );
}
