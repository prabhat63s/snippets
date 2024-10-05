/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import ComponentPageLayout from "../../components/layout/ComponentPageLayout";

export default function ComponentPage() {
  return (
    <ComponentPageLayout>
      <div className="flex flex-col gap-4 leading-6">
        <p className="flex items-center gap-1 text-neutral-400">
          Docs <span className="text-white">{">"} Introduction</span>
        </p>
        <h1 className="text-xl lg:text-2xl font-semibold">Introduction</h1>
        <p className="text-neutral-400">
          Create Beautifully landing pages with components that you can copy and
          paste into your apps.
        </p>
        <p className="">
          Snippet UI is a collection of re-usable components that you can copy
          and paste into your web apps.
        </p>
        <p className="">
          It primarily features components, blocks, and templates geared towards
          creating landing pages and user-facing marketing materials.
        </p>
        <p className="">Beautiful UI components, crafted with Tailwind CSS.</p>
        <p className="">
          Every example is fully responsive and carefully designed and
          implemented to look great at any screen size.
        </p>
        <h2 className="text-xl font-medium">
          What do you mean by not a component library?
        </h2>
        <p className="">
          I mean you do not install it as a dependency. It is not available or
          distributed via npm.
        </p>
        <p className="">
          Pick the components you need. Copy and paste the code into your
          project and customize to your needs. The code is yours.
        </p>

        <h1 className="text-xl lg:text-2xl font-semibold">Philosophy</h1>
        <p className="">
          <strong>
            I personally believe that good design contributes significant value
            to software. It's one of the main methods of establishing trust
            between you and an internet stranger.
          </strong>{" "}
          Trust is important for internet businesses because it is the first
          thing a visitor evaluates before pulling out their credit card and
          becoming a customer.
        </p>
        <p className="">
          Pick the components you need. Copy and paste the code into your
          project and customize to your needs. The code is yours.
        </p>
        <div className="flex flex-col gap-4">
          <strong className="">
            Some questions visitors might ask themselves are:
          </strong>
          <p className="">"Is this company legit?"</p>
          <p className="">"Who else is using it?"</p>
          <p className="">"Can I trust them with my personal data?"</p>
          <p className="">
            <strong>Poor design reflects poorly on your team.</strong> It comes
            off as lazy, unfinished, and unstable. It shows that the team
            doesn't care about user experience.
          </p>
        </div>

        <p className="">
          <strong>
            Good design indicates that the team behind has their shit together.
          </strong>{" "}
          I can probably expect good things from them in the future.
        </p>
        <p className="">
          It makes me think "if they care so much about these tiny details, they
          must care a lot about other things in the company, including their
          customers!".
        </p>

        <div className="w-full flex justify-end mt-10 mb-5">
          <Link
            to="/installation"
            className="border rounded-lg border-neutral-800 p-2"
          >
            Installation {">"}
          </Link>
        </div>
      </div>
    </ComponentPageLayout>
  );
}
