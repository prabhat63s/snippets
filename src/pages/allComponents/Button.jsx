import { FaApple, FaGoogle } from "react-icons/fa6";
import ComponentPageLayout from "../../components/layout/ComponentPageLayout";
import TabCard from "../../components/TabCard";

const buttons = [
  {
    title: "Default",
    leftCode: (
      <button
        type="button"
        className="text-white bg-neutral-950 hover:bg-neutral-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Default
      </button>
    ),
    rightCode: `
<button
  type="button"
  className="text-white bg-neutral-950 hover:bg-neutral-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
  Default
</button>`,
  },
  {
    title: "Button 1",
    leftCode: (
      <button className="w-full md:w-fit rounded-md border-2 px-4 py-4 lg:py-2 text-base font-semibold hover:bg-neutral-950 text-white">
        Button 1
      </button>
    ),
    rightCode: `
<button className="w-full md:w-fit rounded-md border-2 px-4 py-4 lg:py-2 text-base font-semibold hover:bg-neutral-950 text-white"">
      Button 1
</button>`,
  },
  {
    title: "Button 2",
    leftCode: (
      <button className="w-full md:w-fit rounded-md border-t-4 border-l-4 px-4 py-4 lg:py-2 text-base font-semibold text-white shadow-md hover:bg-neutral-800 hover:shadow-lg">
        Button 2
      </button>
    ),
    rightCode: `
<button className="w-full md:w-fit rounded-md border-t-4 border-l-4 px-4 py-4 lg:py-2 text-base font-semibold text-white shadow-md hover:bg-neutral-800 hover:shadow-lg">
      Button 2
</button>`,
  },
  {
    title: "Black to gray",
    leftCode: (
      <button
        type="button"
        className="text-white bg-gradient-to-br from-neutral-950 to-neutral-500 hover:bg-gradient-to-bl font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Black to gray
      </button>
    ),
    rightCode: `
<button
  type="button"
  className="text-white bg-gradient-to-br from-neutral-950 to-neutral-500 hover:bg-gradient-to-bl font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
  Black to gray
</button>`,
  },
  {
    title: "Sign in with Google",
    leftCode: (
      <button
        type="button"
        className="text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
      >
        <FaGoogle />
        Sign in with Google
      </button>
    ),
    icon: <FaGoogle />,
    rightCode: `      
// import { FaGoogle } from "react-icons/fa6";
  
<button
  type="button"
  className="text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
  >
  <FaGoogle />
  Sign in with Google
</button>`,
  },
  {
    title: "Check out with Apple Pay",
    leftCode: (
      <button
        type="button"
        className="text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
      >
        <FaApple size={20} />
        Check out with Apple Pay
      </button>
    ),
    icon: <FaApple size={20} />,
    rightCode: `// npm i react-icons
  
// import { FaApple } from "react-icons/fa6";

<button
  type="button"
  className="text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
  >
    <FaApple size={20} />
    Check out with Apple Pay
</button>
`,
  },
];

export default function Button() {
  return (
    <ComponentPageLayout>
      <div className="flex flex-col gap-6">
        {/* Navigation Path */}
        <p className="flex items-center gap-1 text-neutral-400">
          Docs <span className="text-white">{">"} Button</span>
        </p>

        {/* Title */}
        <h1 className="text-xl lg:text-2xl font-semibold">Button</h1>

        {/* Introduction */}
        <p className="text-neutral-400">
          The button component is a common UI component found on the web that
          allows users to trigger certain actions on your website such as
          submitting a form, navigating to a new page, or downloading a file.
        </p>

        <div className="flex flex-col gap-10">
          {buttons.map((button, index) => (
            <TabCard
              key={index}
              index={index}
              title={button.title}
              leftCode={button.leftCode}
              rightCode={button.rightCode}
            />
          ))}
        </div>
      </div>
    </ComponentPageLayout>
  );
}
