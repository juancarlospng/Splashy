import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { corePrograms, devPrograms, flightLevels, STATUS } from "@/data/programs";
import { IMG } from "@/data/images";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Eyebrow, Btn, StatusTag, ArrowLink } from "@/components/ui-bits";

const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

const statusLabel = (t, s) =>
  ({
    [STATUS.AVAILABLE]: t.status.available,
    [STATUS.IN_DEV]: t.status.inDevelopment,
    [STATUS.PLANNED]: t.status.planned,
    [STATUS.UNDER_REVIEW]: t.status.underReview,
  }[s] || t.status.planned);

export default function Programs() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHeader
        testId="programs-page-title"
        eyebrow={t.programs.eyebrow}
        title={[t.programs.title]}
        body={t.programs.body}
      />

      {/* Main pathways */}
      <section className="bg-bone py-16 text-carbon sm:py-20 lg:py-24" data-testid="programs-core">
        <div className={SHELL}>
          <Reveal>
            <Eyebrow className="!text-rust">{t.programs.coreHeading}</Eyebrow>
          </Reveal>
          <div className="mt-10 border-t border-carbon/20">
            {corePrograms.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <Link
                  to={`/programs/${p.id}`}
                  data-testid={`programs-row-${p.id}`}
                  className="group grid gap-3 border-b border-carbon/20 py-8 transition-colors duration-200 hover:bg-carbon/[0.03] md:grid-cols-12 md:items-baseline"
                >
                  <span className="font-mono text-xs tracking-label text-rust md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl font-medium tracking-tight transition-colors duration-200 group-hover:text-rust sm:text-4xl md:col-span-4">
                    {p.name[lang]}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-carbon/70 md:col-span-5">
                    {p.tagline[lang]}
                  </p>
                  <div className="flex items-center gap-4 md:col-span-2 md:justify-end">
                    <StatusTag statusKey={p.status} label={statusLabel(t, p.status)} dark={false} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Levels */}
      <section className="grain bg-carbon py-20 sm:py-24 lg:py-32" data-testid="programs-levels">
        <div className={`${SHELL} grid gap-14 lg:grid-cols-12 lg:gap-20`}>
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{t.programs.levels.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
                {t.programs.levels.heading}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-bone/70">{t.programs.levels.body}</p>
              <div className="mt-8 overflow-hidden border border-bone/15">
                <img
                  src={IMG.hoopMoody.src}
                  width={IMG.hoopMoody.w}
                  height={IMG.hoopMoody.h}
                  alt={IMG.hoopMoody.alt}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            {flightLevels.map((l, i) => (
              <Reveal key={l.n} delay={i * 0.07}>
                <div
                  className={`flex flex-col gap-2 border-t border-bone/15 py-7 sm:flex-row sm:items-baseline sm:gap-10 ${
                    i === flightLevels.length - 1 ? "border-b" : ""
                  }`}
                  data-testid={`flight-level-${l.n}`}
                >
                  <span className="font-mono text-xs tracking-label text-rust sm:w-16">
                    LVL {l.n}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-bone sm:text-3xl sm:w-56">
                    {l.name[lang]}
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-bone/60">{l.desc[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* In development */}
      <section className="bg-bone py-16 text-carbon sm:py-20 lg:py-24" data-testid="programs-dev">
        <div className={SHELL}>
          <Reveal>
            <Eyebrow className="!text-rust">{t.programs.dev.eyebrow}</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              {t.programs.dev.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-carbon/70">{t.programs.dev.body}</p>
          </Reveal>
          <div className="mt-12 grid gap-px border border-carbon/20 bg-carbon/20 md:grid-cols-2 lg:grid-cols-3">
            {devPrograms.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05} className="h-full">
                <Link
                  to={`/programs/${p.id}`}
                  data-testid={`programs-dev-card-${p.id}`}
                  className="group flex h-full flex-col bg-bone p-8 transition-colors duration-200 hover:bg-carbon hover:text-bone"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-200 group-hover:text-rust">
                      {p.name[lang]}
                    </h3>
                    <StatusTag statusKey={p.status} label={statusLabel(t, p.status)} dark={false} />
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-carbon/65 transition-colors duration-200 group-hover:text-bone/65">
                    {p.tagline[lang]}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-rust">
                    {t.common.learnMore}
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="max-w-2xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-stonegray">
              {t.programs.dev.note}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="grain bg-carbon py-20 sm:py-24" data-testid="programs-cta">
        <div className={`${SHELL} flex flex-col justify-between gap-10 md:flex-row md:items-center`}>
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-4xl">
              {t.home.closing.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Btn to="/flight-test" variant="solid" testId="programs-cta-button">
              {t.home.closing.cta}
            </Btn>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export { statusLabel };
