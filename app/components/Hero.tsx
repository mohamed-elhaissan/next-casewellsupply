"use client";

import Image from "next/image";
import TextAnimation from "./TextAnimation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-[100vh]  text-white  p-10 sm:p-20 flex flex-col items-center gap-20 justify-center   rounded-2xl">
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
        className="w-1/2 text-center"
      >
        <motion.h2 className="text-xl md:text-5xl mt-10   ">
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
            <span className="regular">
              A developer who designs. A designer who codes.
            </span>
            <span className="opacity-50 text-3xl light">
              I help startups and brands bring ideas to life with powerful code
              and thoughtful design. Clean, modern, and always user-first
            </span>
          </motion.span>
        </motion.h2>
      </motion.div>
    </div>
  );
}
