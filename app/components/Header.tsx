"use client";
import { AnimatePresence, motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <motion.header
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        ease: "easeInOut",
      }}
      className="flex h-[10vh] min-h-[60px] border-b border-b-[#272727] max-h-[80px] text-white sticky z-40 w-full top-0 left-0  p-5 bg-whit/40  backdrop-blur-2xl  justify-between items-center "
    >
      <h1 className="text-xl">
        <Link href={"/"} className="regular relative z-50">
          elhaissan
        </Link>
      </h1>
      <nav className="hidden md:block">
        <div className="h-full flex regular  gap-5 items-center justify-center">
          <Link
            href={"services"}
            className="py-1   cursor-pointer text-xl hoveredLink "
          >
            <TextAnimation title="Services" semiTitle="Services" />
          </Link>
          <Link
            href={"projects"}
            className="py-1    hoveredLink text-xl cursor-pointer "
          >
            <TextAnimation title="Projects" semiTitle="Projects" />
          </Link>
          <Link
            href={"about"}
            className="py-1    hoveredLink  text-xl cursor-pointer "
          >
            <TextAnimation title="About" semiTitle="About" />
          </Link>
          <a
            href="mailto:mohamedelhaissan12@gmail.com"
            className="hoveredLink py-1 text-xl"
          >
            <TextAnimation title="Let's Talk" semiTitle="Let's Talk" />
          </a>
        </div>
      </nav>

      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="hover:bg-[var(--hoveredBackground)] md:hidden regular text-xl hover:text-[var(--foreground)]  relative z-50  px-4 py-1 rounded-md cursor-pointer"
      >
        {openMenu ? "close" : "Menu"}
      </button>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key={"navContainer"}
            initial={{
              y: 50,
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
            }}
            exit={{
              y: 50,
              opacity: 0,
              scale: 0.95,
            }}
            className="absolute left-0 top-0 w-full h-screen"
          >
            <nav className="bg-[#0E0E0E] light   w-full h-screen rounded-2xl z-20  text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl">
              <div className="h-full flex flex-col text-6xl gap-4 items-center justify-center">
                <Link
                  href={"services"}
                  className="py-1   cursor-pointer text-5xl hoveredLink "
                >
                  <TextAnimation title="Services" semiTitle="Services" />
                </Link>
                <Link
                  href={"projects"}
                  className="py-1    hoveredLink text-5xl cursor-pointer "
                >
                  <TextAnimation title="Projects" semiTitle="Projects" />
                </Link>
                <Link
                  href={"about"}
                  className="py-1    hoveredLink  text-5xl cursor-pointer "
                >
                  <TextAnimation title="About" semiTitle="About" />
                </Link>
                <a
                  href="mailto:mohamedelhaissan12@gmail.com"
                  className="hoveredLink py-1 text-5xl"
                >
                  <TextAnimation title="Let's Talk" semiTitle="Let's Talk" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
