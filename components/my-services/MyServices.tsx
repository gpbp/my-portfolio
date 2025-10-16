"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import { AmazonWebServices, Angular, MongoDB, PostgreSQL, ReactIcon, Spring, TailwindCSS, Vue } from "../icons";
import { useTranslations } from "@/app/i18n/useTranslations";

type Service = {
    id: number;
    name: string;
    description: string;
    footer?: React.ReactNode;
}

export default function MyServices(): JSX.Element {
  const t = useTranslations();
  
  const services: Service[] = [
    {
        id: 1,
        name: t.myServices.frontend.name,
        description: t.myServices.frontend.description,
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
        name: t.myServices.backend.name,
        description: t.myServices.backend.description,
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
        name: t.myServices.cloud.name,
        description: t.myServices.cloud.description,
        footer: (
          <div className="flex gap-x-4">
            <AmazonWebServices></AmazonWebServices>
          </div>
        )
    }
  ];
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