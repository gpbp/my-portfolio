import React from "react";
import ServiceCard from "./ServiceCard";
import { AmazonWebServices, Angular, MongoDB, PostgreSQL, ReactIcon, Spring, TailwindCSS, Vue } from "../icons";

type Service = {
    id: number;
    name: string;
    description: string;
    footer?: React.ReactNode;
}
const services: Service[] = [
    {
        id: 1,
        name: "Frontend Development",
        description: "I craft interfaces guided by clarity and reusability, using principles of clean design, test-driven practices, and patterns that make user experiences both reliable and adaptable.",
        footer: (
          <div className="flex gap-x-4">
            <Vue></Vue>
            <Angular></Angular> 
            <ReactIcon></ReactIcon>
            <TailwindCSS></TailwindCSS>
          </div>
        )
    },
    {
        id: 2,
        name: "Backend Development",
        description: "I design back-end systems with SOLID foundations, tested business logic, and proven design patterns to ensure scalability, resilience, and long-term maintainability.",
        footer: (
          <div className="flex gap-x-4">
            <Spring></Spring>
            <PostgreSQL></PostgreSQL>
            <MongoDB></MongoDB>
          </div>
        )
    },
    {
        id: 3,
        name: "AWS Cloud Development",
        description: "I build cloud solutions with clean architectures, automation-first practices, and tested resilience, delivering infrastructures that scale predictably and securely.",
        footer: (
          <div className="flex gap-x-4">
            <AmazonWebServices></AmazonWebServices>
          </div>
        )
    }
]

export default function MyServices(): JSX.Element {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex gap-x-8 px-8">
        {
          services.map((service) => {
            return (
              <ServiceCard key={service.id} title={service.name} content={service.description} footer={service.footer}></ServiceCard>
            );
        })}
      </div>
    </div>);
}