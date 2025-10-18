"use client"

import TechStack from "@/ui-components/tech-stack/TechStack";
import SlidingCard from "@/ui-components/sliding-card/SlidingCard";
import React, { useEffect, useState } from "react";
import Carousel from "@/ui-components/carousel/Carousel";
import { Skeleton } from "@heroui/skeleton";
import { DEFAULT_LANG, useLang } from "@/app/context/LanguageContext";
import { useTranslations } from "@/app/i18n/useTranslations";

export type Experience = {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  contractType: string;
  imageUrl: string;
  techStack: string[];
  languageCode: string;
};

export type ExperienceDisplay = Experience & {
  shrunkImageBackgroundPosition: string;
};

export default function MyExperiences(): JSX.Element { 
  const [experiences, setExperiences] = useState<ExperienceDisplay[]>([]);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { lang } = useLang();
  const t = useTranslations();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const langParam = !!lang ? `${lang}` : DEFAULT_LANG;
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experiences?lang=${langParam}`);
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
  }, [lang]);

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
      {t.myExperiences.title.behind} <p className="bg-gradient-to-b from-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text">{t.myExperiences.title.lesson}</p>{t.myExperiences.title.andBehind} <p className="bg-gradient-to-b from-blue-500 to-indigo-500 inline text-transparent bg-clip-text">{t.myExperiences.title.growth}</p>{t.myExperiences.title.dot}
    </div>
    <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-lg text-gray-500 font-bold w-1/2">{t.myExperiences.description}</div>
    <Carousel cards={cards}/>
  </div>);
}