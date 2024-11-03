import { useState } from "react";
import { IoCheckmark, IoClipboardOutline } from "react-icons/io5";

export default function CopyCodeButton({ code }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the state after 2 seconds
    });
  };

  return (
    <div className="relative w-full">
      <pre className="bg-neutral-900 p-4 whitespace-pre-wrap leading-6 rounded-md text-neutral-200 overflow-x-auto">
        {code}
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 px-3 py-2 hover:bg-neutral-700 rounded-full text-neutral-400"
      >
        {isCopied ? (
          <p className="flex gap-1 items-center text-xs">
            <IoCheckmark size={14} />
            Copied!
          </p>
        ) : (
          <p className="flex gap-1 items-center text-xs">
            <IoClipboardOutline size={14} />
            Copy code
          </p>
        )}
      </button>
    </div>
  );
}
