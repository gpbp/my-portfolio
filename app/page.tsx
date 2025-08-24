import AboutMe from "@/components/about-me";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from "@/components/icons"
import MyExperiences from "@/components/my-experiences";

export default function Home(): JSX.Element {
  return (
    <div className="m-0 p-0 flex flex-col gap-y-2 mx-12">
      <div
        className="rounded-xl h-120 my-4 inline grid bg-[url('/img/meshImageFrame.png')] bg-bottom bg-cover"
      >
        <div className="flex items-center justify-center h-full w-full">
          <div className="text-white font-appleFont inline-block px-8 py-4 text-2xl font-bold">
            Hello, my name is Trung and I build well-designed applications for the web
          </div>
        </div>
      </div>
      
      <AboutMe />
      <MyExperiences />
    </div>
  );
}
