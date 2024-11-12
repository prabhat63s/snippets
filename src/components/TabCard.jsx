/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdOutlineCode, MdOutlineRemoveRedEye } from "react-icons/md";
import CodeBlock from "./CodeBlock";

export default function TabCard({ index, title, leftCode, rightCode }) {
  const [activeTab, setActiveTab] = useState("Preview");

  return (
    <div className="flex flex-col w-full gap-4">
      {/* Tab Navigation */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          <span className="bg-neutral-900 px-2 py-1 rounded-md">
            {index + 1}.
          </span>{" "}
          {title}
        </h1>
        <div className="flex gap-2 p-1 rounded-md bg-neutral-800">
          <button
            onClick={() => setActiveTab("Preview")}
            className={`${
              activeTab === "Preview"
                ? "py-1 px-1.5 bg-neutral-950 rounded-md"
                : "text-neutral-400 p-1"
            }`}
          >
            <MdOutlineRemoveRedEye size={16} />
          </button>
          <button
            onClick={() => setActiveTab("Code")}
            className={`${
              activeTab === "Code"
                ? "py-1 px-1.5 bg-neutral-950 rounded-md"
                : "text-neutral-400 p-1"
            }`}
          >
            <MdOutlineCode size={16} />
          </button>
        </div>
      </div>

      {/* Content based on the active tab */}
      <div className="flex flex-col w-full gap-6">
        {activeTab === "Preview" ? (
          <div className="w-full bg-neutral-900 px-4 py-10 lg:px-10 flex justify-center border border-neutral-800 rounded-lg overflow-hidden ">
            {leftCode}
          </div>
        ) : (
          <CodeBlock code={rightCode} />
        )}
      </div>
    </div>
  );
}
