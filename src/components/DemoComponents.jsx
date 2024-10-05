import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { MdImage } from "react-icons/md";
import { Link } from "react-router-dom";

export default function DemoComponents() {
  return (
    <div className="flex flex-col items-center gap-10">
      <button
        type="button"
        className="text-white w-fit bg-gradient-to-br from-neutral-950 to-neutral-500 hover:bg-gradient-to-bl font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Black to gray
      </button>

      <Link
        to="/"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Link>

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-xl sm:p-6 md:p-8">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900">
            Sign in to our platform
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-sm text-blue-700 hover:underline"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500">
            Not registered?{" "}
            <a
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </form>
      </div>

      <div className="flex flex-col p-5 max-w-lg bg-white border border-gray-200 rounded-lg shadow-xl">
        <div className="flex space-x-4 ">
          <img
            src="https://images.generated.photos/TdA_3xKb49DtgqfPPu5REnQFiALErCu6i3M2I_1AqIA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwNTU5LmpwZw.jpg"
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

      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-lg">
        <h5 className="mb-2 text-3xl font-bold text-gray-900">
          Work fast from anywhere
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg">
          Stay up to date and move work forward with Flowbite on iOS &amp;
          Android. Download the app today.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <Link
            to="/"
            className="text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            <FaApple size={30} />
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Download on the</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Mac App Store
              </div>
            </div>
          </Link>
          <Link
            to="/"
            className="text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            <FaGooglePlay size={30} />
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Get in on</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Google Play
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
