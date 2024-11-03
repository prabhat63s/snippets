import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { RiCloseLine } from "react-icons/ri";
import { LuComponent } from "react-icons/lu";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import ComponentNav from "./ComponentNav";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const nav = [
    { title: "Components", to: "/docs" },
    { title: "Template", to: "/template" },
    { title: "Showcase", to: "/showcase" },
  ];

  const social = [
    { icon: <FaGithub size={18} />, to: "https://github.com/prabhat63s" },
    { icon: <FaXTwitter size={18} />, to: "https://x.com/prabhatsingh_69" },
    {
      icon: <FaLinkedinIn size={18} />,
      to: "https://www.linkedin.com/in/prabhat-singh-10a134255/",
    },
  ];

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = navOpen ? "hidden" : "unset";

    return () => {
      html.style.overflow = "unset";
    };
  }, [navOpen]);

  return (
    <div className="w-full border-b border-neutral-800 sticky z-50 top-0 backdrop-blur-lg">
      <div className="w-full flex justify-between items-center h-[9vh] px-4 lg:px-8">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex gap-2 items-center">
            <span className="flex items-center gap-1">
              <LuComponent
                size={28}
                className="bg-white text-black p-1 rounded-lg"
              />
              <h1 className="font-semibold text-lg">Snippet UI</h1>
            </span>
            <span className="text-xs bg-neutral-800 px-2 py-1 rounded-lg">
              Beta
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center">
            {nav.map((n, index) => (
              <Link
                to={n.to}
                key={index}
                className="text-neutral-400 text-sm hover:text-white"
              >
                {n.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Navigation */}
        <div className="hidden lg:flex gap-4 items-center">
          {social.map((s, index) => (
            <Link
              to={s.to}
              key={index}
              className="hover:bg-neutral-800 p-1.5 rounded-lg text-sm text-white"
            >
              {s.icon}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          {!navOpen ? (
            <HiBars2
              className="cursor-pointer hover:text-neutral-400"
              size={30}
              onClick={toggleNav}
            />
          ) : null}
        </div>

        {/* Mobile Navigation */}
        {navOpen && (
          <div className="fixed p-5 z-50 top-0 w-[75%] h-screen border-t border-neutral-800 flex gap-5 flex-col right-0 bg-black">
            <div className="flex justify-end">
              <RiCloseLine
                className="cursor-pointer hover:text-neutral-400"
                size={30}
                onClick={toggleNav}
              />
            </div>
            {nav.map((n, index) => (
              <Link
                to={n.to}
                key={index}
                className="text-white font-semibold text-lg"
                onClick={closeNav}
              >
                {n.title}
              </Link>
            ))}
            {/* Components nav */}
            <ComponentNav />
          </div>
        )}
      </div>
    </div>
  );
}
