"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface servicesType {
  service: string;
  count: number;
  description: string;
}

export default function Services() {
  return (
    <div className="regular">
      <Header />
      <div className=" mt-42 p-20">
        <h2 className="regular text-6xl text-white">Services</h2>
        <p className="light text-xl w-1/2 opacity-50 tracking-wide">
          I craft tailor-made digital experiences that blend design, art
          direction, and seamless integration. My approach merges visual
          harmony, aesthetic precision, and technical efficiency to bring clear,
          bold, and meaningful projects to life—each one uniquely shaped to meet
          your needs.
        </p>
      </div>
      <div>
        {services.map((item, index) => (
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
         
            key={index}
            className="flex justify-between p-20 border-b border-b-[#272727]"
          >
            <div className="flex  gap-1">
              <h2 className="text-4xl">{item.service}</h2>
              <sub className="text-xl">{`(${item.count})`}</sub>
            </div>

            <p className="text-2xl text-zinc-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

const services: servicesType[] = [
  {
    service: "Custom Website Design",
    count: 1,
    description: `Unique, user-focused designs that reflect your brand's identity and
            values.`,
  },
  {
    service: "Frontend Development",
    count: 2,
    description: `Fast, responsive, and accessible interfaces built with HTML, CSS,
            JavaScript, React, or Next.js.
          `,
  },
  {
    service: "UI/UX Design",
    count: 3,
    description: `Clean, intuitive interfaces and user flows optimized for engagement
            and ease of use.
          `,
  },
  {
    service: "Problem Solving",
    count: 4,
    description: `Analytical approach to identifying technical challenges and 
            implementing efficient, scalable solutions.
          `,
  },
  {
    service: "Backend Development",
    count: 5,
    description: `Robust server-side applications, APIs, and databases built with 
            Node.js, Python, or other modern technologies.
          `,
  },
  {
    service: "Mobile Development",
    count: 6,
    description: `Cross-platform mobile applications for iOS and Android using 
            React Native, Flutter, or native development.
          `,
  },
];
