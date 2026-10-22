import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { topics, CATEGORIES, categoryList } from "@/data/school";
import { IMG } from "@/data/images";
import PageHeader from "@/components/PageHeader";
import { Reveal, EASE } from "@/components/motion";
import { Eyebrow, Btn } from "@/components/ui-bits";
import { XMarker, FrameTag, CourtArc } from "@/components/Graphics";
import { XMark } from "@/components/brand";

const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

const featuredImgs = {
  approach: IMG.courtWalk,
  "foot-gathers": IMG.ballGrip,
  "windmill-tomahawk": IMG.heroDunk,
};

export default function School() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(
    () => (filter === "all" ? topics : topics.filter((tp) => tp.category === filter)),
    [filter]
  );
  const featured = filtered.filter((tp) => tp.featured);
  const rest = filtered.filter((tp) => !tp.featured);

  const filters = [
    { id: "all", label: t.school.filters.all },
    ...categoryList.map((c) => ({ id: c, label: CATEGORIES[c][lang] })),
  ];

  return (
    <>
      <PageHeader
        testId="school-page-title"
        index="01"
        eyebrow={t.school.eyebrow}
        title={[t.school.title]}
        body={t.school.body}
      />

      <section className="bg-bone py-16 text-carbon sm:py-20 lg:py-24" data-testid="school-library">
        <div className={SHELL}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <XMarker index="01" dark={false} label={t.school.freeBadge} />
            <p className="font-mono text-[11px] uppercase tracking-label text-stonegray" data-testid="school-topic-count">
              {filtered.length} {t.school.count}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label={t.school.filtersLabel}>
            {filters.map((f) => (
              <button
                key={f.id}
                data-testid={`school-category-filter-${f.id}`}
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`border px-4 py-2.5 font-mono text-[11px] uppercase tracking-label transition-colors duration-200 ${
                  filter === f.id
                    ? "border-rust bg-rust text-bone"
                    : "border-carbon/30 text-carbon/70 hover:border-rust hover:text-rust"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Featured episodes — varied editorial sizes */}
          {featured.length > 0 && (
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {featured.map((tp, i) => (
                <Reveal key={tp.id} className={i === 0 ? "md:col-span-2" : ""}>
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="group grid h-full gap-6 md:grid-cols-2"
                    data-testid={`school-topic-${tp.id}`}
                  >
                    <div className={`relative overflow-hidden ${i === 0 ? "md:col-span-1" : ""}`}>
                      <img
                        src={featuredImgs[tp.id]?.src}
                        width={featuredImgs[tp.id]?.w}
                        height={featuredImgs[tp.id]?.h}
                        alt=""
                        loading="lazy"
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                          i === 0 ? "aspect-[16/9] md:aspect-[4/3]" : "aspect-[4/3]"
                        }`}
                      />
                      <span className="absolute left-4 top-4">
                        <FrameTag dark={false}>F.{String(filtered.indexOf(tp) + 1).padStart(2, "0")}</FrameTag>
                      </span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="font-mono text-[10px] uppercase tracking-label text-stonegray">
                        {CATEGORIES[tp.category][lang]}
                      </span>
                      <h3 className="mt-3 font-display text-3xl font-medium tracking-tight transition-colors duration-200 group-hover:text-rust sm:text-4xl">
                        {tp.title[lang]}
                      </h3>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-carbon/70">
                        {tp.summary[lang]}
                      </p>
                      <div className="mt-6">
                        <ComingSoon />
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          )}

          {/* Archive list — dense editorial index */}
          <motion.div layout className="mt-16 border-t border-carbon/20">
            <AnimatePresence mode="popLayout">
              {rest.map((tp, i) => (
                <motion.div
                  key={tp.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.25) }}
                >
                  <div
                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-carbon/20 py-6 transition-colors duration-200 hover:bg-carbon/[0.03] sm:gap-8"
                    data-testid={`school-topic-${tp.id}`}
                  >
                    <span className="font-mono text-xs tracking-label text-rust">
                      {String(filtered.indexOf(tp) + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium tracking-tight transition-colors duration-200 group-hover:text-rust sm:text-2xl">
                        {tp.title[lang]}
                      </h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-stonegray">
                        {CATEGORIES[tp.category][lang]}
                      </p>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-carbon/60 sm:hidden">
                        {tp.summary[lang]}
                      </p>
                    </div>
                    <div className="hidden max-w-sm text-sm leading-relaxed text-carbon/60 md:block">
                      {tp.summary[lang]}
                    </div>
                    <span
                      data-testid={`school-topic-status-${tp.id}`}
                      aria-label={t.status.comingSoon}
                      className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-rust sm:block"
                    >
                      <XMark className="h-2.5 w-2.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <Reveal className="mt-12">
            <p className="max-w-2xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-stonegray">
              {t.school.statusNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-carbon py-20 sm:py-24 lg:py-32" data-testid="school-academy-cta">
        <CourtArc className="pointer-events-none absolute -bottom-36 right-[-6%] w-[560px]" />
        <div className={`${SHELL} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
          <Reveal>
            <XMarker index="02" />
            <h2 className="mt-8 max-w-lg font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
              {t.school.academyCta.heading}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/70 sm:text-lg">
              {t.school.academyCta.body}
            </p>
            <div className="mt-8">
              <Btn to="/programs" variant="solid" testId="school-academy-cta-button">
                {t.school.academyCta.cta}
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="overflow-hidden border border-bone/15">
              <img
                src={IMG.playerFocus.src}
                width={IMG.playerFocus.w}
                height={IMG.playerFocus.h}
                alt={IMG.playerFocus.alt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ComingSoon() {
  const { t } = useLang();
  return (
    <span
      className="inline-flex items-center gap-2 border border-rust/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-rust"
      data-testid="school-topic-coming-soon"
    >
      <XMark className="h-2 w-2" />
      {t.status.comingSoon}
    </span>
  );
}
