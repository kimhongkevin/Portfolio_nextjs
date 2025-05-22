import Image from "next/image";
import { heroData } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full min-h-screen px-6 sm:px-[10%] py-10 flex flex-col sm:flex-row items-center justify-center gap-10 ">
      
      {/* Profile Picture */}
      <div className="w-40 h-40 sm:w-60 sm:h-60 relative rounded-full overflow-hidden shadow-md ">
        <Image
          src={heroData.image}
          alt="profile-img"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Text Section */}
      <div className="w-full max-w-3xl text-center sm:text-left">
        <h1 className="text-xl sm:text-3xl font-bold text-slate-700">
          Hi, I am <span className="text-sky-500">{heroData.name}</span>!
        </h1>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-sky-500 mt-2 text-shadow-lg text-shadow-white ">
          {heroData.subtitle}
        </h2>
        <p className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed italic text-justify">
          {heroData.description}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <Link href={heroData.buttonPortfolio.link} passHref>
            <Button
              className="text-white hover:text-sky-500"
            >
              {heroData.buttonPortfolio.text}
            </Button>
          </Link>
          <a
            href={heroData.buttonCV.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white"
            >
              {heroData.buttonCV.text}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
