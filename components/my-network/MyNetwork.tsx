"use client";

import React, { useEffect, useState } from "react";
import {Image} from "@heroui/image";
import { Skeleton } from "@heroui/skeleton";
import { useTranslations } from "@/app/i18n/useTranslations";

type ITProfessional = {
    id: number;
    name: string;
    role: string;
    linkedInUrl: string;
    imageUrl?: string;
}

export default function MyNetwork(): JSX.Element {
  const [professionals, setProfessionals] = useState<ITProfessional[]>([]);
  const [loading, setLoading] = useState(false);
  const [professionalDisplay, setProfessionalDisplay] = useState<React.ReactNode[]>([]);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations();
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch('/api/professionals');
          if (response.ok) {
            const data = await response.json();
            setProfessionals(data);
          }
        } catch (error) {
          setError("Failed to fetch professionals");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  
    useEffect(() => {
      if (loading || professionals.length === 0) {
        setProfessionalDisplay([<Skeleton key={1} className="rounded-full hover:cursor-pointer h-[240px] w-[240px]" />,
        <Skeleton key={2} className="rounded-full hover:cursor-pointer h-[240px] w-[240px]" />,
        <Skeleton key={3} className="rounded-full hover:cursor-pointer h-[240px] w-[240px]" />]);
      } else {
          setProfessionalDisplay(
            professionals.map((prof) => {
              return (
                <div key={prof.id} className="flex flex-col items-center">
                  <Image src={prof.imageUrl} alt={prof.name} className={`rounded-full cursor-pointer`} height={240} width={240}/>
                  <div className="text-center font-roboto-mono font-bold">{prof.name}</div>
                  <div className="text-center text-sm text-gray-500 font-roboto-mono">{prof.role}</div>
                </div>
              );
          }));
      }
    }, [loading]);

  return (
    <div className="flex flex-col gap-y-2">
    <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-4xl font-bold w-2/3">
      {t.myNetwork.title.success} <p className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 inline-block text-transparent bg-clip-text">{t.myNetwork.title.what}</p> {t.myNetwork.title.youKnow} <p className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 inline text-transparent bg-clip-text">{t.myNetwork.title.who}</p> {t.myNetwork.title.youKnow2}
    </div>
    <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-lg text-gray-500 font-bold w-1/2">{t.myNetwork.description}</div>
      <div className="flex gap-x-8 px-8 py-4">
        {professionalDisplay}
      </div>
    </div>);
}