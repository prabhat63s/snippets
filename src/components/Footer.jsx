import { Link } from "react-router-dom";

export default function Footer() {
  return (
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
  );
}
