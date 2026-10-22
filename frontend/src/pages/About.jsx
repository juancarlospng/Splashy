import { useLang } from "@/i18n/LanguageContext";
import { IMG } from "@/data/images";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Eyebrow, Btn } from "@/components/ui-bits";
import { Emblem, XMark } from "@/components/brand";
import { XMarker, Trajectory, CourtArc, FrameTag } from "@/components/Graphics";

const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  const principles =
    lang === "en"
      ? ["Performance", "Discipline", "Style", "Development"]
      : ["Rendimiento", "Disciplina", "Estilo", "Desarrollo"];
  return (
    <>
      <PageHeader
        testId="about-page-title"
        index="06"
        eyebrow={a.eyebrow}
        title={[a.title]}
        body={a.mission.body}
      />

      {/* Mission + principles + emblem moment */}
      <section className="bg-bone py-16 text-carbon sm:py-20 lg:py-24" data-testid="about-mission">
        <div className={`${SHELL} grid gap-14 lg:grid-cols-12 lg:gap-20`}>
          <Reveal className="lg:col-span-7">
            <XMarker index="01" dark={false} label={a.mission.eyebrow} />
            <h2 className="mt-8 font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              {a.mission.heading}
            </h2>
            <div className="mt-10 border-t border-carbon/20">
              {principles.map((p, i) => (
                <Reveal key={p} delay={i * 0.06}>
                  <div
                    className="group flex items-baseline gap-6 border-b border-carbon/20 py-5 sm:gap-10"
                    data-testid={`about-principle-${i}`}
                  >
                    <span className="font-mono text-xs tracking-label text-rust">0{i + 1}</span>
                    <span className="font-display text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                      {p}
                    </span>
                    <Trajectory className="ml-auto hidden w-32 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block" />
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative flex justify-center border border-carbon/20 p-10 lg:p-14" data-testid="about-emblem">
              <span className="absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-rust" aria-hidden="true" />
              <span className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-rust" aria-hidden="true" />
              <Emblem className="h-56 w-auto" glyph="#C6561A" xColor="#1C1C1C" />
            </div>
            <FrameTag dark={false} className="mt-6">
              {lang === "en" ? "Eye — Arm — Wave — Brain" : "Ojo — Brazo — Ola — Cerebro"}
            </FrameTag>
            <p className="mt-4 text-sm leading-relaxed text-carbon/70">{a.emblem.body}</p>
          </Reveal>
        </div>
      </section>

      {/* School / Academy relationship */}
      <section className="grain relative overflow-hidden bg-carbon py-20 sm:py-24 lg:py-32" data-testid="about-ecosystem">
        <CourtArc className="pointer-events-none absolute -bottom-40 left-[-10%] w-[640px]" />
        <div className={`${SHELL} grid gap-14 lg:grid-cols-12 lg:gap-16`}>
          <Reveal className="lg:col-span-7">
            <XMarker index="02" label={a.ecosystem.eyebrow} />
            <h2 className="mt-8 max-w-xl font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
              {a.ecosystem.heading}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/70">{a.ecosystem.body}</p>
            <p className="mt-4 max-w-lg font-display text-xl italic text-bone/85 sm:text-2xl">
              {a.ecosystem.body2}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Btn to="/school" testId="about-school-link">{t.common.exploreSchool}</Btn>
              <Btn to="/programs" variant="solid" testId="about-programs-link">{t.common.explorePrograms}</Btn>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="flex items-center lg:col-span-5">
            <div className="w-full overflow-hidden border border-bone/15">
              <img
                src={IMG.courtDusk.src}
                width={IMG.courtDusk.w}
                height={IMG.courtDusk.h}
                alt={IMG.courtDusk.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Creator — portrait-led */}
      <section className="bg-bone py-16 text-carbon sm:py-20 lg:py-24" data-testid="about-creator">
        <div className={`${SHELL} grid gap-14 lg:grid-cols-12 lg:gap-20`}>
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <img
                src={IMG.creatorPortrait.src}
                width={IMG.creatorPortrait.w}
                height={IMG.creatorPortrait.h}
                alt={IMG.creatorPortrait.alt}
                loading="lazy"
                className="aspect-[3/4] w-full border border-carbon/25 object-cover"
              />
              <span className="absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-rust" aria-hidden="true" />
              <span className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-rust" aria-hidden="true" />
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-stonegray">
              {t.footer.imageryNote}
            </p>
          </Reveal>
          <div className="flex flex-col justify-center lg:col-span-6">
            <Reveal>
              <XMarker index="03" dark={false} label={a.creator.eyebrow} />
              <h2 className="mt-8 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl">
                Marquie <span className="italic text-rust">“Splashy”</span> Smith
              </h2>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-label text-stonegray">{a.creator.role ?? t.home.creator.role}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-carbon/75 sm:text-lg">
                {a.creator.body}
              </p>
              <p className="mt-6 max-w-xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-stonegray">
                <XMark className="mr-2 inline h-2.5 w-2.5 text-rust" />
                {a.creator.note}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Verified results — prepared, not invented */}
      <section className="grain bg-carbon py-20 sm:py-24 lg:py-32" data-testid="about-results">
        <div className={SHELL}>
          <Reveal>
            <XMarker index="04" label={a.results.eyebrow} />
            <h2 className="mt-8 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
              {a.results.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone/70">{a.results.body}</p>
          </Reveal>
          <Reveal delay={0.12} className="mt-12">
            <div
              className="flex items-center justify-between border border-dashed border-bone/25 px-6 py-10"
              data-testid="about-results-empty"
            >
              <p className="font-display text-xl italic text-bone/50">{a.results.empty}</p>
              <XMark className="h-4 w-4 text-bone/30" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}