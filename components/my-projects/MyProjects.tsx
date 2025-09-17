import TechStack from "@/ui-components/tech-stack/TechStack";
import SlidingCard from "@/ui-components/drawable-card/SlidingCard";
import React from "react";

type Project = {
    id: number;
    name: string;
    description: string;
    techStack: string[];
    imageUrl: string;
    projectUrl?: string;
    githubUrl?: string;
    onProduction: boolean;
    shrunkImageBackgroundPosition: string;
};

const projects: Project[] = [
    {
        id: 1,
        name: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and experiences.",
        techStack: ["React", "TypeScript", "Tailwind CSS"],
        imageUrl: "/img/meshImageFrame.png",
        projectUrl: "localhost:3000",
        githubUrl: "https://github.com/gpbp/my-portfolio",
        onProduction: true,
        shrunkImageBackgroundPosition: "bg-center"
    },
    {
        id: 2,
        name: "UI Library",
        description: "A UI library for React applications",
        techStack: ["Next.js", "Node.js", "PostgreSQL"],
        imageUrl: "/img/uiLibrary.png",
        projectUrl: "https://your-taskmanager.com",
        githubUrl: "https://github.com/gpbp/my-ui-library",
        onProduction: false,
        shrunkImageBackgroundPosition: "bg-center"
    },
    {
        id: 3,
        name: "Food ideas",
        description: "A platform to explore and share food recipes.",
        techStack: ["React", "Redux", "Tailwind CSS"],
        imageUrl: "/img/foodIdeas.jpg",
        projectUrl: "https://www.recipetineats.com/",
        githubUrl: "https://github.com/gpbp/food-ideas",
        onProduction: false,
        shrunkImageBackgroundPosition: "bg-center"
    }
];

export default function MyProjects(): JSX.Element {
    return (
        <div className="my-4 flex flex-col gap-y-2">
            <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-4xl font-bold w-2/3">
      A blend of <p className="bg-gradient-to-l from-teal-400 via-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text">clean code</p>, <p className="bg-gradient-to-l from-teal-400 via-cyan-400 to-blue-500 inline text-transparent bg-clip-text">creative design</p>, and <p className="bg-gradient-to-l from-teal-400 via-cyan-400 to-blue-500 inline text-transparent bg-clip-text">practical problem-solving</p>.
            </div>
            <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-lg text-gray-500 font-bold w-1/2">
            Welcome to my projects! Here you can find a selection of my work, showcasing my skills and creativity.</div>
            <div className="flex gap-x-8 mt-4 px-8">
                    {
                      projects.map((project) => {
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
                    })}
                  </div>
                </div>);
            }

