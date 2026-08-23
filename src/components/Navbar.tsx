import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Kids Zone", path: "/kids-zone" },
  { name: "Job Ready", path: "/job-ready" },
  { name: "Trainers", path: "/trainers" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E8E5E0] bg-white/90 px-4 py-3 shadow-sm backdrop-blur-xl">
          <div className="flex items-center justify-between">
            {/* Logo - Also leads Home */}
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#111111]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 text-sm font-bold text-white shadow-sm">
                C
              </span>

              <span>
                Code<span className="text-[#8B5CF6]">Sphere</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#8B5CF6]"
                        : "text-[#555555] hover:text-[#111111]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* CTA */}
              <Link
                to="/contact"
                className="rounded-xl bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#8B5CF6] hover:shadow-md"
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="rounded-xl border border-[#E8E5E0] p-2 text-[#111111] transition hover:bg-violet-50 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {open && (
            <div className="mt-4 border-t border-[#E8E5E0] pt-4 lg:hidden">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-violet-50 text-[#8B5CF6]"
                          : "text-[#555555] hover:bg-[#F8F7F5] hover:text-[#111111]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-xl bg-[#8B5CF6] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#7C3AED]"
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