import React from "react";

type Project = {
    id: number;
    name: string;
    description: string;
    techStack: string[];
    imageUrl?: string;
    projectUrl?: string;
    className?: string;
    finished?: boolean;
};

const projects: Project[] = [
    {
        id: 1,
        name: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and experiences.",
        techStack: ["React", "TypeScript", "Tailwind CSS"],
        imageUrl: "/img/meshImageFrame.jpg",
        projectUrl: "https://your-portfolio.com",
        className: "rounded-xl font-roboto-mono flex-1/3 h-100 text-white font-bold p-4 bg-[url(/img/meshImageFrame.png)] bg-cover bg-center shadow-xs shadow-gray-200 hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500 hover:scale-105 hover:z-10",
        finished: true
    },
    {
        id: 2,
        name: "Task Manager App",
        description: "A web app to manage daily tasks and boost productivity.",
        techStack: ["Next.js", "Node.js", "MongoDB"],
        imageUrl: "/img/taskmanager.jpg",
        projectUrl: "https://your-taskmanager.com",
        className: "rounded-xl font-roboto-mono flex-1/3 h-100 font-bold p-4 bg-[url(/img/taskManagement.png)] bg-cover bg-start shadow-xs shadow-gray-200 hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500 hover:scale-105 hover:z-10",
        finished: false
    },
    {
        id: 3,
        name: "Food ideas",
        description: "A platform to explore and share food recipes.",
        techStack: ["React", "Redux", "Express"],
        imageUrl: "/img/ecommerce.jpg",
        projectUrl: "https://your-ecommerce.com",
        className: "rounded-xl font-roboto-mono flex-1/3 h-100 text-white font-bold p-4 bg-[url(/img/foodIdeas.jpg)] bg-cover bg-start shadow-xs shadow-gray-200 hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500 hover:scale-105 hover:z-10",
        finished: false
    }
];

export default function MyProjects(): JSX.Element {
    return (
        <div className="my-4 flex flex-col gap-y-2">
            <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-4xl font-bold w-2/3">
      A blend of <p className="bg-gradient-to-l from-orange-400 via-amber-400 to-yellow-300 inline-block text-transparent bg-clip-text">clean code</p>, <p className="bg-gradient-to-l from-orange-400 via-amber-400 to-yellow-300 inline text-transparent bg-clip-text">creative design</p>, and <p className="bg-gradient-to-l from-orange-400 via-amber-400 to-yellow-300 inline text-transparent bg-clip-text">practical problem-solving</p>.
            </div>
            <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-lg text-gray-500 font-bold w-1/2">
            Welcome to my projects! Here you can find a selection of my work, showcasing my skills and creativity.</div>
            <div className="flex gap-x-8 mt-4 px-8">
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