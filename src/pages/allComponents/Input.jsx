import { useEffect, useRef, useState } from "react";
import { MdClose, MdImage } from "react-icons/md";
import ComponentPageLayout from "../../components/layout/ComponentPageLayout";
import TabCard from "../../components/TabCard";

export default function Input() {
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("60px"); // Initial height
  const [img, setImg] = useState(null);
  const imgRef = useRef(null);

  const handleChange = (event) => {
    setText(event.target.value);
    setTextareaHeight(`${event.target.scrollHeight}px`); // Set textarea height based on content
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Backspace" && textareaHeight !== "60px") {
        const lines = text.split("\n").length;
        setTextareaHeight(`${60 + (lines - 1) * 10}px`);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [textareaHeight, text]);

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
      title: "X Create Post ",
      leftCode: (
        <div className="w-full flex items-start gap-4 py-4 bg-white border rounded-xl border-neutral-800 px-4 shadow-xl">
          <div className="">
            <img
              src="https://avatars.githubusercontent.com/u/137921416?v=4"
              className="rounded-full w-10 h-10"
            />
          </div>
          <form className="flex flex-col w-full">
            <textarea
              name=""
              value={text}
              onChange={handleChange}
              style={{ height: textareaHeight }}
              className="text-black placeholder:text-xl w-full bg-transparent resize-none focus:outline-none rounded-lg px-4 py-2"
              placeholder="What are your thoughts?"
            ></textarea>
            {img && (
              <div className="relative w-full">
                <MdClose
                  className="absolute top-2 right-2 text-white bg-neutral-800 hover:bg-neutral-600 p-1 rounded-full w-6 h-6 cursor-pointer"
                  onClick={() => {
                    setImg(null);
                    imgRef.current.value = null;
                  }}
                />
                <img
                  src={img}
                  className="w-full min-h-40 object-cover rounded-full border"
                  alt="Selected Image"
                />
              </div>
            )}
            <div className="flex items-center justify-between pt-4">
              <label htmlFor="image-upload" className="cursor-pointer">
                <MdImage
                  size={24}
                  className="text-neutral-600 hover:text-neutral-400"
                />
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  hidden
                  ref={imgRef}
                  onChange={handleImgChange}
                />
              </label>
              <button
                type="submit"
                className="bg-neutral-600 text-white text-base font-semibold px-4 py-1.5 rounded-full hover:bg-neutral-700 disabled:opacity-50"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      ),
      rightCode: `
      // Please refer to github for funcnality of post card  // https://github.com/prabhat63s/snippets/blob/main/src/pages/allComponents/Input.jsx
      
      import { useEffect, useRef, useState } from "react";
      import { MdClose, MdImage } from "react-icons/md";
      
      export default function Input() {
        const [text, setText] = useState("");
        const [textareaHeight, setTextareaHeight] = useState("60px"); // Initial height
        const [img, setImg] = useState(null);
        const imgRef = useRef(null);
        
        const handleChange = (event) => {
          setText(event.target.value);
          setTextareaHeight("{event.target.scrollHeight}px"); // Set textarea height based on content // Please refer to github => https://github.com/prabhat63s/snippets/blob/main/src/pages/allComponents/Input.jsx
          };
          
          useEffect(() => {
            const handleKeyDown = (event) => {
              if (event.key === "Backspace" && textareaHeight !== "60px") {
                const lines = text.split("").length;
                setTextareaHeight("{60 + (lines - 1) * 10}px"); // Please refer to github => https://github.com/prabhat63s/snippets/blob/main/src/pages/allComponents/Input.jsx
                }
                };
                
                document.addEventListener("keydown", handleKeyDown);
                
                return () => {
                  document.removeEventListener("keydown", handleKeyDown);
                  };
                  }, [textareaHeight, text]);

      const handleImgChange = (e) => {
      const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setImg(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };

      return (
        <div className="w-full flex items-start gap-4 py-4 bg-white border rounded-xl border-neutral-800 px-4 shadow-xl">
          <div className="">
            <img
              src="https://avatars.githubusercontent.com/u/137921416?v=4"
              className="rounded-full w-10 h-10"
            />
          </div>
          <form className="flex flex-col w-full">
            <textarea
              name=""
              value={text}
              onChange={handleChange}
              style={{ height: textareaHeight }}
              className="text-black placeholder:text-xl w-full bg-transparent resize-none focus:outline-none rounded-lg px-4 py-2"
              placeholder="What are your thoughts?"
            ></textarea>
            {img && (
              <div className="relative w-full">
                <MdClose
                  className="absolute top-2 right-2 text-white bg-neutral-800 hover:bg-neutral-600 p-1 rounded-full w-6 h-6 cursor-pointer"
                  onClick={() => {
                    setImg(null);
                    imgRef.current.value = null;
                  }}
                />
                <img
                  src={img}
                  className="w-full min-h-40 object-cover rounded-full border"
                  alt="Selected Image"
                />
              </div>
            )}
            <div className="flex items-center justify-between pt-4">
              <label htmlFor="image-upload" className="cursor-pointer">
                <MdImage
                  size={24}
                  className="text-neutral-600 hover:text-neutral-400"
                />
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  hidden
                  ref={imgRef}
                  onChange={handleImgChange}
                />
              </label>
              <button
                type="submit"
                className="bg-neutral-600 text-white text-base font-semibold px-4 py-1.5 rounded-full hover:bg-neutral-700 disabled:opacity-50"
              >
                Post
              </button>
            </div>
          </form>
        </div>
        )
      }`,
    },
  ];

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

        {/* Card with Tab Feature */}
        <div className="w-full flex flex-col gap-10">
          {card.map((c, index) => (
            <TabCard
              key={index}
              index={index}
              title={c.title}
              leftCode={c.leftCode}
              rightCode={c.rightCode}
            />
          ))}
        </div>
      </div>
    </ComponentPageLayout>
  );
}
