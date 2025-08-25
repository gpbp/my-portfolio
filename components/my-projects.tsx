import React from "react";

type Project = {
    id: number;
    name: string;
    description: string;
    techStack: string[];
    imageUrl?: string;
    projectUrl?: string;
    className?: string;
};

const projects: Project[] = [
    {
        id: 1,
        name: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and experiences.",
        techStack: ["React", "TypeScript", "Tailwind CSS"],
        imageUrl: "/img/portfolio.jpg",
        projectUrl: "https://your-portfolio.com",
        className: "rounded-xl flex-1/3 h-80 mr-4 p-4 bg-gray-200"
    },
    {
        id: 2,
        name: "Task Manager App",
        description: "A web app to manage daily tasks and boost productivity.",
        techStack: ["Next.js", "Node.js", "MongoDB"],
        imageUrl: "/img/taskmanager.jpg",
        projectUrl: "https://your-taskmanager.com",
        className: "rounded-xl flex-1/3 h-80 mr-4 p-4 bg-gray-200"
    },
    {
        id: 3,
        name: "E-commerce Platform",
        description: "A scalable e-commerce platform with payment integration.",
        techStack: ["React", "Redux", "Express"],
        imageUrl: "/img/ecommerce.jpg",
        projectUrl: "https://your-ecommerce.com",
        className: "rounded-xl flex-1/3 h-80 mr-4 p-4 bg-gray-200"
    }
];

const myProjectsIntroduction =
    `Every project is a new adventure in learning and building. Here are some of the works I'm proud of.`;

export default function MyProjects(): JSX.Element {
    return (
        <div className="my-4 flex flex-col gap-y-2 h-200">
            <h2 className="text-4xl font-bold mb-4 font-appleFont">{myProjectsIntroduction}</h2>
            <div className="flex gap-x-2 mt-4 bg-gray-100">
                {projects.map((exp) => (
                    <div
                    key={exp.id}
                    className={exp.className}
                    >
                    <h3>{exp.name}</h3>
                    <p>{exp.description}</p>
                    </div>
                    ))}
            </div>
        </div>
    );
}