"use client";

import { useEffect, useRef, useState } from "react";

type DrawableCardProps = {
    header: React.ReactNode;
    content: React.ReactNode;
    footer: React.ReactNode;
    imageUrl: string;
    className: string;
    shrunkImageBackgroundPosition?: string;
};

export default function SlidingCard({header, content, footer, imageUrl, shrunkImageBackgroundPosition, className}: DrawableCardProps) {
    const [shrunk, setShrunk] = useState(false);

    const timeoutRef = useRef<number | null>(null);

    const SHRINK_TIMEOUT = 20000; // 20 seconds

    function handleHover(): void {
        if (!shrunk) {
            setShrunk(true);

            // Clear any existing timeout to avoid overlapping
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = window.setTimeout(() => {
                setShrunk(false);
                timeoutRef.current = null;
            }, SHRINK_TIMEOUT);
        }
    }

    function handleReset(): void {
        setShrunk(false);
    } 

    return (
        <div className={`${className} relative rounded-xl font-roboto-mono font-bold bg-green-200 shadow-md shadow-gray-200 hover:shadow-gray-500 hover:cursor-pointer ease-in-out duration-500 flex`} onMouseEnter={handleHover} onMouseLeave={handleReset}>
            <div className="h-full flex-1/3 rounded-l-xl"></div>
            <div className="bg-white h-full flex-2/3 rounded-r-xl p-4 overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:rounded-r-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-500 hover:[&::-webkit-scrollbar-thumb]:bg-gray-900 hover:[&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:m-3 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:m-4">
                <div>{content}</div>
                <div>{footer}</div>
            </div>
            <div
                key={imageUrl}
                className={`absolute left-0 top-0 p-4 h-100 font-roboto-mono bg-cover bg-start bg-no-repeat ${shrunk ? `w-1/3 ${shrunkImageBackgroundPosition} rounded-l-xl` : "w-full bg-center rounded-xl"} text-white font-bold ease-in-out duration-500`}
                style={{ backgroundImage: `url(${imageUrl ? imageUrl : '/img/meshImageFrame.png'})` }}
            >
                {header}
            </div>  
        </div>
    );
}