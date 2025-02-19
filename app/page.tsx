import Hero from "@/components/Hero";
import VsCode from "@/components/VsCode";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mt-20">
        <VsCode />
      </section>
    </main>
  );
}
