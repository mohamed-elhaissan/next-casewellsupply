import Link from "next/link";
import Image from "next/image";
import arrow from "../../public/image/arrow.svg";
export default function About() {
  return (
    <div
      className="   flex items-center p-40
     flex-col justify-center  rounded-2xl"
    >
      <Link href={","} className="flex items-center justify-center gap-10">
        <h2 className="light  text-5xl">Got a project in mind?</h2>
        <Image src={arrow} alt="arrow Svg" />
      </Link>
      <div></div>
    </div>
  );
}
