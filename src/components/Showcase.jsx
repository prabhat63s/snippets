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

export default function Showcase() {
  return (
    <div className="relative flex w-full items-center">
      <div className="relative flex max-w-full overflow-hidden py-5">
        <div className="flex w-max animate-marquee gap-2 [--duration:30s] hover:[animation-play-state:paused]">
          {[...projects, ...projects].map((project, index) => (
            <Link
              key={index}
              to={project.url}
              target="_blank"
              className="flex flex-col gap-2 mx-2 transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <div className="w-96 rounded-xl bg-neutral-800 p-5 flex items-center justify-center">
                <img
                  src={project.imgSrc}
                  alt={project.name}
                  className="h-auto w-full object-cover rounded-lg"
                />
              </div>
              <h1 className="text-start font-medium text-white">
                {project.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
