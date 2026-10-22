import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { topics, CATEGORIES, categoryList } from "@/data/school";
import { IMG } from "@/data/images";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Eyebrow, Btn } from "@/components/ui-bits";
import { XMark } from "@/components/brand";

const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

export default function School() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(
    () => (filter === "all" ? topics : topics.filter((tp) => tp.category === filter)),
    [filter]
  );

  const filters = [
    { id: "all", label: t.school.filters.all },
    ...categoryList.map((c) => ({ id: c, label: CATEGORIES[c][lang] })),
  ];

  return (
    <>
      <PageHeader
        testId="school-page-title"
        eyebrow={t.school.eyebrow}
        title={[t.school.title]}
        body={t.school.body}
      />

      <section className="bg-bone py-16 text-carbon sm:py-20 lg:py-24" data-testid="school-library">
        <div className={SHELL}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Eyebrow className="!text-rust">{t.school.filtersLabel}</Eyebrow>
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

          <motion.div layout className="mt-12 border-t border-carbon/20">
            <AnimatePresence mode="popLayout">
              {filtered.map((tp, i) => (
                <motion.div
                  key={tp.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.3) }}
                >
                  <TopicRow topic={tp} index={i} />
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

      <section className="grain bg-carbon py-20 sm:py-24 lg:py-32" data-testid="school-academy-cta">
        <div className={`${SHELL} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
          <Reveal>
            <Eyebrow>{t.school.academyCta.heading}</Eyebrow>
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

function TopicRow({ topic, index }) {
  const { t, lang } = useLang();
  return (
    <div
      className="group grid gap-4 border-b border-carbon/20 py-8 transition-colors duration-200 hover:bg-carbon/[0.03] md:grid-cols-12 md:items-baseline"
      data-testid={`school-topic-${topic.id}`}
    >
      <span className="font-mono text-xs tracking-label text-rust md:col-span-1">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="md:col-span-5">
        <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-200 group-hover:text-rust sm:text-3xl">
          {topic.title[lang]}
        </h3>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-stonegray">
          {CATEGORIES[topic.category][lang]}
        </p>
      </div>
      <p className="max-w-md text-sm leading-relaxed text-carbon/70 md:col-span-4">
        {topic.summary[lang]}
      </p>
      <div className="flex items-center gap-3 md:col-span-2 md:justify-end">
        <span
          data-testid={`school-topic-status-${topic.id}`}
          className="inline-flex items-center gap-2 border border-rust/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-rust"
        >
          <XMark className="h-2 w-2" />
          {t.status.comingSoon}
        </span>
      </div>
    </div>
  );
}
