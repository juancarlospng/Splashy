import { Link, Navigate, useParams } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { getProgram, flightLevels } from "@/data/programs";
import { Reveal } from "@/components/motion";
import { Eyebrow, Btn, StatusTag } from "@/components/ui-bits";
import { statusLabel } from "./Programs";

const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

export default function ProgramDetail() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const p = getProgram(slug);
  if (!p) return <Navigate to="/programs" replace />;

  const meta = [
    [t.common.who, p.audience[lang]],
    [t.common.focus, p.focus[lang]],
    [t.common.format, p.format[lang]],
  ];
  const cta =
    p.id === "flight-test"
      ? { to: "/flight-test", label: t.programs.detailCta.training }
      : p.id === "personalized-flight" || p.id === "consultation"
      ? { to: "/coaching", label: t.programs.detailCta.coaching }
      : p.id === "flight-camps"
      ? { to: "/camps", label: t.programs.detailCta.camps }
      : p.core
      ? { to: "/flight-test", label: t.programs.detailCta.training }
      : { to: "/contact", label: t.programs.detailCta.contact };

  return (
    <>
      <header className="grain bg-carbon pb-16 pt-32 sm:pb-20 sm:pt-40" data-testid="program-detail-header">
        <div className={SHELL}>
          <Link
            to="/programs"
            data-testid="program-detail-back"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-bone/50 transition-colors duration-200 hover:text-rust"
          >
            <span aria-hidden="true">←</span> {t.common.backToPrograms}
          </Link>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1
                data-testid="program-detail-name"
                className="font-display text-4xl font-medium tracking-tight text-bone sm:text-6xl lg:text-7xl"
              >
                {p.name[lang]}
              </h1>
              <p className="mt-4 max-w-xl font-display text-xl italic text-bone/75 sm:text-2xl">
                {p.tagline[lang]}
              </p>
            </div>
            <StatusTag statusKey={p.status} label={statusLabel(t, p.status)} />
          </div>
        </div>
      </header>

      <section className="bg-bone py-16 text-carbon sm:py-20 lg:py-24" data-testid="program-detail-body">
        <div className={SHELL}>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-7">
              <Eyebrow className="!text-rust">{t.common.overview}</Eyebrow>
              <p className="mt-8 text-lg leading-relaxed text-carbon/80 sm:text-xl">
                {p.overview[lang]}
              </p>

              {p.hasLevels && (
                <div className="mt-14 border-t border-carbon/20" data-testid="program-detail-levels">
                  {flightLevels.map((l, i) => (
                    <div
                      key={l.n}
                      className={`flex flex-col gap-1 border-b border-carbon/20 py-6 sm:flex-row sm:items-baseline sm:gap-8`}
                    >
                      <span className="font-mono text-xs tracking-label text-rust sm:w-16">
                        LVL {l.n}
                      </span>
                      <h3 className="font-display text-2xl font-medium sm:w-56">{l.name[lang]}</h3>
                      <p className="text-sm text-carbon/70">{l.desc[lang]}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-14">
                <Btn to={cta.to} variant="solid" testId="program-detail-cta">
                  {cta.label}
                </Btn>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-5">
              <dl className="border-t border-carbon/20">
                {meta.map(([k, v]) => (
                  <div key={k} className="border-b border-carbon/20 py-6">
                    <dt className="font-mono text-[10px] uppercase tracking-label text-stonegray">{k}</dt>
                    <dd className="mt-2 text-base leading-relaxed text-carbon/85">{v}</dd>
                  </div>
                ))}
                {p.duration && (
                  <div className="border-b border-carbon/20 py-6" data-testid="program-detail-duration">
                    <dt className="font-mono text-[10px] uppercase tracking-label text-stonegray">
                      {t.common.duration}
                    </dt>
                    <dd className="mt-2 text-base leading-relaxed text-carbon/85">{p.duration[lang]}</dd>
                  </div>
                )}
                <div className="border-b border-carbon/20 py-6">
                  <dt className="font-mono text-[10px] uppercase tracking-label text-stonegray">
                    {t.common.statusLabel}
                  </dt>
                  <dd className="mt-3">
                    <StatusTag statusKey={p.status} label={statusLabel(t, p.status)} dark={false} />
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
