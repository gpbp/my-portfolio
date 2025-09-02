import { Card, CardBody } from "@heroui/card";
import styles from "./introduction.module.css";
import SpotifyWidget from "./spotify-widget";
import {Button} from "@heroui/button";
import { ArrowRight } from "../icons";

export default function Introduction(): JSX.Element {
  return (
    <div className={`flex flex-row gap-x-2 mt-12`}>
      <div
        className="h-120 my-4 inline w-1/2"
      >
        <div className="flex flex-col h-full w-full">
          <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-6xl font-bold">
            Building <p className="bg-gradient-to-r from-red-500 to-orange-500 inline-block text-transparent bg-clip-text">clean code</p> and <p className="bg-gradient-to-r from-red-500 to-orange-500 inline text-transparent bg-clip-text">beautiful</p> experiences.
          </div>
          <div className="font-roboto-mono inline-block px-8 py-4 text-6xl font-bold">
            <Button className="text-tiny text-white bg-black/20 flex flex-row" color="primary" radius="lg" size="sm" variant="solid">
              Let's collaborate <ArrowRight />
            </Button>
            
          </div>
        </div>
      </div>
      <div className="rounded-xl h-120 my-4 w-1/2 flex flex-row gap-x-4 items-center justify-center">
        <SpotifyWidget />
        <Card className={`${styles.animation} py-4 bg-[#0d1117] w-1/5 cursor-pointer w-1/3 h-85`}>
            <CardBody className="overflow-visible py-2">
                <div className="flex flex-col w-full items-center mb-4">
                    <img
                        className="rounded-full w-40 h-40 object-cover object-center flex"
                        src="/img/profileImage.jpg"
                        alt="Profile Image"
                    />
                </div>
                <div className="text-white font-['Segoe UI'] font-bold text-xl">Pham Hai Trung</div>
                <div className="font-['Segoe UI'] text-sm text-[#9198a1]">gpbp</div>
                <div className="font-['Segoe UI'] text-sm text-white"> 💻 Full-Stack Developer | ☁️ Cloud Enthusiast | 🚀 Always learning </div>
            </CardBody>
        </Card>
      </div>
    </div>
  );
}