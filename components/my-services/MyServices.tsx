import React from "react";
import {Image} from "@heroui/image";

type Service = {
    id: number;
    name: string;
    description: string;
    iconUrl: string;
    className?: string;
}
const services: Service[] = [
    {
        id: 1,
        name: "Web Development",
        description: "Building responsive and dynamic websites using modern technologies like React, Next.js, and Tailwind CSS.",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
        className: "bg-blue-100"
    },
    {
        id: 2,
        name: "Backend Development",
        description: "Creating robust backend systems with Node.js, Express, and databases like MongoDB and PostgreSQL.",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
        className: "bg-green-100"
    },
    {
        id: 3,
        name: "UI/UX Design",   
        description: "Designing user-friendly interfaces and experiences using tools like Figma and Adobe XD.",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/919/919841.png",
        className: "bg-purple-100"
    }
]

export default function MyServices(): JSX.Element {
  return (
    <div className="my-4 flex flex-col gap-y-2">
      <div className="flex gap-x-8 mt-4 px-8">
        {
          services.map((service) => {
            return (
                <div className="rounded-lg flex-1/3 mt-4 flex flex-col items-center shadow-xs shadow-gray-500 hover:shadow-md hover:shadow-gray-700 hover:cursor-pointer ease-in-out duration-500 hover:scale-105 hover:z-10 h-30 bg-blue-200 opacity-70">
                    <div className="text-center font-roboto-mono font-bold">{service.name}</div>
                    <div className="text-center text-sm text-gray-500 font-roboto-mono">{service.description}</div>
                </div>
            );
        })}
      </div>
    </div>);
}