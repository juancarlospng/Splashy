import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { StatusTag } from "./ui-bits";
import { statusLabel } from "@/data/statusLabel";
import { EASE } from "./motion";
import { XMark } from "./brand";

// Editorial program index. Desktop: hovering/focusing a row updates a shared
// sticky image panel. Mobile: rows expand on tap with all details visible.
export default function ProgramIndex({ items, imageById, dark = false, testPrefix = "program-index" }) {
  const { t, lang } = useLang();
  const [active, setActive] = useState(items[0]?.id);
  const [open, setOpen] = useState(null);

  const ActiveImage = ({ id }) => {
    const img = imageById[id];
    const program = items.find((p) => p.id === id);
    return (
      <motion.figure
        key={id}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="absolute inset-0"
      >
        <img
          src={img?.src}
          width={img?.w}
          height={img?.h}
          alt={img?.alt || ""}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-carbon/25" />
        <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">
          <span className="font-mono text-[10px] uppercase tracking-label text-bone/80">
            {program?.name[lang]}
          </span>
          <StatusTag statusKey={program?.status} label={statusLabel(t, program?.status)} />
        </figcaption>
      </motion.figure>
    );
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <div className="border-t border-carbon/20">
          {items.map((p, i) => {
            const isActive = active === p.id;
            const isOpen = open === p.id;
            const meta = [
              [t.common.who, p.audience[lang]],
              [t.common.focus, p.focus[lang]],
              [t.common.format, p.format[lang] + (p.duration ? ` — ${p.duration[lang]}` : "")],
            ];
            return (
              <div key={p.id} className="border-b border-current/20">
                <button
                  data-testid={`${testPrefix}-row-${p.id}`}
                  aria-expanded={isOpen}
                  onClick={() => {
                    setActive(p.id);
                    setOpen(isOpen ? null : p.id);
                  }}
                  onMouseEnter={() => setActive(p.id)}
                  onFocus={() => setActive(p.id)}
                  className={`group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-4 py-6 text-left transition-colors duration-300 sm:gap-8 lg:py-7 ${
                    dark ? "text-bone" : "text-carbon"
                  }`}
                >
                  <span className="font-mono text-xs tracking-label text-rust">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-2xl font-medium tracking-tight transition-all duration-300 group-hover:translate-x-2 sm:text-3xl lg:text-4xl ${
                      isActive ? "text-rust" : ""
                    }`}
                  >
                    {p.name[lang]}
                  </span>
                  <span className="flex items-center gap-4">
                    <StatusTag statusKey={p.status} label={statusLabel(t, p.status)} dark={dark} />
                    <span
                      aria-hidden="true"
                      className={`hidden font-mono text-sm transition-transform duration-300 text-rust sm:block ${
                        isOpen ? "rotate-45" : "group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </span>
                </button>

                {/* Expanded details (mobile primary, desktop secondary) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                      data-testid={`${testPrefix}-details-${p.id}`}
                    >
                      <div className={`pb-8 ${dark ? "text-bone/70" : "text-carbon/70"}`}>
                        <p className="max-w-lg font-display text-lg italic sm:text-xl">{p.tagline[lang]}</p>
                        <dl className="mt-5 space-y-2">
                          {meta.map(([k, v]) => (
                            <div key={k} className="flex gap-4 text-sm">
                              <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-label text-stonegray">
                                {k}
                              </dt>
                              <dd>{v}</dd>
                            </div>
                          ))}
                        </dl>
                        <a
                          href={`/programs/${p.id}`}
                          data-testid={`${testPrefix}-explore-${p.id}`}
                          className="mt-6 inline-flex items-center gap-2 border border-rust px-5 py-3 font-mono text-[11px] uppercase tracking-label text-rust transition-colors duration-200 hover:bg-rust hover:text-bone"
                        >
                          {t.common.learnMore} →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <p className="mt-4 hidden font-mono text-[10px] uppercase tracking-label text-stonegray lg:block">
          <XMark className="mr-2 inline h-2 w-2 text-rust" />
          {t.graphics.previewHint}
        </p>
      </div>

      {/* Shared image panel (desktop) */}
      <div className="relative hidden lg:col-span-5 lg:block">
        <div className="sticky top-28 overflow-hidden border border-carbon/20" data-testid={`${testPrefix}-panel`}>
          <div className="relative aspect-[3/4] w-full">
            <AnimatePresence mode="popLayout">
              <ActiveImage key={active} id={active} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
