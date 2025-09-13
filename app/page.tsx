'use client'

import Introduction from "@/components/introduction/introduction";
import MyExperiences from "@/components/my-experiences/MyExperiences";
import MyProjects from "@/components/my-projects/MyProjects";
import { useRef, useState } from "react";

export default function Home(): JSX.Element {
   const [shrunk, setShrunk] = useState(false);

  function handleReset(): void {
    setShrunk(false);
  }

  const timeoutRef = useRef<number | null>(null);

  const handleHover = () => {
    if (!shrunk) {
      setShrunk(true);

      // Clear any existing timeout to avoid overlapping
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Reset shrunk after 2 seconds
      timeoutRef.current = window.setTimeout(() => {
        setShrunk(false);
        timeoutRef.current = null;
      }, 20000);
    }
  };
  
  return (
    <div className="flex flex-col gap-y-4">
      <Introduction />
      <MyExperiences />
      <MyProjects />
    </div>
  );
}