import { NavLink } from "react-router-dom";

export default function ComponentNav() {
  return (
    <div className="w-full flex flex-col gap-4 ">
      {/* Getting Started */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-lg">Getting Started</h1>
        <div className="flex flex-col text-neutral-400 gap-1">
          <NavLink
            to="/docs/introduction"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-neutral-800 px-2 py-1 rounded-r-md border-l-2 border-neutral-500"
                : "text-neutral-400 px-2 py-1 hover:underline"
            }
          >
            Introduction
          </NavLink>

          <NavLink
            to="/docs/installation"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-neutral-800 px-2 py-1 rounded-r-md border-l-2 border-neutral-500"
                : "text-neutral-400 px-2 py-1 hover:underline"
            }
          >
            Installation
          </NavLink>
        </div>
      </div>
      {/* Templates */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-lg">Templates</h1>
        <div className="flex flex-col text-neutral-400 gap-1">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-neutral-800 px-2 py-1 rounded-r-md border-l-2 border-neutral-500"
                : "text-neutral-400 px-2 py-1 hover:underline"
            }
          >
            Portfolio
          </NavLink>
        </div>
      </div>
      {/* Components */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-lg">Components</h1>
        <div className="flex flex-col text-neutral-400 gap-1">
          <NavLink
            to="/components/animation"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-neutral-800 px-2 py-1 rounded-r-md border-l-2 border-neutral-500"
                : "text-neutral-400 px-2 py-1 hover:underline"
            }
          >
            Animation
          </NavLink>
          <NavLink
            to="/components/button"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-neutral-800 px-2 py-1 rounded-r-md border-l-2 border-neutral-500"
                : "text-neutral-400 px-2 py-1 hover:underline"
            }
          >
            Button
          </NavLink>
          <NavLink
            to="/components/input"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-neutral-800 px-2 py-1 rounded-r-md border-l-2 border-neutral-500"
                : "text-neutral-400 px-2 py-1 hover:underline"
            }
          >
            Input
          </NavLink>
          <NavLink
            to="/components/card"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-neutral-800 px-2 py-1 rounded-r-md border-l-2 border-neutral-500"
                : "text-neutral-400 px-2 py-1 hover:underline"
            }
          >
            Card
          </NavLink>
          <NavLink
            to="/components/footer"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-neutral-800 px-2 py-1 rounded-r-md border-l-2 border-neutral-500"
                : "text-neutral-400 px-2 py-1 hover:underline"
            }
          >
            Footer
          </NavLink>
          <NavLink
            to="/components/spinner"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-neutral-800 px-2 py-1 rounded-r-md border-l-2 border-neutral-500"
                : "text-neutral-400 px-2 py-1 hover:underline"
            }
          >
            Spinner
          </NavLink>
        </div>
      </div>
    </div>
  );
}
