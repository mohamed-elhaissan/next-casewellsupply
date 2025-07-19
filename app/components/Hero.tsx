"use client";

import Image from "next/image";
import TextAnimation from "./TextAnimation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-[100vh]   bg-[var(--background)] p-10 sm:p-20 flex flex-col items-end gap-20 justify-end text-[var(--foreground)]  rounded-2xl">
      <motion.div
        initial={{
          y: -10,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: 2,
          bounce: 0,
        }}
        className=""
      >
        <motion.h2 className="w-1/2  text-xl md:text-5xl mt-10   ">
          <motion.span
            initial={{
              y: -10,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0,
            }}
            className="flex flex-col gap-4 "
          >
            <span>A developer who designs. A designer who codes.</span>
            <span className="opacity-50 text-3xl">
              I help startups and brands bring ideas to life with powerful code
              and thoughtful design. Clean, modern, and always user-first
            </span>
          </motion.span>
        </motion.h2>
      </motion.div>
      <div className="flex items-center justify-between  w-full ">
        <motion.div
          initial={{
            scale: 0.5,
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
          }}
          className="opacity-60"
        >
          <h3>Freelance</h3>
          <p>Developer & Designer</p>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.5,
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
          }}
          className="opacity-60"
        >
          <h3>Based in</h3>
          <p>Morocco</p>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.5,
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
          }}
          className="opacity-60 hover:opacity-100"
        >
          <h3>Get in touch</h3>
          <span className="cursor-pointer opacity-50 hover:opacity-100">
            <TextAnimation
              title="mohamedelhaissan12@gmail.com"
              semiTitle="mohamedelhaissan12@gmail.com"
            />
          </span>
        </motion.div>
      </div>
    </div>
  );
}
