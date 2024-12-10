import ComponentPageLayout from "../../components/layout/ComponentPageLayout";
import { Link } from "react-router-dom";
import TabCard from "../../components/TabCard";

const footer = [
  {
    id: "default-footer",
    leftCode: (
      <footer className="w-full bg-black text-white p-6">
        <div className="w-full lg:flex-row gap-2 flex-col flex justify-between ">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2022{" "}
            <a href="#" className="hover:underline">
              Snippet UI™
            </a>
            . All Rights Reserved.
          </p>

          {/* Links */}
          <div className="gap-2 lg:flex-row flex-col flex">
            <a href="#" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Licensing
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    ),
    rightCode: `
    <footer className="w-full bg-black text-white p-6">
        <div className="w-full lg:flex-row gap-2 flex-col flex justify-between ">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2022{" "}
            <a href="#" className="hover:underline">
              Snippet UI™
            </a>
            . All Rights Reserved.
          </p>

          {/* Links */}
          <div className="gap-2 lg:flex-row flex-col flex">
            <a href="#" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Licensing
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
        </div>
    </footer>`,
  },
  {
    id: "footer-with-logo",
    leftCode: (
      <footer className="w-full border-t border-neutral-800 bg-black">
        <div className="flex flex-col md:flex-row justify-between gap-8 px-4 py-10 lg:px-8">
          {/* Logo and description */}
          <div>
            <h2 className="text-xl font-bold">Snippet UI</h2>
            <p className="text-sm text-neutral-400 pt-2">
              UI Library for Design Engineers
            </p>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="mt-2 space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/" className="hover:text-white">
                  Email Collection
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-lg font-semibold">Community</h3>
            <ul className="mt-2 space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/" className="hover:text-white">
                  Discord
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Email
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 p-4 text-center">
          <p className="text-sm text-neutral-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link
              to="https://prabhat-singh-portfolio.vercel.app/"
              target="_blank"
              className="text-white"
            >
              Snippet UI
            </Link>{" "}
            | All Rights Reserved.
          </p>
        </div>
      </footer>
    ),
    rightCode: `
    <footer className="w-full border-t border-neutral-800 bg-black">
        <div className="flex flex-col md:flex-row justify-between gap-8 px-4 py-10 lg:px-8">
          {/* Logo and description */}
          <div>
            <h2 className="text-xl font-bold">Snippet UI</h2>
            <p className="text-sm text-neutral-400 pt-2">
              UI Library for Design Engineers
            </p>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="mt-2 space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/" className="hover:text-white">
                  Email Collection
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-lg font-semibold">Community</h3>
            <ul className="mt-2 space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/" className="hover:text-white">
                  Discord
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Email
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 p-4 text-center">
          <p className="text-sm text-neutral-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link
              to="https://prabhat-singh-portfolio.vercel.app/"
              target="_blank"
              className="text-white"
            >
              Snippet UI
            </Link>{" "}
            | All Rights Reserved.
          </p>
        </div>
    </footer>`,
  },
];

export default function Footer() {
  return (
    <ComponentPageLayout>
      <div className="w-full h-full flex">
        <div className="lg:w-[75%] h-full flex flex-col gap-4 leading-6 overflow-y-auto scrollbar-hide">
          {/* Navigation Path */}
          <p className="flex items-center gap-1 text-neutral-400">
            Docs <span className="text-white">{">"} Footer</span>
          </p>

          {/* Title */}
          <h1 className="text-xl lg:text-2xl font-semibold">Footer</h1>

          {/* Introduction */}
          <p className="text-neutral-400">
            The footer component is an important section of a website where you
            should provide content such as sitemap links, copyright text, logo
            of your brand, social media account links, and more.
          </p>

          {/* Card with Tab Feature */}
          <div className="w-full flex flex-col gap-10">
            {footer.map((f, index) => (
              <TabCard
                key={index}
                index={index}
                id={f.id}
                title={
                  f.id
                    .replace(/-/g, " ") // Replace hyphens with spaces
                    .replace(/^\w/, (c) => c.toUpperCase()) // Capitalize the first character
                }
                leftCode={f.leftCode}
                rightCode={f.rightCode}
              />
            ))}
          </div>
        </div>
        <div className="hidden lg:flex lg:w-[25%] pl-10 py-4 flex-col gap-2 overflow-y-auto scrollbar-hide">
          <h1 className="font-semibold text-lg">On This Page</h1>
          <div className="text-sm flex flex-col items-start gap-2 text-neutral-200">
            {footer.map((f, index) => (
              <a key={index} href={`#${f.id}`}>
                {">"}{" "}
                {
                  f.id
                    .replace(/-/g, " ") // Replace hyphens with spaces
                    .replace(/^\w/, (c) => c.toUpperCase()) // Capitalize the first character
                }
              </a>
            ))}
          </div>
        </div>
      </div>
    </ComponentPageLayout>
  );
}
