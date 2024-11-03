import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t text-sm text-neutral-400 border-neutral-800 bg-black px-4 py-6 lg:px-8">
      {/* Copyright */}
      <span>Built by</span>{" "}
      <Link
        to="https://prabhat-singh-portfolio.vercel.app/"
        target="_blank"
        className="text-white"
      >
        Prabhat Singh.
      </Link>{" "}
      <span>The source code is available on </span>{" "}
      <Link
        to="https://github.com/prabhat63s/snippets"
        target="_blank"
        className="text-white"
      >
        GitHub.
      </Link>
    </footer>
  );
}
