import React from "react";
import {Image} from "@heroui/image";

type ITProfessional = {
    id: number;
    name: string;
    role: string;
    linkedInUrl: string;
    imageUrl?: string;
    className?: string;
}
const professionals: ITProfessional[] = [
    {
        id: 1,
        name: "John Doe",
        role: "Software Engineer",
        linkedInUrl: "https://images.ctfassets.net/l7h59hfnlxjx/5g97MzE205qjO2zX4GyWUf/85530ceb7e80d83ac4b0a2f2eb001869/e91bbc527e3dfe8306537af2cd50674d?q=75&w=1014&fm=webp",
        imageUrl: "https://images.ctfassets.net/l7h59hfnlxjx/5g97MzE205qjO2zX4GyWUf/85530ceb7e80d83ac4b0a2f2eb001869/e91bbc527e3dfe8306537af2cd50674d?q=75&w=1014&fm=webp",
        className: "bg-blue-500"
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Product Manager",
        linkedInUrl: "https://www.linkedin.com/in/janesmith",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/scu4qti103e8rupc57dl2f2j96.jpg",
        className: "bg-green-500"
    },
    {
        id: 3,
        name: "Roger F.",
        role: "UX Designer",
        linkedInUrl: "https://www.linkedin.com/in/alicejohnson",
        imageUrl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1322028686.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
        className: "bg-purple-500"
    }
];

export default function MyNetwork(): JSX.Element {
  return (
    <div className="flex flex-col gap-y-2">
    <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-4xl font-bold w-2/3">
      Success isn’t just <p className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 inline-block text-transparent bg-clip-text">WHAT</p> you know, it’s also <p className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 inline text-transparent bg-clip-text">WHO</p> you know.
    </div>
    <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-lg text-gray-500 font-bold w-1/2">Building strong professional relationships has always been a key part of my journey. Here are the networks and communities where I actively collaborate and grow.</div>
      <div className="flex gap-x-8 px-8 py-4">
        {
          professionals.map((prof) => {
            return (
              <div className="flex flex-col items-center">
                <Image src={prof.imageUrl} alt={prof.name} className={`rounded-full ${prof.className} cursor-pointer`} height={240} width={240}/>
                <div className="text-center font-roboto-mono font-bold">{prof.name}</div>
                <div className="text-center text-sm text-gray-500 font-roboto-mono">{prof.role}</div>
              </div>
            );
        })}
      </div>
    </div>);
}