"use client";
import { Card, CardBody } from "@heroui/card";
import styles from "./introduction.module.css";
import SpotifyWidget from "./spotify-widget";
import {Button} from "@heroui/button";
import { ArrowDownTray, ArrowRight } from "../icons";
import BitcoinWidget from "./BitcoinWidget";
import { Lang, useLang } from "@/app/context/LanguageContext";
import { useTranslations } from "@/app/i18n/useTranslations";

export default function Introduction(): JSX.Element {
  const { lang, switchLang } = useLang();
  const t = useTranslations();

  const toggleLang = (language: Lang) => {
    switchLang(language);
  };
  
  return (
    <div className={`flex flex-row gap-x-2 mt-20`}>
      <div
        className="h-120 my-4 inline w-1/2"
      >
        <div className="flex flex-col h-full w-full items-center justify-center">
          <div className="font-roboto-mono inline-block px-8 py-4 text-6xl font-bold">
            <p>
              {t.introduction.title.buildingClean}{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 inline-block text-transparent bg-clip-text">
                {t.introduction.title.cleanCode}
              </span>{" "}
              {t.introduction.title.and}{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 inline text-transparent bg-clip-text">
                {t.introduction.title.beautiful}
              </span>{" "}
              {t.introduction.title.experiences}
            </p>
          </div>
          <div className="font-roboto-mono flex gap-x-4 items-start justify-items-start px-8 py-4 text-6xl font-bold w-full">
            <a
              href="https://www.linkedin.com/in/trung-pham-798b04107"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row flex-1/3"
            >
              <Button className="text-tiny text-white w-full" color="primary" radius="lg" size="sm" variant="solid">
                {t.introduction.buttons.collaborate} <ArrowRight />
              </Button>
            </a>
            <a href="/files/cv.pdf" download className="flex flex-row flex-1/3">
              <Button className="text-tiny text-white w-full" color="primary" radius="lg" size="sm" variant="solid" aria-label="Download CV">
                {t.introduction.buttons.downloadCV} <ArrowDownTray />
              </Button>
            </a>
            <div className="flex rounded-xl bg-primary font-roboto-mono text-tiny text-white h-full flex-1/3">
              <div
                className={`cursor-pointer flex items-center justify-center flex-1/3 ${lang === 'en' ? 'bg-white/20' : ''}`}
                onClick={() => toggleLang('en')}
              >
                En
              </div>
              <div 
                className={`cursor-pointer flex items-center justify-center flex-1/3 border-x border-white/20 ${lang === 'fr' ? 'bg-white/20' : ''}`}
                onClick={() => toggleLang('fr')}
              >
                Fr
              </div>
              <div 
                className={`cursor-pointer flex items-center justify-center flex-1/3 ${lang === 'vi' ? 'bg-white/20' : ''}`}
                onClick={() => toggleLang('vi')}
              >
                Vi
              </div>
          </div>
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
                        src="/img/profileImage.jpeg"
                        alt="Profile Image"
                    />
                </div>
                <div className="text-white font-segoeUI font-bold text-xl">{t.introduction.profile.name}</div>
                <div className="font-segoeUI text-sm text-[#9198a1]">{t.introduction.profile.username}</div>
                <div className="font-segoeUI text-sm text-white">{t.introduction.profile.bio}</div>
            </CardBody>
        </Card>
      </div>
    </div>
  );
}