import AboutMe from "@/components/about-me";
import Introduction from "@/components/introduction/introduction";
import MyExperiences from "@/components/my-experiences";
import MyProjects from "@/components/my-projects/my-projects";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col gap-y-4">
      <Introduction />
      <MyExperiences />
      <MyProjects />
    </div>
  );
}
