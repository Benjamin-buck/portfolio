import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Capabilities />
      <Process />
      <Experience />
    </main>
  );
}
