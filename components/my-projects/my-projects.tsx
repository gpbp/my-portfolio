import React from "react";
import {Card, CardBody} from "@heroui/card";
import {Avatar} from "@heroui/avatar";
import { Envelope, Followers, MapPin } from "../icons";
import styles from "./my-project.module.css";

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
        className: "rounded-xl flex-1/3 mr-4 h-100 text-white font-bold p-4 bg-[url(/img/meshImageFrame.png)] bg-cover bg-center shadow-xs shadow-gray-200 hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500",
        finished: true
    },
    {
        id: 2,
        name: "Task Manager App",
        description: "A web app to manage daily tasks and boost productivity.",
        techStack: ["Next.js", "Node.js", "MongoDB"],
        imageUrl: "/img/taskmanager.jpg",
        projectUrl: "https://your-taskmanager.com",
        className: "rounded-xl flex-1/3 mr-4 h-100 font-bold p-4 bg-[url(/img/taskManagement.png)] bg-cover bg-start shadow-xs shadow-gray-200 hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500",
        finished: false
    },
    {
        id: 3,
        name: "Food ideas",
        description: "A platform to explore and share food recipes.",
        techStack: ["React", "Redux", "Express"],
        imageUrl: "/img/ecommerce.jpg",
        projectUrl: "https://your-ecommerce.com",
        className: "rounded-xl flex-1/3 mr-4 h-100 text-white font-bold p-4 bg-[url(/img/foodIdeas.jpg)] bg-cover bg-start shadow-xs shadow-gray-200 hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500",
        finished: false
    }
];

const myProjectsIntroduction =
    `Here are a selection of my projects. Each one is a blend  of clean code, creative design, and practical problem-solving.`;

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