import React from "react";
import { DiscordIcon, GithubIcon, TwitterIcon } from "./icons";

export default function AboutMe(): JSX.Element {
    return (
    <div className="my-4 flex gap-x-2">
        <div className="mr-4 flex-1/3 flex flex-col gap-y-2 items-center bg-white shadow-lg rounded-xl">
            <div className="mb-4 flex items-center justify-center inline-block">
                <img
                    className="rounded-full w-40 h-40 object-cover object-center flex items-center justify-center"
                    src="/img/profileImage.jpg"
                    alt="Profile Image"
                />
            </div>
            
            <div className="flex flex-row items-center gap-x-2 mt-4 my-0 mb-0 p-0">
                <TwitterIcon />
                <DiscordIcon />
                <GithubIcon />
            </div>
        </div>
        <div className="col-span-4 bg-green-200 col-start-1 font-appleFont flex-2/3 rounded-xl shadow-lg">
            <p>Hello, and welcome to my website. My name is Trung and I’m a passionate full-stack developer with 4 years’ experience in the banking sector, specializing in Java Spring Boot, Angular/VueJs, and cloud technologies. I build scalable solutions for complex environments and enjoy learning and sharing knowledge. I’m ready to take on new challenges and embark on a new mission with you, turning ideas into impactful results that inspire, connect, drive success.</p>  
            <p>This website serves as a place to showcase my skills, demonstrate my ability to build innovative projects, and connect with tech recruiters and the wider tech community!</p>
        </div>
    </div>
    );
}