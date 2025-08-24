import React from "react";

type Experience = {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "ABC Corp",
    duration: "Jan 2020 - Present",
    description: "Developing web applications using React and Node.js."
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "XYZ Inc",
    duration: "Jun 2018 - Dec 2019",
    description: "Implemented responsive designs using HTML, CSS, and JavaScript."
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "LMN Ltd",
    duration: "Jan 2017 - May 2018",
    description: "Worked on RESTful APIs using Node.js and Express."
  }
];

export default function MyExperiences(): JSX.Element {
  return (
	<div className="my-4 flex flex-col gap-y-2 h-8">
	  <h2 className="">My Experiences</h2>
	  <div className="flex gap-x-2">
        {experiences.map((exp) => (
            <div key={exp.id} className="rounded-xl bg-gray-200 h-100 flex-1/3 mr-4">
                <h3>{exp.title}</h3>
                <p>{exp.company}</p>
                <p>{exp.duration}</p>
                <p>{exp.description}</p>
            </div>
		    ))}
      </div>
	</div>
  );
}