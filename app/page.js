import Head from "next/head";
import Hero from "/components/Hero.jsx";
import About from "/components/About";
import Work from "/components/Work";
import { Metadata } from "next";

export const metadata = {
  title: "Khalid Hosein",
  description: "Khalid Hosein Portfolio",
};
 

export default function Home() {

  return (
    <main>
      <div>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="pt-[88px] h-screen">
          <About />
        </section>
        <section id="work">
          <Work />
        </section>
      </div>
    </main>
  );
}
