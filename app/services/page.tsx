import Header from "../components/Header";
import Footer from "../components/Footer";

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
        <div className="flex justify-between p-20 border-b border-b-[#272727]">
          <div className="flex  gap-1">
            <h2 className="text-4xl">Custom Website Design</h2>
            <sub className="text-xl">(01)</sub>
          </div>

          <p className="text-2xl">
            Unique, user-focused designs that reflect your brand’s identity and
            values.
          </p>
        </div>
        <div className="flex justify-between p-20 border-b border-b-[#272727]">
          <div className="flex  gap-1">
            <h2 className="text-4xl">Frontend Development</h2>
            <sub className="text-xl">(02)</sub>
          </div>

          <p className="text-2xl">
            Fast, responsive, and accessible interfaces built with HTML, CSS,
            JavaScript, React, or Next.js.
          </p>
        </div>
        <div className="flex justify-between p-20 border-b border-b-[#272727]">
          <div className="flex  gap-1">
            <h2 className="text-4xl">UI/UX Design</h2>
            <sub className="text-xl">(03)</sub>
          </div>

          <p className="text-2xl">
            Clean, intuitive interfaces and user flows optimized for engagement
            and ease of use.
          </p>
        </div>
        <div className="flex justify-between p-20 border-b border-b-[#272727]">
          <div className="flex  gap-1">
            <h2 className="text-4xl">Animation & Micro-interactions</h2>
            <sub className="text-xl">(04)</sub>
          </div>

          <p className="text-2xl">
            Smooth, modern animations using Framer Motion, GSAP, and CSS for
            dynamic experiences.
          </p>
        </div>
        <div className="flex justify-between p-20 border-b border-b-[#272727]">
          <div className="flex  gap-1">
            <h2 className="text-4xl">Responsive Design</h2>
            <sub className="text-xl">(05)</sub>
          </div>

          <p className="text-2xl">
            Mobile-first development for seamless viewing across all devices.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
