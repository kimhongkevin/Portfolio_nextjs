'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projectData } from "@/constants";
import Image from "next/image";
import { CircleArrowLeft,CircleArrowRight } from "lucide-react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
  };

  const prevIndex = (activeIndex - 1 + projectData.length) % projectData.length;
  const nextIndex = (activeIndex + 1) % projectData.length;

  const renderCard = (index: number, position: "prev" | "active" | "next") => {
    const isActive = position === "active";

    return (
      <motion.div
        key={projectData[index].id}
        initial={{ scale: isActive ? 1 : 0.9, filter: isActive ? "blur(0px)" : "blur(3px)", opacity: isActive ? 1 : 0.7 }}
        animate={{ scale: isActive ? 1 : 0.9, filter: isActive ? "blur(0px)" : "blur(3px)", opacity: isActive ? 1 : 0.7 }}
        transition={{ duration: 0.4 }}
        className={`w-64 md:w-75 lg:w-90 xl:w-105 aspect-square flex-shrink-0 rounded-xl overflow-hidden shadow-xl transition-all duration-300 ${isActive ? "shadow-black/40" : "shadow-black/20"} cursor-pointer`}
      >
        <Card className="flex flex-col h-full items-center p-4 bg-sky-100 transition-colors">
          <Image
            src={projectData[index].img}
            alt={projectData[index].title}
            width={320}
            height={180}
            className="w-full h-60 object-cover rounded-md mb-1"
            loading="lazy"
          />
          <h3 className="text-lg font-semibold text-center mb-1 text-sky-500">{projectData[index].title}</h3>
          <p className="text-sm text-slate-700 text-left line-clamp-3 overflow-y-visible">{projectData[index].desc}</p>
        </Card>
        <a
          href={projectData[index].link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
          aria-label={`Visit ${projectData[index].title}`}
        ></a>
      </motion.div>
    );
  };

  return (
    <section className="relative w-full px-6 sm:px-[10%] py-10 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-sky-500">Explore My Projects</h2>
      <p className="text-sm text-slate-700 text-center italic">Click on the cards to navigate to the project</p>
      {/* Carousel container */}
      <div className="relative w-full h-[64vh] flex items-center justify-center overflow-x-hidden no-scrollbar">
        {/* Left Button */}
        <Button
          onClick={handlePrevious}
          aria-label="Previous Project"
          className="absolute left-2 md:left-4 z-10 bg-white/30 hover:bg-sky-300 backdrop-blur-sm border border-white/20 text-xl"
          size="icon"
        >
          <CircleArrowLeft size={24} className="text-slate-700" />
        </Button>

        {/* Carousel */}
        <div className="flex items-center justify-center space-x-4 px-12 md:px-20">
          {renderCard(prevIndex, "prev")}
          {renderCard(activeIndex, "active")}
          {renderCard(nextIndex, "next")}
        </div>

        {/* Right Button */}
        <Button
          onClick={handleNext}
          aria-label="Next Project"
          className="absolute right-2 md:right-4 z-10 bg-white/30 hover:bg-sky-300 backdrop-blur-sm border border-white/20 text-xl"
          size="icon"
        >
          <CircleArrowRight size={24} className="text-slate-700" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="mt-6 flex space-x-2">
        {projectData.map((_, index) => (
          <button
            type="button"
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-sky-500" : "bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

