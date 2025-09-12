'use client'

import Introduction from "@/components/introduction/introduction";
import MyExperiences from "@/components/my-experiences/MyExperiences";
import MyProjects from "@/components/my-projects/MyProjects";
import { useRef, useState } from "react";
import styles from "./hellostyle.module.css";

export default function Home(): JSX.Element {
   const [shrunk, setShrunk] = useState(false);

  /*function handleHover(): void {
    if (!shrunk) {
      setShrunk(true);
    }
  };*/

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
      }, 5000);
    }
  };
  
  return (
    <div className="flex flex-col gap-y-4">
      <Introduction />
      <MyExperiences />
      <MyProjects />
      <div className="my-4 flex flex-col gap-y-2">
        <div className="flex gap-x-2 mt-4 px-8">
          <div className="relative left-0 top-0 rounded-xl font-roboto-mono text-black w-1/3 h-100 mr-4 font-bold bg-green-200 shadow-md shadow-gray-200 hover:shadow-gray-500 hover:cursor-pointer hover:scale-105 hover:z-10 ease-in-out duration-500 flex" onMouseEnter={handleHover} onMouseLeave={handleReset}>
            <div className="h-full flex-1/3 rounded-l-xl">grey</div>
            <div className={`bg-yellow-500 h-full flex-2/3 rounded-r-xl p-4 ${styles.customScrollbar}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor lectus sit amet orci laoreet mollis. Aenean a tortor in nisl consequat vehicula a sed justo. Sed ut lobortis urna. Nunc at felis luctus, sollicitudin enim et, convallis urna. Fusce luctus massa lectus, sit amet tristique ipsum molestie sed. Mauris convallis, nunc at maximus ultricies, tortor urna laoreet enim, sed viverra ex tellus et ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
            <div
                  className={`absolute left-0 top-0 p-4 h-100 font-roboto-mono  bg-[url(/img/cacibSQY.jpg)] bg-cover bg-start bg-no-repeat ${shrunk ? "w-1/3 bg-left rounded-l-xl" : "w-full bg-center rounded-xl"} text-white font-bold ease-in-out duration-700`}
                >
                  <p className="text-xl">Full-stack Developer</p>
                  <p>Capgemini</p>
                </div>
            </div>
          </div>
	      </div>
    </div>
  );
}


//className="absolute left-0 top-0 w-1/2 h-full rounded-xl font-roboto-mono  text-white font-bold opacity-50 z-10"