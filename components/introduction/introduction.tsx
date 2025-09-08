import { Card, CardBody } from "@heroui/card";
import styles from "./introduction.module.css";
import SpotifyWidget from "./spotify-widget";
import {Button} from "@heroui/button";
import { ArrowDownTray, ArrowRight } from "../icons";
import BitcoinWidget from "./BitcoinWidget";

export default function Introduction(): JSX.Element {
  return (
    <div className={`flex flex-row gap-x-2 mt-30`}>
      <div
        className="h-120 my-4 inline w-1/2"
      >
        <div className="flex flex-col h-full w-full items-center justify-center">
          <div className="font-roboto-mono inline-block px-8 py-4 text-6xl font-bold">
            <p>Building <span className="bg-gradient-to-r from-red-500 to-orange-500 inline-block text-transparent bg-clip-text">clean code</span> and <span className="bg-gradient-to-r from-red-500 to-orange-500 inline text-transparent bg-clip-text">beautiful</span> experiences.</p>
          </div>
          <div className="font-roboto-mono flex gap-x-4 items-start justify-items-start px-8 py-4 text-6xl font-bold w-full">
            <Button className="text-tiny text-white flex flex-row" color="primary" radius="lg" size="sm" variant="solid">
              Let's collaborate <ArrowRight />
            </Button>
            <Button className="text-tiny text-white flex flex-row" color="primary" radius="lg" size="sm" variant="solid">
              Download my CV <ArrowDownTray />
            </Button>
          </div>
        </div>
      </div>
      <div className="rounded-xl h-120 my-4 w-1/2 flex flex-row gap-x-4 items-center justify-center">
        <div className="flex flex-col gap-y-4">
          <SpotifyWidget />
          <BitcoinWidget />
        </div>
        <Card className={`${styles.animation_12s} py-4 bg-[#0d1117] cursor-pointer w-1/3 h-85`}>
            <CardBody className="overflow-visible py-2">
                <div className="flex flex-col w-full items-center mb-4">
                    <img
                        className="rounded-full w-40 h-40 object-cover object-center flex"
                        src="/img/profileImage.jpg"
                        alt="Profile Image"
                    />
                </div>
                <div className="text-white font-segoeUI font-bold text-xl">Pham Hai Trung</div>
                <div className="font-segoeUI text-sm text-[#9198a1]">gpbp</div>
                <div className="font-segoeUI text-sm text-white"> 💻 Full-Stack Developer | ☁️ Cloud Enthusiast | 🚀 Always learning </div>
            </CardBody>
        </Card>
      </div>
    </div>
  );
}