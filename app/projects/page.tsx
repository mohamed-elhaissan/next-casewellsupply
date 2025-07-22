"use client";
import Header from "../components/Header";
import ffLandingPage from "../../public/projects/b5a79033ac520a6d0f56ab437b4a5ade8dca24a2.png";
import commerStore from "../../public/projects/Home.png";
import storeDesign from "../../public/projects/original-5fd4642ef1335c41fba6b920ab037b3d.jpg";
import portfolioNumberOne from "../../public/projects/Screenshot 2025-07-17 130546.png";
import portfolioNumberTwo from "../../public/projects/Screenshot 2025-07-17 153237.png";
import buzzly from "../../public/projects/screnShoot (1).svg";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
interface projectType {
  title: string;
  description: string;
  imageURL: StaticImageData;
}

export default function Projects() {
  return (
    <div className="regular">
      <Header />
      <div className=" mt-42 p-20 ">
        <motion.h2
          initial={{
            y: 50,
            opacity: 0,
            scale: 0.95,
          }}
       animate = {{
        y : 0,
        opacity : 1,
        scale : 1
       }}
          transition={{
            duration: 1.2,
            ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
          }}
          className="regular text-6xl text-white"
        >
          Projects
        </motion.h2>
      </div>
      <div>
        {projects.map((item, index) => (
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
            }}
            key={index}
            className="border-t sticky top-0 left-0 bg-[#0E0E0E] border-t-[#272727] py-20 px-5 md:p-20 flex flex-col-reverse md:flex-row items-center justify-between"
          >
            <div>
              <h2 className="text-2xl mt-10 md:mt-0 md:text-5xl">{item.title}</h2>
              <p className="light text-xl mt-2 opacity-80">
                {item.description}
              </p>
            </div>
            <Image
              src={item.imageURL}
              alt={`${item.imageURL}`}
              width={500}
              height={200}
              priority={true}
            />
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

const projects: projectType[] = [
  {
    title: "Designer Portfolio ",
    description:
      "modern Portfolio  made With Next js , Tailwind , Framer motion focusing In high-performance  ",
    imageURL: portfolioNumberTwo,
  },
  {
    title: "E commerce Store",
    description:
      "A Next.js + Tailwind + Gsap, E commerce Store  modern, high-performance For ",
    imageURL: commerStore,
  },

  {
    title: "E commerce Store Design",
    description: "E commerce Store  modern made With Figma ",
    imageURL: storeDesign,
  },
  {
    title: "Designer Portfolio ",
    description:
      "modern Portfolio  made With Next js , Tailwind , Framer motion focusing In high-performance  ",
    imageURL: portfolioNumberOne,
  },
  {
    title: "F&F Landing Page",
    description:
      "A Next.js + Tailwind + Framer Motion landing page  modern, high-performance For F&F Brand",
    imageURL: ffLandingPage,
  },
  {
    title: "Library For React",
    description:
      "Open Source Library For React  made With React js , Tailwind ,Typescript, Framer motion focusing In high-performance  ",
    imageURL: buzzly,
  },
];
