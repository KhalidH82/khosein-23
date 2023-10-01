import Head from "next/head";
import Hero from "/components/Hero.jsx";
import About from "/components/About";
// import Work from "/components/Work";
import Technologies from "/components/Technologies"
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
        <section id="home">
          <Hero />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
