import React from "react";

type Experience = {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  imageUrl?: string;
  className?: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "Full-stack Developer",
    company: "Capgemini",
    duration: "May 2023 - Present",
    description: "Developing web applications using React and Node.js.",
    imageUrl: "",
    className: "rounded-xl flex-1/3 h-100 mr-4 p-4 bg-[url(/img/cacibSQY.jpg)] bg-cover bg-center text-white font-bold shadow-xs shadow-gray-200 hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500"
  },
  {
    id: 2,
    title: "Full-stack Developer",
    company: "Capgemini",
    duration: "March 2021 - December 2022",
    description: "Implemented responsive designs using HTML, CSS, and JavaScript.",
    imageUrl: "/img/capgeminiBrest.jpg",
    className: "rounded-xl flex-1/3 h-100 mr-4 p-4 bg-[url(/img/capgeminiBrest.jpg)] bg-cover bg-center text-white font-bold shadow-xs shadow-gray-200 hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500"
  },
  {
    id: 3,
    title: "Full-stack Developer",
    company: "Famoco",
    duration: "March 2020 - September 2020",
    description: "Worked on RESTful APIs using Node.js and Express.",
    className: "rounded-xl flex-1/3 h-100 mr-4 p-4 bg-[url(/img/famoco.png)] bg-cover bg-center text-white font-bold shadow-xs shadow-gray-200 hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500"
  }
];

const myExperiencesIntroduction = 
`Behind every project is a lesson, and behind every
challenge is growth. These are the experiences that define my path.`;

export default function MyExperiences(): JSX.Element {
  return (
	<div className="my-4 flex flex-col gap-y-2">
	  <h2 className="text-4xl font-bold mb-4 font-appleFont">{myExperiencesIntroduction}</h2>
	  <div className="flex gap-x-2 mt-4">
        {experiences.map((exp) => (
            <div
              key={exp.id}
              className={exp.className}
            >
              <h3>{exp.title}</h3>
              <p>{exp.company}</p>
              <p>{exp.duration}</p>
            </div>
		    ))}
    </div>
	</div>
  );
}