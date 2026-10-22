import { useLang } from "@/i18n/LanguageContext";
import { corePrograms, devPrograms, flightLevels } from "@/data/programs";
import { statusLabel } from "@/data/statusLabel";
import { IMG } from "@/data/images";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Eyebrow, Btn, StatusTag } from "@/components/ui-bits";
import { XMarker, RiseMark, CourtArc } from "@/components/Graphics";
import ProgramIndex from "@/components/ProgramIndex";

const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

const programImage = (id) =>
  ({
    foundation: IMG.campAction,
    "flight-levels": IMG.hoopMoody,
    "personalized-flight": IMG.playerSpot,
    "flight-test": IMG.hoopNight,
    consultation: IMG.courtWalk,
    "flight-camps": IMG.ringOrange,
  }[id] || IMG.courtDusk);

export default function Programs() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHeader
        testId="programs-page-title"
        index="02"
        eyebrow={t.programs.eyebrow}
        title={[t.programs.title]}
        body={t.programs.body}
      />

      {/* Editorial program index — hover/tap to preview */}
      <section className="bg-bone py-16 text-carbon sm:py-20 lg:py-24" data-testid="programs-core">
        <div className={SHELL}>
          <Reveal>
            <XMarker index="01" dark={false} label={t.programs.coreHeading} />
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <ProgramIndex
              items={corePrograms}
              imageById={Object.fromEntries(corePrograms.map((p) => [p.id, programImage(p.id)]))}
              testPrefix="programs-row"
            />
          </Reveal>
        </div>
      </section>

      {/* Flight Levels — stepped progression with accessible disclosure */}
      <section className="grain relative overflow-hidden bg-carbon py-20 sm:py-24 lg:py-32" data-testid="programs-levels">
        <CourtArc className="pointer-events-none absolute -bottom-40 left-[-8%] w-[560px]" />
        <div className={`${SHELL} grid gap-14 lg:grid-cols-12 lg:gap-20`}>
          <div className="lg:col-span-5">
            <Reveal>
              <XMarker index="02" label={t.programs.levels.eyebrow} />
              <h2 className="mt-8 font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
                {t.programs.levels.heading}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-bone/70">{t.programs.levels.body}</p>
              <div className="mt-10 hidden lg:block">
                <RiseMark className="h-28 w-6 text-bone/40" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <LevelSteps />
          </div>
        </div>
      </section>

      {/* In development */}
      <section className="bg-bone py-16 text-carbon sm:py-20 lg:py-24" data-testid="programs-dev">
        <div className={SHELL}>
          <Reveal>
            <XMarker index="03" dark={false} label={t.programs.dev.eyebrow} />
            <h2 className="mt-8 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              {t.programs.dev.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-carbon/70">{t.programs.dev.body}</p>
          </Reveal>
          <div className="mt-12 grid gap-px border border-carbon/20 bg-carbon/20 md:grid-cols-2 lg:grid-cols-3">
            {devPrograms.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05} className="h-full">
                <a
                  href={`/programs/${p.id}`}
                  data-testid={`programs-dev-card-${p.id}`}
                  className="group flex h-full flex-col bg-bone p-8 transition-colors duration-200 hover:bg-carbon hover:text-bone"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-label text-stonegray">
                      F.{String(i + 1).padStart(2, "0")}
                    </span>
                    <StatusTag statusKey={p.status} label={statusLabel(t, p.status)} dark={false} />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-medium tracking-tight transition-colors duration-200 group-hover:text-rust">
                    {p.name[lang]}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-carbon/65 transition-colors duration-200 group-hover:text-bone/65">
                    {p.tagline[lang]}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-rust">
                    {t.common.learnMore}
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </a>
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

// Stepped level disclosure — staircase on desktop, accordion on all sizes.
function LevelSteps() {
  const { t, lang } = useLang();
  return (
    <div className="flex flex-col">
      {flightLevels.map((l, i) => (
        <Reveal key={l.n} delay={i * 0.06}>
          <details
            className={`group border-t border-bone/15 ${i === flightLevels.length - 1 ? "border-b" : ""}`}
            data-testid={`flight-level-${l.n}`}
            style={{ marginLeft: `min(${i * 6}%, 12rem)` }}
          >
            <summary className="flex cursor-pointer list-none items-baseline gap-6 py-6 transition-colors duration-200 hover:text-rust [&::-webkit-details-marker]:hidden lg:gap-10">
              <span className="font-mono text-xs tracking-label text-rust">LVL {l.n}</span>
              <h3 className="font-display text-2xl font-medium text-bone transition-colors duration-200 group-hover:text-rust sm:text-3xl">
                {l.name[lang]}
              </h3>
              <span
                aria-hidden="true"
                className="ml-auto font-mono text-rust transition-transform duration-300 group-open:rotate-45"
              >
                →
              </span>
            </summary>
            <p className="max-w-md pb-7 text-sm leading-relaxed text-bone/60 lg:pl-[4.5rem]">
              {l.desc[lang]}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
