import { Link } from "react-router-dom";
import CommonLayout from "../components/layout/CommonLayout";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SiReact, SiTailwindcss, SiVite } from "react-icons/si";
import Showcase from "../components/Showcase";
import DemoComponents from "../components/DemoComponents";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <CommonLayout>
      {/* Banner */}
      <div className="w-full flex items-center justify-center flex-col text-center gap-8 lg:gap-10 mt-20 leading-6">
        <Link
          to="/template"
          className="border-neutral-800 px-4 py-2 text-neutral-400 text-sm flex items-center gap-1 border rounded-full bg-transparent"
        >
          ✨ Introducing Snippet UI Template{" "}
          <IoIosArrowRoundForward size={20} />
        </Link>
        <h1 className="text-4xl font-semibold lg:text-7xl">
          Snippet UI is the new way to build landing pages.
        </h1>
        <p className="text-neutral-400 font-medium">
          Beautifully designed, animated components and templates built with
          Tailwind CSS, React.
        </p>
        <Link
          to="/component"
          className="bg-white text-black rounded-lg text-sm px-3 py-2 flex items-center gap-1"
        >
          Get Started for free
          <IoIosArrowRoundForward size={20} />{" "}
        </Link>
      </div>

      {/* Source */}
      <div className="w-full flex items-center justify-center text-center gap-10 mt-10 mb-20">
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
        <Link
          to="https://vitejs.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiVite size={30} />
        </Link>
      </div>

      {/* Showcase */}
      <div className="w-full flex items-center justify-center flex-col text-center gap-6 my-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-4xl font-semibold">Showcase</h1>
          <p className="font-medium ">
            Companies choose Magic UI to build their landing pages.
          </p>
        </div>
        <Showcase />
      </div>

      {/* Components */}
      <div className="w-full flex items-center justify-center flex-col text-center gap-6 my-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Component Demos
          </h1>
          <p className="lg:font-medium">
            Here are some of the components that you can use to build your
            landing pages.
          </p>
        </div>
        <DemoComponents />
      </div>

      {/* Testonomilals */}
      <div className="w-full flex items-center justify-center flex-col text-center gap-6 my-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            What People Are Saying
          </h1>
          <p className="lg:font-medium">
            Don't just take our word for it. Here's what real people are saying
            about Magic UI on Twitter.
          </p>
        </div>
        <Testimonials />
      </div>
    </CommonLayout>
  );
}
