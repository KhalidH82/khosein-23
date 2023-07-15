'use client'
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import NavBar from "/components/NavBar";
import Hero from "/components/Hero.jsx";
import TechPanel from "@/components/TechPanel";

export default function Home() {

  return (
    <main>
      <Head>
        <title>Khalid Hosein | Full Stack Web Developer</title>
        <meta name="description" content="Khalid Hosein" />
        <link rel="icon" href="/kh-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div >
        <NavBar />
        <Hero />
        <div id="tech" className="pt-[88px]">
          <TechPanel />
        </div>
      </div>
    </main>
  );
}
