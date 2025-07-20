import Header from "../components/Header";
import Footer from "../components/Footer";
export default function About() {
  return (
    <div>
      <Header />

      <div className=" mt-42 p-20">
        <h2 className="regular text-6xl text-white">About Me</h2>
        <p className="light text-5xl  mt-10 opacity-50 tracking-wide">
          I'm a creative web developer and designer crafting clean, fast, and
          animated digital experiences. I build responsive websites and apps
          using React, Next.js, Tailwind CSS, Framer Motion, and TypeScript —
          blending design with code to bring ideas to life.
        </p>
      </div>
      <Footer />
    </div>
  );
}
