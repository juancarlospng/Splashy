import { useLang } from "@/i18n/LanguageContext";
import { IMG } from "@/data/images";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Eyebrow, Btn } from "@/components/ui-bits";
import { Emblem, XMark } from "@/components/brand";

const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHeader
        testId="about-page-title"
        eyebrow={a.eyebrow}
        title={[a.title]}
        body={a.mission.body}
      />

      {/* Mission + emblem */}
      <section className="bg-bone py-16 text-carbon sm:py-20 lg:py-24" data-testid="about-mission">
        <div className={`${SHELL} grid items-center gap-14 lg:grid-cols-12 lg:gap-20`}>
          <Reveal className="lg:col-span-7">
            <Eyebrow className="!text-rust">{a.mission.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              {a.mission.heading}
            </h2>
            <div className="mt-10 grid grid-cols-2 border-t border-carbon/20 sm:grid-cols-4">
              {["Performance", "Discipline", "Style", "Development"].map((p, i) => (
                <div key={p} className="border-b border-carbon/20 py-6 sm:border-r sm:px-4 sm:last:border-r-0">
                  <span className="font-mono text-xs tracking-label text-rust">0{i + 1}</span>
                  <p className="mt-3 font-display text-xl font-medium" data-testid={`about-principle-${i}`}>
                    {lang === "en" ? p : ["Rendimiento", "Disciplina", "Estilo", "Desarrollo"][i]}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="flex justify-center border border-carbon/20 p-10 lg:p-14" data-testid="about-emblem">
              <Emblem className="h-56 w-auto" glyph="#C6561A" xColor="#1C1C1C" />
            </div>
            <p className="mt-6 text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-stonegray">
              {lang === "en"
                ? "The symbolic X — spirit, strength, movement, mind."
                : "La X simbólica — espíritu, fuerza, movimiento, mente."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* School / Academy relationship */}
      <section className="grain bg-carbon py-20 sm:py-24 lg:py-32" data-testid="about-ecosystem">
        <div className={`${SHELL} grid gap-14 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-bone/15`}>
          <Reveal className="lg:pr-16">
            <Eyebrow>{a.ecosystem.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-4xl">
              {a.ecosystem.heading}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/70">{a.ecosystem.body}</p>
          </Reveal>
          <Reveal delay={0.12} className="lg:pl-16">
            <div className="flex h-full flex-col justify-end lg:pt-24">
              <p className="max-w-lg text-base leading-relaxed text-bone/70">{a.ecosystem.body2}</p>
              <div className="mt-8 flex gap-4">
                <Btn to="/school" testId="about-school-link">{t.common.exploreSchool}</Btn>
                <Btn to="/programs" variant="solid" testId="about-programs-link">{t.common.explorePrograms}</Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Creator */}
      <section className="bg-bone py-16 text-carbon sm:py-20 lg:py-24" data-testid="about-creator">
        <div className={`${SHELL} grid items-center gap-14 lg:grid-cols-12 lg:gap-20`}>
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden border border-carbon/25">
              <img
                src={IMG.creatorPortrait.src}
                width={IMG.creatorPortrait.w}
                height={IMG.creatorPortrait.h}
                alt={IMG.creatorPortrait.alt}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow className="!text-rust">{a.creator.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-display text-4xl font-medium tracking-tight sm:text-5xl">
                {a.creator.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-carbon/75 sm:text-lg">
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
            <Eyebrow>{a.results.eyebrow}</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
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
