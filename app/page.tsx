import {Button} from "@heroui/button";

export default function Home() {
  return (
    <div className="m-0 p-0 flex flex-col gap-y-2">
      <div className="rounded-full h-12 bg-gray-200 my-4 mx-25">
        <div className="relative left-20">navbar</div>
      </div>
      <div
        className="rounded-xl h-120 my-4 mx-12 inline grid bg-[url('/img/meshImageFrame.png')] bg-bottom bg-cover"
      >
        <div className="flex items-center justify-center h-full w-full">
          <div className="text-white font-[sans] inline-block px-8 py-4 text-2xl font-bold">
            Hello, my name is Trung and I build well-designed applications for the web
          </div>
        </div>
      </div>
      {/* 
      <div className="text-black w-"></div>
      <div className="col-span-6 sticky top-8 h-100">
        <div className="grid grid-cols-1">
          
          <div className="font-bold sticky pt-6 col-span-4 col-start-1">Full-stack Developer</div>
          <div className="font-bold sticky pt-6 col-span-4 col-start-1">
        <ul>
          <li><Button radius="full">about me</Button></li>
          <li><Button radius="full">my experiences</Button></li>
          <li><Button radius="full">my projects</Button></li>
        </ul>
          </div>
        </div>
      </div>
      <div className="col-span-6 top-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="pt-14 col-span-4 col-start-1">
        <p>Hello, and welcome to my website. My name is Trung and I’m a passionate full-stack developer with 4 years’ experience in the banking sector, specializing in Java Spring Boot, Angular/VueJs, and cloud technologies. I build scalable solutions for complex environments and enjoy learning and sharing knowledge. I’m ready to take on new challenges and embark on a new mission with you, turning ideas into impactful results that inspire, connect, drive success.</p>  
        <p>This website serves as a place to showcase my skills, demonstrate my ability to build innovative projects, and connect with tech recruiters and the wider tech community!</p>
          </div>
          <div className="pt-6 col-span-4 col-start-1">CAPGEMINI
        <br />
        Crédit Agricole CIB (2023 - now): Build, maintain and improve a full-stack application of CACIB’s Trade Commodities Finance department that digitalizes the workflow of the Transaction Business Committee process and the management of CACIB’s clients Economic Position. The application is programmed in VueJs and Java Spring Boot microservices.</div>
          <div className="pt-6 col-span-4 col-start-1">CAPGEMINI
        <br />
        Crédit Mutuel Arkéa (2021 - 2023): Develop Restful APIs that allows bankers to monitor the mortgage process (prêt immobilier) of their clients. The APIs are created by using Java Spring Boot and documented by Swagger.
          </div>
          <div className="pt-6 col-span-4 col-start-1">
        FAMOCO
        <br/>
        Design and develop full-stack applications to streamline the digitalization of food vouchers, enhancing security and reducing fraud. These applications are generated automatically using JHipster.The initiative is sponsored by the United Nations, supporting global efforts toward transparency and efficiency in aid distribution.
          </div>
          <div className="pt-6 col-span-4 col-start-1">
        <Button>Click to download the full résumé</Button>
          </div>
          <div className="pt-6 col-span-4 col-start-1">
        dinnerIdeas.com
        <br />
        [image]
        <br />
        An application that allows you to propose ideas to my dinner.
          </div>
          <div className="pt-6 col-span-4 col-start-2">
        This portfolio website is designed with Figma, written in ReactJS and deployed to AWS.
          </div>
        </div>
      </div>
      */}
    </div>
  );
}
