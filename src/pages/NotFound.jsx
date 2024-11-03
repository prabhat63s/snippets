import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4 uppercase">
      <p className="">404!</p>
      <h1 className="text-2xl lg:text-4xl font-semibold ">Page not found</h1>
      <Link
        to="/"
        className="text-sm bg-neutral-900 py-2 px-2.5 rounded-md hover:bg-neutral-800 flex items-center gap-2"
      >
        <MdOutlineArrowBack /> Go to Home
      </Link>
    </div>
  );
}
