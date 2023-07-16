import Head from "next/head";
import NavBar from "/components/NavBar";
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
      <div >
        <NavBar />
        <Hero />
        <section id="about" className="pt-[88px]">
          <About />
        </section>
        <section id="work" className="pt-[88px]">
          <Work />
        </section>
      </div>
    </main>
  );
}
