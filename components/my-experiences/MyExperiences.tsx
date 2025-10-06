"use client"

import TechStack from "@/ui-components/tech-stack/TechStack";
import SlidingCard from "@/ui-components/sliding-card/SlidingCard";
import React, { useEffect, useState } from "react";
import Carousel from "@/ui-components/carousel/Carousel";
import { Skeleton } from "@heroui/skeleton";

export type Experience = {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  contractType: string;
  imageUrl: string;
  techStack: string[];
};

export type ExperienceDisplay = Experience & {
  shrunkImageBackgroundPosition: string;
};


const experiences: ExperienceDisplay[] = [
  {
    id: 1,
    title: "Full-stack Developer",
    company: "Capgemini",
    duration: "May 2023 - Present",
    contractType: "Permanent Contract",
    description: "On a consulting mission at Crédit Agricole CIB: Build, maintain and improve a full-stack application of CACIB’s Trade Commodities Finance department that digitalizes the workflow of the Transaction Business Committee process and the management of CACIB’s clients Economic Position.",
    imageUrl: "/img/cacibSQY.jpg",
    shrunkImageBackgroundPosition: "bg-left",
    techStack: ["VueJS", "Java Spring Boot", "PostgreSQL", "GRPC", "Kubernetes"]
  },
  {
    id: 2,
    title: "Full-stack Developer",
    company: "Capgemini",
    contractType: "Permanent Contract",
    duration: "March 2021 - December 2022",
    description: "On a consulting mission at Crédit Mutuel Arkéa: Develop Restful APIs that allows bankers to monitor the mortgage process (prêt immobilier) of their clients.",
    imageUrl: "/img/capgeminiBrest.jpg",
    shrunkImageBackgroundPosition: "bg-right",
    techStack: ["VueJS", "Java Spring Boot", "Oracle Database", "Restful API"]
  },
  {
    id: 3,
    title: "Full-stack Developer",
    company: "Famoco",
    contractType: "Internship",
    duration: "March 2020 - September 2020",
    description: "Design and develop full-stack applications to streamline the digitalization of food vouchers, enhancing security and reducing fraud. The initiative is sponsored by the United Nations, supporting global efforts toward transparency and efficiency in aid distribution.",
    imageUrl: "/img/famoco.png",
    shrunkImageBackgroundPosition: "bg-center",
    techStack: ["VueJS", "Java Spring Boot", "JHipster", "PostgreSQL", "MongoDB"]
  },
  {
    id: 4,
    title: "Something",
    company: "Google",
    contractType: "Internship",
    duration: "March 2025 - March 2027",
    description: "hello world",
    imageUrl: "/img/meshImageFrame.png",
    shrunkImageBackgroundPosition: "bg-center",
    techStack: ["VueJS", "Java Spring Boot", "JHipster", "PostgreSQL", "MongoDB"]
  }
];

export default function MyExperiences(): JSX.Element { 
  const [experiences, setExperiences] = useState<ExperienceDisplay[]>([]);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/experiences');
        if (response.ok) {
          const data = await response.json();
          setExperiences(data);
        }
      } catch (error) {
        setError("Failed to fetch experiences");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (loading || experiences.length === 0) {
      setCards([<Skeleton key={1} className="flex-1/3 h-100 rounded-xl hover:cursor-pointer">
      </Skeleton>, <Skeleton key={2} className="flex-1/3 h-100 rounded-xl hover:cursor-pointer">
      </Skeleton>, <Skeleton key={3} className="flex-1/3 h-100 rounded-xl hover:cursor-pointer">
      </Skeleton>]);
    } else {
      setCards(
        experiences
          ?.slice()
          .sort((a, b) => a.id - b.id)
          .map((exp) => {
        const content = (
          <div>{exp.description}</div>
        );

        const header = (
          <div>
            <div className="text-xl">{exp.title}</div>
            <div className="text-xs">{exp.company}</div>
            <div className="text-xs">{exp.contractType}</div>
            <div className="text-xs">{exp.duration}</div>
          </div>
        );

        const footer = (
          <div className="mt-4">
            <TechStack techStack={exp.techStack}/>
          </div>
        );

        return (
          <SlidingCard
            key={exp.id}
            header={header}
            content={content}
            footer={footer}
            imageUrl={exp.imageUrl}
            className="flex-1/3 h-100"
            shrunkImageBackgroundPosition={exp.shrunkImageBackgroundPosition}
          />
        );
      })
      );
    }
  }, [loading]);
  
  return (
	<div className="flex flex-col gap-y-2">
    <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-4xl font-bold w-2/3">
      Behind every project is a <p className="bg-gradient-to-b from-blue-500 to-indigo-500
 inline-block text-transparent bg-clip-text">lesson</p>, and behind every
challenge is <p className="bg-gradient-to-b from-blue-500 to-indigo-500
 inline text-transparent bg-clip-text">growth</p>.
    </div>
    <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-lg text-gray-500 font-bold w-1/2">This is a brief overview of my professional journey. Each experience has contributed to my growth and skill set.</div>
    <Carousel cards={cards}/>
  </div>);
}