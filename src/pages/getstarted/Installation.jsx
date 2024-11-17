import ComponentPageLayout from "../../components/layout/ComponentPageLayout";
import CodeBlock from "../../components/CodeBlock";

export default function Installation() {
  return (
    <ComponentPageLayout>
      <div className="w-full h-full flex">
        <div className="lg:w-[75%] h-full flex flex-col gap-4 leading-6 overflow-y-auto scrollbar-hide">
          {/* Navigation Path */}
          <p className="flex items-center gap-1 text-neutral-400">
            Docs <span className="text-white">{">"} Installation</span>
          </p>

          {/* Title */}
          <h1 className="text-xl lg:text-2xl font-semibold">Installation</h1>

          {/* Introduction */}
          <p className="text-neutral-400">
            How to install dependencies and structure your app.
          </p>

          {/* Instructions Section */}
          <div className="flex flex-col gap-4 text-neutral-300">
            {/* Step 1: Create React Project */}
            <div id="create-project-using-vite" className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">
                <span className="bg-neutral-800 px-2 rounded-lg mr-2">1.</span>{" "}
                Create project using Vite
              </h2>
              <p className="text-neutral-400">
                Start by creating a new Vite project if you don’t have one set
                up already. The most common approach is to use Create Vite.
              </p>
              <CodeBlock
                code={`\nnpm create vite@latest my-project -- --template react
cd my-project`}
              />
            </div>

            {/* Step 2: Install Tailwind CSS */}
            <div id="install-tailwind-css" className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">
                {" "}
                <span className="bg-neutral-800 px-2 rounded-lg mr-2">2.</span>
                Install Tailwind CSS
              </h2>
              <p className="text-neutral-400">
                Install <code>`tailwindcss`</code> and its peer dependencies,
                then generate your
                <code className="text-white">
                  {" "}
                  `tailwind.config.js`{" "}
                </code> and{" "}
                <code className="text-white"> `postcss.config.js` </code> files:
              </p>
              <CodeBlock
                code={`\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p`}
              />
            </div>

            {/* Step 3: Configure your template paths */}
            <div id="configure-template-paths" className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">
                <span className="bg-neutral-800 px-2 rounded-lg mr-2">3.</span>
                Configure your template paths
              </h2>
              <p className="text-neutral-400">
                Configure your template paths Add the paths to all of your
                template files in your{" "}
                <code className="text-white">`tailwind.config.js`</code> file.{" "}
              </p>
              <CodeBlock
                code={`\n/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
              />
            </div>

            {/* Step 4:  Add the Tailwind directives to your CSS */}
            <div id="add-tailwind-directives" className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">
                {" "}
                <span className="bg-neutral-800 px-2 rounded-lg mr-2">4.</span>
                Add the Tailwind directives to your CSS
              </h2>
              <p className="text-neutral-400">
                Add the <code className="text-white">`@tailwind`</code>{" "}
                directives for each of Tailwind’s layers to your{" "}
                <code className="text-white">`./src/index.css`</code> file.
              </p>
              <CodeBlock
                code={`\n@tailwind base;
@tailwind components;
@tailwind utilities;`}
              />
            </div>

            {/* Step 5: Start your build process */}
            <div id="start-build-process" className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">
                <span className="bg-neutral-800 px-2 rounded-lg mr-2">5.</span>
                Start your build process
              </h2>
              <p className="text-neutral-400">
                Run your build process with{" "}
                <code className="text-white">`npm run dev`</code>.
              </p>
              <CodeBlock code={`npm run dev`} />
            </div>

            {/* Step 6: Start using Tailwind in your project */}
            <div id="start-using-tailwind" className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">
                {" "}
                <span className="bg-neutral-800 px-2 rounded-lg mr-2">6.</span>
                Start using Tailwind in your project
              </h2>
              <p className="text-neutral-400">
                Start using Tailwind’s utility classes to style your content.
              </p>
              <CodeBlock
                code={`\nexport default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}`}
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-[25%] pl-10 py-4 flex-col gap-2 overflow-y-auto scrollbar-hide">
          <h1 className="font-semibold text-lg">On This Page</h1>
          <div className="text-sm flex flex-col items-start gap-2 text-neutral-200">
            <a href="#create-project-using-vite">Create project using Vite</a>
            <a href="#install-tailwind-css">Install Tailwind CSS</a>
            <a href="#configure-template-paths">
              Configure your template paths
            </a>
            <a href="#add-tailwind-directives">
              Add the Tailwind directives to your CSS
            </a>
            <a href="#start-build-process">Start your build process</a>
            <a href="#start-using-tailwind">
              Start using Tailwind in your project
            </a>
          </div>
        </div>
      </div>
    </ComponentPageLayout>
  );
}
