import { useState } from "react";
import { IoClipboard, IoClipboardOutline } from "react-icons/io5";

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
      <pre className="bg-neutral-900 p-4 leading-6 rounded-md mt-2 text-neutral-200 overflow-x-auto">
        {code}
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 text-sm hover:bg-neutral-800 rounded-full text-white"
      >
        {isCopied ? <IoClipboard /> : <IoClipboardOutline />}
      </button>
    </div>
  );
}
