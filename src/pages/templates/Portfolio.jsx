import ComponentPageLayout from "../../components/layout/ComponentPageLayout";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";
import { IoDownloadOutline } from "react-icons/io5";
import { RiExternalLinkFill } from "react-icons/ri";

export default function Portfolio() {
  return (
    <ComponentPageLayout>
      <div className="w-full h-full flex">
        <div className="lg:w-[75%] h-full flex flex-col gap-4 leading-6 overflow-y-auto scrollbar-hide">
          {/* Navigation Path */}
          <p className="flex items-center gap-1 text-neutral-400">
            Docs <span className="text-white">{">"} Portfolio Template</span>
          </p>

          {/* Title */}
          <h1 className="text-xl lg:text-2xl font-semibold">
            Portfolio Template
          </h1>

          {/* Introduction */}
          <p className="text-neutral-400">
            A minimal portfolio template to showcase your work and experience.
          </p>
          <video
            src="https://magicui.design/portfolio-demo.mp4"
            controls
            autoPlay
            loop
            className="rounded-xl border border-neutral-800"
          ></video>

          {/* Call to Action */}
          <div className="mt-4 w-full flex gap-4">
            <button className="w-full justify-center border items-center flex gap-2 border-neutral-800 bg-white text-black py-2 px-4 rounded-lg">
              Free Download <IoDownloadOutline />
            </button>
            <button className="w-full justify-center border items-center flex gap-2 border-neutral-800 text-white py-2 px-4 rounded-lg hover:bg-neutral-800">
              Live Preview <RiExternalLinkFill />
            </button>
          </div>

          {/* Introduction */}
          <div id="what-is-this?" className="flex flex-col gap-2">
            <h1 className="text-xl lg:text-2xl font-semibold">What is this?</h1>

            <p className="text-neutral-400">
              A complete template to market yourself and your portfolio to the
              world as a developer
            </p>
          </div>

          {/* Why Should I Use This? */}
          <div id="why-should-i-use-this?" className="flex flex-col gap-2">
            <h2 className="text-lg lg:text-xl font-semibold">
              Why Should I Use This?
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-neutral-300">
              <li>✅ Save 100+ hours of work</li>
              <li>✅ No need to learn advanced animations</li>
              <li>✅ Easy to configure and change</li>
              <li>✅ 1-click download and setup</li>
              <li>✅ 5 minutes to update the text and images</li>
              <li>✅ Deploy live to Vercel</li>
            </ul>
          </div>
          {/* Features */}
          <div id="featuers" className="flex flex-col gap-2">
            <h2 className="text-lg lg:text-xl font-semibold">Features</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-neutral-300">
              <li>Hero Section</li>
              <li>About Section</li>
              <li>Work Section</li>
              <li>Education Section</li>
              <li>Projects Section</li>
              <li>Hackathon Section</li>
              <li>Contact Section</li>
              <li>Blog</li>
            </ul>
          </div>
          {/* Features */}
          <div id="tech-stack" className="flex flex-col gap-2">
            <h2 className="text-lg lg:text-xl font-semibold">Tech Stack</h2>
            <div className="flex gap-4 my-2">
              <Link
                to="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiReact size={30} />
              </Link>
              <Link
                to="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTailwindcss size={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-[25%] pl-10 py-4 flex-col gap-2 overflow-y-auto scrollbar-hide">
          <h1 className="font-semibold text-lg">On This Page</h1>
          <div className="text-sm flex flex-col items-start gap-2 text-neutral-200">
            <a href="#what-is-this?">What is this?</a>
            <a href="#why-should-i-use-this?">Why Should I Use This?</a>
            <a href="#featuers">Features</a>
            <a href="#tech-stack">Tech Stack</a>
          </div>
        </div>
      </div>
    </ComponentPageLayout>
  );
}
