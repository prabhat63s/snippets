import ComponentPageLayout from "../../components/layout/ComponentPageLayout";
import { FaApple, FaArrowRight, FaGooglePlay, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import TabCard from "../../components/TabCard";

const card = [
  {
    id: "default-card",
    title: "Default card",
    leftCode: (
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
    ),
    rightCode: `
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
    </Link>`,
  },
  {
    id: "card-with-button",
    title: "Card with button",
    leftCode: (
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl">
        <Link to="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link
          to="/"
          className="w-fit text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
          Read more
          <FaArrowRight />
        </Link>
      </div>
    ),
    rightCode: `
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl">
      <Link to="/">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so
        far, in reverse chronological order.
      </p>
      <Link
        to="/"
        className="w-fit text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
        Read more
        <FaArrowRight />
      </Link>
    </div>`,
  },
  {
    id: "card-with-image",
    title: "Card with image",
    leftCode: (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl">
        <Link to="/">
          <img
            className="rounded-t-lg"
            src="https://www.thespruce.com/thmb/fk-s8ANlN6FB-yzxZK_9hhUg9MA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/big-leaf-plants-5101252-01-db7e81b1bf484f549df149fa20e26eb7.jpg"
            alt
          />
        </Link>
        <div className="p-5">
          <Link to="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Noteworthy technology acquisitions 2021
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Link
            to="/"
            className="w-fit text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            Read more
            <FaArrowRight />
          </Link>
        </div>
      </div>
    ),
    rightCode: `
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl">
      <Link to="/">
        <img
          className="rounded-t-lg"
          src="https://www.thespruce.com/thmb/fk-s8ANlN6FB-yzxZK_9hhUg9MA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/big-leaf-plants-5101252-01-db7e81b1bf484f549df149fa20e26eb7.jpg"
          alt
        />
      </Link>
      <div className="p-5">
        <Link to="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link
          to="/"
          className="w-fit text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
          Read more
          <FaArrowRight />
        </Link>
      </div>
    </div>`,
  },
  {
    id: "card-with-form-inputs",
    title: "Card with form inputs ",
    leftCode: (
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
    ),
    rightCode: `
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
    </div>`,
  },
  {
    id: "product-card",
    title: "Product card",
    leftCode: (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl">
        <Link to="/">
          <img
            className="p-8 rounded-t-lg h-64"
            src="https://www.cashmartindia.com/wp-content/uploads/2023/01/watches-1.png"
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5">
          <Link to="/">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </Link>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 text-yellow-400 rtl:space-x-reverse">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">$599</span>
            <Link
              to="/"
              className="w-fit text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    ),
    rightCode: `
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl">
      <Link to="/">
        <img
          className="p-8 rounded-t-lg"
          src="https://www.cashmartindia.com/wp-content/uploads/2023/01/watches-1.png"
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 text-yellow-400 rtl:space-x-reverse">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">$599</span>
          <Link
            to="/"
            className="w-fit text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
           >
            Add to cart
          </Link>
        </div>
      </div>
    </div>`,
  },
  {
    id: "pricing-card",
    title: "Pricing card",
    leftCode: (
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-xl">
        <h5 className="mb-4 text-xl font-medium text-gray-500">
          Standard plan
        </h5>
        <div className="flex items-baseline text-gray-900">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">49</span>
          <span className="ms-1 text-xl font-normal text-gray-500">/month</span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex items-center">
            <FaCheckCircle />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              2 team members
            </span>
          </li>
          <li className="flex">
            <FaCheckCircle />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              20GB Cloud storage
            </span>
          </li>
          <li className="flex">
            <FaCheckCircle />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Integration help
            </span>
          </li>
          <li className="flex line-through decoration-gray-500">
            <FaCheckCircle />
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              Sketch Files
            </span>
          </li>
          <li className="flex line-through decoration-gray-500">
            <FaCheckCircle />
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              API Access
            </span>
          </li>
          <li className="flex line-through decoration-gray-500">
            <FaCheckCircle />
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              Complete documentation
            </span>
          </li>
          <li className="flex line-through decoration-gray-500">
            <FaCheckCircle />
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              24×7 phone &amp; email support
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
          Choose plan
        </button>
      </div>
    ),
    rightCode: `
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-xl">
      <h5 className="mb-4 text-xl font-medium text-gray-500">
        Standard plan
      </h5>
      <div className="flex items-baseline text-gray-900">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">49</span>
        <span className="ms-1 text-xl font-normal text-gray-500">
          /month
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <FaCheckCircle />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            2 team members
          </span>
        </li>
        <li className="flex">
          <FaCheckCircle />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            20GB Cloud storage
          </span>
        </li>
        <li className="flex">
          <FaCheckCircle />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Integration help
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <FaCheckCircle />
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Sketch Files
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <FaCheckCircle />
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            API Access
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <FaCheckCircle />
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Complete documentation
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <FaCheckCircle />
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            24×7 phone &amp; email support
          </span>
        </li>
      </ul>
      <button
        type="button"
        className="text-white bg-[#050708] hover:bg-[#050708]/80 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
        Choose plan
      </button>
    </div>`,
  },
  {
    id: "call-to-action-card ",
    title: "Call to action card ",
    leftCode: (
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
    ),
    rightCode: `
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
    </div>`,
  },
];

export default function Card() {
  return (
    <ComponentPageLayout>
      <div className="w-full h-full flex">
        <div className="lg:w-[75%] h-full flex flex-col gap-4 leading-6 overflow-y-auto scrollbar-hide">
          {/* Navigation Path */}
          <p className="flex items-center gap-1 text-neutral-400">
            Docs <span className="text-white">{">"} Card</span>
          </p>

          {/* Title */}
          <h1 className="text-xl lg:text-2xl font-semibold">Card</h1>

          {/* Introduction */}
          <p className="text-neutral-400">
            The card component can be used to show a wide variety of content
            such as previews of blog posts, user profiles, pricing plans, and
            more. Choose from one of the many examples built with React and the
            utility classes from Tailwind CSS.
          </p>

          {/* Card with Tab Feature */}
          <div className="w-full flex flex-col gap-10">
            {card.map((c, index) => (
              <TabCard
                key={index}
                index={index}
                id={c.id}
                title={c.title}
                leftCode={c.leftCode}
                rightCode={c.rightCode}
              />
            ))}
          </div>
        </div>
        <div className="hidden lg:flex lg:w-[25%] pl-10 py-4 flex-col gap-2 overflow-y-auto scrollbar-hide">
          <h1 className="font-semibold text-lg">On This Page</h1>
          <div className="text-sm flex flex-col items-start gap-2 text-neutral-200">
            <a href="#default-card">Default card</a>
            <a href="#card-with-button">Card with button</a>
            <a href="#card-with-image">Card with image</a>
            <a href="#card-with-form-inputs">Card with form inputs</a>
            <a href="#product-card">Product card</a>
            <a href="#pricing-card">Pricing card</a>
            <a href="#call-to-action-card">Call to action card</a>
          </div>
        </div>
      </div>
    </ComponentPageLayout>
  );
}
