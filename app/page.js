import Head from "next/head";
import Hero from "/components/Hero.jsx";
import About from "/components/About";
import Work from "/components/Work";
import Contact from '../components/Contact';
import { Metadata } from "next";

export const metadata = {
  title: "Khalid Hosein",
  description: "Khalid Hosein Portfolio",
};


export default function Home() {

  return (
    <main>
      <div>
        <section id="home" className="h-full xl:h-screen">
          <Hero />
        </section>
        <section id="about" className="pt-[88px]">
          <About />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
