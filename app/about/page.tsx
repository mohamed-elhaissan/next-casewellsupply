'use client'

import {motion} from 'framer-motion'




import Header from "../components/Header";
import Footer from "../components/Footer";
export default function About() {
  return (
    <div>
      <Header />

      <motion.div
       initial={{
        y: 50,
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      }}
      className=" mt-42 p-5 lg:p-20">
        <h2 className="regular text-3xl md:text-5xl lg:text-6xl text-white">About Me</h2>
        <p className="light text-base md:text-3xl lg:text-5xl  mt-10 opacity-50 tracking-wide">
          I'm a creative web developer and designer crafting clean, fast, and
          animated digital experiences. I build responsive websites and apps
          using React, Next.js, Tailwind CSS, Framer Motion, and TypeScript —
          blending design with code to bring ideas to life.
        </p>
      </motion.div>
      <Footer />
    </div>
  );
}
