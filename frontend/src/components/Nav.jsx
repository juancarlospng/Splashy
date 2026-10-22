import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { XMark } from "./brand";
import { EASE } from "./motion";

const links = [
  { to: "/school", key: "school", id: "school" },
  { to: "/programs", key: "programs", id: "programs" },
  { to: "/coaching", key: "coaching", id: "coaching" },
  { to: "/camps", key: "camps", id: "camps" },
  { to: "/about", key: "about", id: "about" },
];

export function LangSwitch({ className = "" }) {
  const { lang, setLang, t } = useLang();
  return (
    <div
      className={`flex items-center gap-0 font-mono text-xs tracking-label ${className}`}
      role="group"
      aria-label={t.lang.label}
    >
      {["en", "es"].map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="px-1.5 text-bone/30">/</span>}
          <button
            data-testid={`language-switch-${l}`}
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`px-0.5 py-1 transition-colors duration-200 ${
              lang === l ? "text-rust" : "text-bone/50 hover:text-bone"
            }`}
          >
            {t.lang[l]}
          </button>
        </span>
      ))}
    </div>
  );
}

export default function Nav() {
  const { t } = useLang();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? "bg-carbon/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-shell items-center justify-between px-5 sm:px-8 lg:px-12 transition-colors duration-300 ${
            scrolled ? "border-b border-bone/10" : "border-b border-transparent"
          }`}
        >
          <Link
            to="/"
            data-testid="nav-logo-home"
            className="flex items-center gap-3 py-5"
            aria-label="Flight Academy — home"
          >
            <XMark className="h-4 w-4 text-rust" />
            <span className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-bone">
              Flight <span className="hidden sm:inline">Academy</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.id}
                to={l.to}
                data-testid={`nav-link-${l.id}`}
                className={({ isActive }) =>
                  `group relative py-2 font-mono text-[11px] uppercase tracking-label transition-colors duration-200 ${
                    isActive ? "text-rust" : "text-bone/80 hover:text-bone"
                  }`
                }
              >
                {t.nav[l.key]}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <LangSwitch className="hidden sm:flex" />
            <Link
              to="/flight-test"
              data-testid="nav-cta-find-starting-point"
              className="hidden items-center gap-2 border border-rust px-5 py-2.5 font-mono text-[11px] uppercase tracking-label text-bone transition-colors duration-200 hover:bg-rust hover:text-bone md:inline-flex"
            >
              {t.nav.cta}
            </Link>
            <button
              data-testid="nav-menu-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              className="flex flex-col items-end gap-1.5 py-2 lg:hidden"
            >
              <span
                className={`h-px w-6 bg-bone transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-6 bg-bone transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-carbon px-6 pb-10 pt-28 lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {[...links, { to: "/contact", key: "contact", id: "contact" }].map((l, i) => (
                <motion.div
                  key={l.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: EASE }}
                  className="border-b border-bone/10"
                >
                  <NavLink
                    to={l.to}
                    data-testid={`mobile-nav-link-${l.id}`}
                    className={({ isActive }) =>
                      `block py-4 font-display text-3xl font-medium ${
                        isActive ? "text-rust" : "text-bone"
                      }`
                    }
                  >
                    {t.nav[l.key]}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <Link
                to="/flight-test"
                data-testid="mobile-nav-cta"
                className="inline-flex items-center justify-center border border-rust px-6 py-4 font-mono text-xs uppercase tracking-label text-bone"
              >
                {t.nav.cta}
              </Link>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-label text-bone/50">
                  {t.lang.label}
                </span>
                <LangSwitch />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
