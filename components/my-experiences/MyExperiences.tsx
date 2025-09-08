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
    className: "rounded-xl font-roboto-mono flex-1/3 h-100 mr-4 p-4 bg-[url(/img/cacibSQY.jpg)] bg-cover bg-center text-white font-bold shadow-xs shadow-gray-200 hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500 hover:scale-105 hover:z-10"
  },
  {
    id: 2,
    title: "Full-stack Developer",
    company: "Capgemini",
    duration: "March 2021 - December 2022",
    description: "Implemented responsive designs using HTML, CSS, and JavaScript.",
    imageUrl: "/img/capgeminiBrest.jpg",
    className: "rounded-xl font-roboto-mono flex-1/3 h-100 mr-4 p-4 bg-[url(/img/capgeminiBrest.jpg)] bg-cover bg-center text-white font-bold shadow-xs shadow-gray-200 hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500 hover:scale-105 hover:z-10"
  },
  {
    id: 3,
    title: "Full-stack Developer",
    company: "Famoco",
    duration: "March 2020 - September 2020",
    description: "Worked on RESTful APIs using Node.js and Express.",
    className: "rounded-xl font-roboto-mono flex-1/3 h-100 mr-4 p-4 bg-[url(/img/famoco.png)] bg-cover bg-center text-white font-bold shadow-xs shadow-gray-200 hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500 hover:scale-105 hover:z-10"
  }
];


export default function MyExperiences(): JSX.Element {
  return (
	<div className="my-4 flex flex-col gap-y-2">
    <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-4xl font-bold w-2/3">
      Behind every project is a <p className="bg-gradient-to-t from-green-300 to-green-900 inline-block text-transparent bg-clip-text">lesson</p>, and behind every
challenge is <p className="bg-gradient-to-t from-green-300 to-green-900 inline text-transparent bg-clip-text">growth</p>.
    </div>
    <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-lg text-gray-500 font-bold w-1/3">This is a brief overview of my professional journey. Each experience has contributed to my growth and skill set.</div>
	  <div className="flex gap-x-2 mt-4 px-8">
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