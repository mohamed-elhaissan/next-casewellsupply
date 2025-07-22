"use client";

import Link from "next/link";
import Image from "next/image";
import arrow from "../../public/image/arrow.svg";
import { motion } from "framer-motion";

export default function About() {
  const currentDate = new Date();
  return (
    <div className="h-screen     rounded-2xl">
      <div
        className="flex items-center p-40
     flex-col justify-center h-full"
      >
        <Link href={","}>
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="flex items-center   justify-center gap-10 overflow-hidden"
          >
            <h2 className="light  text-center  text-5xl flex gap-2">
              {"Got a project in mind?"
                .split(" ")
                .map((item: string, index: number) => (
                  <motion.span
                    variants={{
                      initial: {
                        marginLeft: 0,
                      },
                      hovered: {
                        marginLeft: 10,
                      },
                    }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
            </h2>
            <div className="relative">
              <motion.span
                className="inline-block"
                variants={{
                  initial: {
                    y: "-100%",
                  },
                  hovered: {
                    y: 0,
                  },
                }}
              >
                <Image src={arrow} alt="arrow Svg" />
              </motion.span>
              <motion.span
                variants={{
                  initial: {
                    y: "0",
                  },
                  hovered: {
                    y: "100%",
                  },
                }}
                className="inline-block absolute inset-0"
              >
                <Image src={arrow} alt="arrow Svg" />
              </motion.span>
            </div>
          </motion.div>
        </Link>
      </div>
      <div className="flex justify-between regular items-center p-4 border-t border-t-[#272727]">
        <div className="flex gap-5 items-center justify-center">
          <Link
            target="_blank"
            href={"https://x.com/elhcn"}
            className="hoveredLink "
          >
            X
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mohamed-elhaissan-050509301/"}
            target="_blank"
            className="hoveredLink"
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/mohamed-elhaissan"}
            className="hoveredLink"
          >
            Github
          </Link>
        </div>
        <span>&copy; {currentDate.getFullYear()}</span>
      </div>
    </div>
  );
}
