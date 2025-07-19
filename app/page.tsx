import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="tracking-tight selection:bg-[var(--hoveredBackground)] selection:text-black">
      <Header />
      <Hero/>
    </div>
  );
}
