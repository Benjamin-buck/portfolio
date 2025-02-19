"use client";
import Hero from "@/components/Hero";
import Modal from "@/components/Modal";
import VsCode from "@/components/VsCode";
import Image from "next/image";
import { useState } from "react";

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
