import DrawableCard from "@/ui-components/drawable-card/DrawableCard";
import React from "react";

type TechnologyDisplay = {
  name: string;
  color: string;
}

type Experience = {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  contractType: string;
  imageUrl?: string;
  shrunkImageBackgroundPosition?: string;
  techStack?: TechnologyDisplay[];
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "Full-stack Developer",
    company: "Capgemini",
    duration: "May 2023 - Present",
    contractType: "Permanent Contract",
    description: "On a consulting mission at Crédit Agricole CIB: Build, maintain and improve a full-stack application of CACIB’s Trade Commodities Finance department that digitalizes the workflow of the Transaction Business Committee process and the management of CACIB’s clients Economic Position.",
    imageUrl: "/img/cacibSQY.jpg",
    shrunkImageBackgroundPosition: "bg-left",
    techStack: [
      { name: "VueJS", color: "bg-green-300" },
      { name: "Java Spring Boot", color: "bg-red-500" },
      { name: "PostgreSQL", color: "bg-yellow-500" },
      { name: "GRPC", color: "bg-orange-500" },
      { name: "Kubernetes", color: "bg-green-500" },
    ],
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
    techStack: [
      { name: "VueJS", color: "bg-green-300" },
      { name: "Java Spring Boot", color: "bg-red-500" },
      { name: "Oracle Database", color: "bg-yellow-500" },
      { name: "Restful API", color: "bg-orange-500" }
    ],
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
    techStack: [
      { name: "Angular", color: "bg-green-300" },
      { name: "Java Spring Boot", color: "bg-red-500" },
      { name: "JHipster", color: "bg-yellow-500" },
      { name: "PostgreSQL", color: "bg-orange-500" },
      { name: "MongoDB", color: "bg-purple-500" }
    ],
  }
];


export default function MyExperiences(): JSX.Element {
  return (
	<div className="my-4 flex flex-col gap-y-2">
    <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-4xl font-bold w-2/3">
      Behind every project is a <p className="bg-gradient-to-b from-blue-500 to-indigo-500
 inline-block text-transparent bg-clip-text">lesson</p>, and behind every
challenge is <p className="bg-gradient-to-b from-blue-500 to-indigo-500
 inline text-transparent bg-clip-text">growth</p>.
    </div>
    <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-lg text-gray-500 font-bold w-1/2">This is a brief overview of my professional journey. Each experience has contributed to my growth and skill set.</div>
	  <div className="flex gap-x-8 mt-4 px-8">
        {
          experiences.map((exp) => {
            const content = (
              <div>
                  <div>{exp.description}</div>
                  <div className="mt-4">
                    {exp.techStack?.map((tech) => (
                      <div key={tech.name} className={`rounded-full ${tech.color} px-2 py-1 inline-block text-black text-center mr-2`}>
                        <p className="font-roboto-mono text-xs">{tech.name}</p>
                      </div>
                    ))}
                  </div>
              </div>
            );

            return (
              <DrawableCard title={exp.title} subtitle={exp.company} imageUrl={exp.imageUrl || '/img/meshImageFrame.jpg'} content={content} additionalCssClass="flex-1/3" shrunkImageBackgroundPosition={exp.shrunkImageBackgroundPosition} />
            );
        })}
      </div>
    </div>);
}