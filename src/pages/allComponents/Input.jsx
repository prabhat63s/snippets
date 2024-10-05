import { MdImage } from "react-icons/md";
import ComponentPageLayout from "../../components/layout/ComponentPageLayout";
import CopyCodeButton from "../../components/CopyCodeButton";

const card = [
  {
    title: "File upload example",
    leftCode: (
      <div className="flex flex-col lg:w-[40%]">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 "
          htmlFor="small_size"
        >
          Small file input
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1"
          id="small_size"
          type="file"
        />
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="default_size"
        >
          Default size
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1"
          id="default_size"
          type="file"
        />
        <p className="mt-1 text-sm text-gray-500" id="file_input_help">
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
      </div>
    ),
    rightCode: `
    <div className="flex flex-col lg:w-[40%]">
      <label
        className="block mb-2 text-sm font-medium text-gray-900 "
        htmlFor="small_size"
      >
        Small file input
      </label>
      <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1"
        id="small_size"
        type="file"
      />
      <label
        className="block mb-2 text-sm font-medium text-gray-900"
        htmlFor="default_size"
      >
        Default size
      </label>
      <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1"
        id="default_size"
        type="file"
      />
      <p className="mt-1 text-sm text-gray-500" id="file_input_help">
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>
    </div>`,
  },
  {
    title: "Create a new Post",
    leftCode: (
      <div className="flex flex-col p-5 max-w-lg bg-white border border-gray-200 rounded-lg shadow-xl">
        <div className="flex space-x-4 ">
          <img
            src="https://prabhat-singh-portfolio.vercel.app/assets/Profile-CMngHn1w.jpg"
            alt=""
            className="rounded-full h-10 w-10"
          />
          <textarea
            name=""
            id=""
            cols="80"
            rows="6"
            className="text-neutral-400 text-xl w-full bg-transparent resize-none focus:outline-none"
            placeholder="What is your thoughts?"
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 hover:bg-neutral-200 rounded-full p-2">
            <MdImage size={20} />
          </div>
          <button className="text-white bg-black text-lg font-semibold px-6 py-1 rounded-full hover:bg-neutral-800">
            Post
          </button>
        </div>
      </div>
    ),
    rightCode: `
    <div className="flex flex-col p-5 max-w-lg bg-white border border-gray-200 rounded-lg shadow-xl">
      <div className="flex space-x-4 ">
        <img
          src="https://prabhat-singh.vercel.app/static/media/Profile.60e11bf6995c511be0bb.jpg"
          alt=""
          className="rounded-full h-10 w-10"
        />
        <textarea
          name=""
          id=""
          cols="80"
          rows="6"
          className="text-neutral-400 text-xl w-full bg-transparent resize-none focus:outline-none"
          placeholder="What is your thoughts?"
        ></textarea>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 hover:bg-neutral-200 rounded-full p-2">
          <MdImage size={20} />
        </div>
        <button className="text-white bg-black text-lg font-semibold px-6 py-1 rounded-full hover:bg-neutral-800">
          Post
        </button>
      </div>
    </div>`,
  },
];

export default function Input() {
  return (
    <ComponentPageLayout>
      <div className="flex flex-col gap-4">
        {/* Navigation Path */}
        <p className="flex items-center gap-1 text-neutral-400">
          Docs <span className="text-white">{">"} Input</span>
        </p>

        {/* Title */}
        <h1 className="text-xl lg:text-2xl font-semibold">Input</h1>

        {/* Introduction */}
        <p className="text-neutral-400">
          {" <input>"} tag can be used to upload one or more files from the
          device storage of the user available in multiple sizes, styles, and
          variants and built with the utility-first classes from Tailwind CSS.
        </p>
        <p className="text-neutral-400">
          The {"<textarea>"} tag use to show a textarea component in React and
          receive longer text from your users.
        </p>
        <div className="w-full flex flex-col gap-6">
          {card.map((c, index) => (
            <div key={index} className="flex flex-col w-full gap-4">
              <h1 className="text-xl font-semibold">{c.title}</h1>
              <div className="flex flex-col w-full gap-6">
                <div className="w-full bg-white p-5 rounded-lg flex justify-center">
                  {c.leftCode}
                </div>
                <div className="w-full ">
                  <CopyCodeButton code={c.rightCode} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ComponentPageLayout>
  );
}
