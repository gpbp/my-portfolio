"use client";

import TechStack from "@/ui-components/tech-stack/TechStack";
import SlidingCard from "@/ui-components/sliding-card/SlidingCard";
import React, { useEffect, useState } from "react";
import Carousel from "@/ui-components/carousel/Carousel";
import { Skeleton } from "@heroui/skeleton";
import { DEFAULT_LANG, useLang } from "@/app/context/LanguageContext";

type Project = {
    id: number;
    name: string;
    description: string;
    techStack: string[];
    imageUrl: string;
    projectUrl?: string;
    githubUrl?: string;
    onProduction: boolean;
};

type ProjectDisplay = Project & {
  shrunkImageBackgroundPosition: string;
}

export default function MyProjects(): JSX.Element {
  const [projects, setProjects] = useState<ProjectDisplay[]>([]);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { lang } = useLang();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const langParam = !!lang ? `${lang}` : DEFAULT_LANG;
        const response = await fetch(`/api/projects?lang=${langParam}`);
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [lang]);

   useEffect(() => {
    if (loading || projects.length === 0) {
      setCards([<Skeleton key={1} className="flex-1/3 h-100 rounded-xl hover:cursor-pointer">
      </Skeleton>, <Skeleton key={2} className="flex-1/3 h-100 rounded-xl hover:cursor-pointer">
      </Skeleton>, <Skeleton key={3} className="flex-1/3 h-100 rounded-xl hover:cursor-pointer">
      </Skeleton>]);
    } else {
      setCards(
        projects
          ?.slice()
          .sort((a, b) => a.id - b.id)
          .map((project) => {
          const content = (
            <div className="text-wrap">{project.description}</div>
          );

          const header = (
            <div>
              <div className="text-xl">{project.name}</div>
            </div>
          );

          const projectLink = project.onProduction ?
                  (<div className="mt-4">
                      <span>Link to the website: <a href={project.projectUrl} className="text-black hover:bg-gradient-to-b from-blue-500 to-indigo-500 hover:text-transparent bg-clip-text">{project.name}</a></span>
                  </div>) : (<></>)

          const footer = (
            <div className="text-wrap">
              {projectLink}
              <div className="mt-4">
                  <span>Link to the Github'repository: <a href={project.githubUrl} className="text-black hover:bg-gradient-to-b from-blue-500 to-indigo-500 hover:text-transparent bg-clip-text">{project.githubUrl}</a></span>
              </div>
              <TechStack techStack={project.techStack}/>
            </div>
          );

          return (
            <SlidingCard key={project.id} header={header} content={content} footer={footer} imageUrl={project.imageUrl} className="flex-1/3 h-100" shrunkImageBackgroundPosition={project.shrunkImageBackgroundPosition} />
          );
        })
      );
    }
  }, [loading]);

  return (
    <div className="flex flex-col gap-y-2">
        <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-4xl font-bold w-2/3">
  A blend of <p className="bg-gradient-to-l from-teal-400 via-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text">clean code</p>, <p className="bg-gradient-to-l from-teal-400 via-cyan-400 to-blue-500 inline text-transparent bg-clip-text">creative design</p>, and <p className="bg-gradient-to-l from-teal-400 via-cyan-400 to-blue-500 inline text-transparent bg-clip-text">practical problem-solving</p>.
        </div>
        <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-lg text-gray-500 font-bold w-1/2">
        Welcome to my projects! Here you can find a selection of my work, showcasing my skills and creativity.</div>
        <Carousel cards={cards} />
    </div>
  );
}

