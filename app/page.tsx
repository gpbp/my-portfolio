import Introduction from "@/components/introduction/introduction";
import MyExperiences from "@/components/my-experiences/MyExperiences";
import MyNetwork from "@/components/my-network/MyNetwork";
import MyProjects from "@/components/my-projects/MyProjects";
import MyServices from "@/components/my-services/MyServices";

export default function Home(): JSX.Element {
  
  return (
    <div className="flex flex-col gap-y-8">
      <Introduction />
      <MyServices />
      <MyExperiences />
      <MyProjects />
      <MyNetwork />
    </div>
  );
}