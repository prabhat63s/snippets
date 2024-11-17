import { useState } from "react";
import { MdContentCopy, MdOutlineCheck } from "react-icons/md";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// eslint-disable-next-line react/prop-types
export default function CodeBlock({ code }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    // Try using the Clipboard API (modern browsers)
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Clipboard API failed: ", err);
          fallbackCopy();
        });
    } else {
      // Fallback to execCommand (older browsers or browsers with restricted permissions)
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    // Create a temporary textarea element to hold the text
    const textArea = document.createElement("textarea");
    textArea.value = code; // Set the value to the text you want to copy
    document.body.appendChild(textArea); // Append the textarea to the body
    textArea.select(); // Select the content of the textarea
    document.execCommand("copy"); // Execute the "copy" command
    document.body.removeChild(textArea); // Remove the textarea from the DOM

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative w-full bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden mb-4">
      <SyntaxHighlighter
        language="javascript"
        // style={dracula}
        style={atomOneDark}
        customStyle={{
          background: "transparent",
          padding: "16px",
          fontSize: "0.9rem",
          lineHeight: "1.5rem",
          fontFamily: '"Source Code Pro", monospace',
        }}
        showLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={copyToClipboard}
        className="absolute top-4 right-4 hover:text-white text-neutral-400"
      >
        {isCopied ? (
          <p className="flex gap-1 items-center text-xs text-white">
            <MdOutlineCheck size={14} />
            Copied!
          </p>
        ) : (
          <p className="flex gap-1 items-center text-xs">
            <MdContentCopy size={14} />
            Copy code
          </p>
        )}
      </button>
    </div>
  );
}
