import CommonLayout from "../components/layout/CommonLayout";
import afas from "../assets/afas.png";
import thoughts from "../assets/thoughts.png";
import dukaan from "../assets/dukaan.png";
import board from "../assets/board.png";
import gimini from "../assets/gimini.png";
import news from "../assets/news.png";
import saas from "../assets/saas.png";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Apani Fashal Apani Suraksha",
    imgSrc: afas,
    url: "https://afas-live.onrender.com/",
    technologies: "React | Tailwind CSS | Node.js | Express | MongoDB",
  },
  {
    name: "thought | social network",
    imgSrc: thoughts,
    url: "https://thoughts-social-87v5.onrender.com/",
    technologies: "React | Tailwind CSS | Node.js | Express | MongoDB",
  },
  {
    name: "Dukaan | Online shopping site",
    imgSrc: dukaan,
    url: "https://dukaan-online-shopping-site.onrender.com/",
    technologies:
      "React | Tailwind CSS | Node.js | Express | MongoDB | Braintree",
  },
  {
    name: "Draw | Hand-drawn look & feel",
    imgSrc: board,
    url: "https://draw-clone.vercel.app/",
    technologies:
      "Next.js | Tailwind CSS | shadcn/ui | zustand | Convex | Clerk | Liveblocks",
  },
  {
    name: "Gemini Clone",
    imgSrc: gimini,
    url: "https://gimini-clone.vercel.app/",
    technologies: "React | Tailwind CSS | Gemini API",
  },
  {
    name: "News.dev",
    imgSrc: news,
    url: "https://blog-1-w7yr.onrender.com/",
    technologies: "React | Tailwind CSS | Node.js | Express | MongoDB",
  },
  {
    name: "Saas UI",
    imgSrc: saas,
    url: "https://snippet-ui.vercel.app/",
    technologies: "React | Tailwind CSS",
  },
];

export default function ShowcasePage() {
  return (
    <CommonLayout>
      <div className="w-full flex items-center justify-center flex-col text-center gap-6 my-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-4xl font-semibold">Showcase</h1>
          <p className="font-medium ">
            Companies choose Magic UI to build their landing pages.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.url}
              target="_/"
              className="w-full flex flex-col gap-2"
            >
              <div className="w-full rounded-xl bg-neutral-800 p-5">
                <img src={project.imgSrc} alt={project.name} className="" />
              </div>
              <div className="text-start">
                <h1 className="text-lg font-semibold">{project.name}</h1>
                <p className="text-sm text-neutral-400 truncate">
                  {project.technologies}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </CommonLayout>
  );
}
