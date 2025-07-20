"use client";

import { useSpring } from "motion/react";
import About from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import { frame, motion } from "motion/react";
import { RefObject, useEffect, useRef } from "react";

export default function Home() {
  return (
    <div className=" selection:bg-[var(--hoveredBackground)] selection:text-black">
      <Header />
      <Hero />
      <About />
    </div>
  );
}
