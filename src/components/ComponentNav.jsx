import { NavLink } from "react-router-dom";

export default function ComponentNav() {
  return (
    <div className="w-full flex flex-col gap-4 overflow-auto">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-lg">Getting Started</h1>
        <div className="flex flex-col text-neutral-400 gap-1">
          <NavLink
            to="/component"
            className={({ isActive }) =>
              isActive ? "text-white font-medium" : "text-neutral-400"
            }
          >
            Introduction
          </NavLink>

          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive ? "text-white font-medium" : "text-neutral-400"
            }
          >
            Installation
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-lg">Templates</h1>
        <div className="flex flex-col text-neutral-400 gap-1">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "text-white font-medium" : "text-neutral-400"
            }
          >
            Portfolio
          </NavLink>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-lg">Components</h1>
        <div className="flex flex-col text-neutral-400 gap-1">
          <NavLink
            to="/button"
            className={({ isActive }) =>
              isActive ? "text-white font-medium" : "text-neutral-400"
            }
          >
            Button
          </NavLink>
          <NavLink
            to="/input"
            className={({ isActive }) =>
              isActive ? "text-white font-medium" : "text-neutral-400"
            }
          >
            Input
          </NavLink>
          <NavLink
            to="/card"
            className={({ isActive }) =>
              isActive ? "text-white font-medium" : "text-neutral-400"
            }
          >
            Card
          </NavLink>
        </div>
      </div>
    </div>
  );
}
