/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdOutlineCode, MdOutlineRemoveRedEye } from "react-icons/md";
import CopyCodeButton from "./CopyCodeButton";

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
        <div className="flex gap-2 px-2 py-1.5 rounded-md bg-neutral-900">
          <div className="relative group">
            <button
              onClick={() => setActiveTab("Preview")}
              className={`${
                activeTab === "Preview"
                  ? "p-1 bg-neutral-600 rounded-md"
                  : "text-neutral-400 p-1"
              }`}
            >
              <MdOutlineRemoveRedEye size={18} />
            </button>
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max py-2 px-2.5 rounded-md text-xs bg-neutral-900 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              Preview
            </span>
          </div>

          <div className="relative group">
            <button
              onClick={() => setActiveTab("Code")}
              className={`${
                activeTab === "Code"
                  ? "p-1 bg-neutral-600 rounded-md"
                  : "text-neutral-400 p-1"
              }`}
            >
              <MdOutlineCode size={18} />
            </button>
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max py-2 px-2.5 rounded-md text-xs bg-neutral-900 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              Code
            </span>
          </div>
        </div>
      </div>

      {/* Content based on the active tab */}
      <div className="flex flex-col w-full gap-6">
        {activeTab === "Preview" ? (
          <div className="w-full bg-neutral-900 px-4 py-10 lg:px-10 rounded-lg flex justify-center">
            {leftCode}
          </div>
        ) : (
          <CopyCodeButton code={rightCode} />
        )}
      </div>
    </div>
  );
}
