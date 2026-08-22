import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Kids Zone", path: "/kids-zone" },
  { name: "Adult Programs", path: "/adult-programs" },
  { name: "Trainers", path: "/trainers" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto mt-3 max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight"
            >
              Code<span className="text-blue-400">Sphere</span>
            </Link>

            <div className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm transition ${
                      isActive
                        ? "text-blue-400"
                        : "text-slate-300 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Enquire Now
              </Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-lg p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="mt-4 border-t border-white/10 pt-4 lg:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    {item.name}
                  </NavLink>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-blue-500 px-4 py-3 text-center font-semibold"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}