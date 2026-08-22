import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Kids Zone", href: "#kids-zone" },
  { name: "Adult Programs", href: "#adult-programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "Contact", href: "#contact" },
];

const programs = [
  "Python",
  "C / C++",
  "Java",
  "Web Development",
  "AI & Machine Learning",
  "DSA",
  "DevOps",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold text-white"
            >
              Code<span className="text-blue-400">Mentor</span>
            </a>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Personalised 1:1 coding and technology training
              for students, professionals and career learners
              in the UK and India.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-400/40 hover:text-blue-400"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-400/40 hover:text-blue-400"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1 text-slate-400 transition hover:text-white"
                  >
                    {link.name}

                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Programs
            </h3>

            <ul className="mt-5 space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <a
                    href="#programs"
                    className="text-slate-400 transition hover:text-white"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">

              <a
                href="mailto:hello@codementor.com"
                className="flex items-start gap-3 text-slate-400 transition hover:text-white"
              >
                <Mail className="mt-1 h-5 w-5 shrink-0 text-blue-400" />

                <span>
                  hello@codementor.com
                </span>
              </a>

              <a
                href="tel:+440000000000"
                className="flex items-start gap-3 text-slate-400 transition hover:text-white"
              >
                <Phone className="mt-1 h-5 w-5 shrink-0 text-blue-400" />

                <span>
                  +44 0000 000000
                </span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-400" />

                <span>
                  United Kingdom
                  <br />
                  & India
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} CodeMentor. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}