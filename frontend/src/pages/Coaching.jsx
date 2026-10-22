import { useLang } from "@/i18n/LanguageContext";
import { getProgram } from "@/data/programs";
import { IMG } from "@/data/images";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Eyebrow, Btn, StatusTag } from "@/components/ui-bits";
import { statusLabel } from "./Programs";

const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

function Option({ program, img, index }) {
  const { t, lang } = useLang();
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <article
        className={`flex h-full flex-col ${
          index === 0 ? "bg-carbon text-bone" : "border border-carbon/25 bg-bone text-carbon"
        }`}
        data-testid={`coaching-option-${program.id}`}
      >
        <div className="overflow-hidden">
          <img
            src={img.src}
            width={img.w}
            height={img.h}
            alt={img.alt}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col p-8 lg:p-12">
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-xs tracking-label text-rust">0{index + 1}</span>
            <StatusTag statusKey={program.status} label={statusLabel(t, program.status)} dark={index === 0} />
          </div>
          <h2 className="mt-6 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {program.name[lang]}
          </h2>
          <p className="mt-3 font-display text-xl italic text-rust">{program.tagline[lang]}</p>
          <p className={`mt-6 flex-1 text-base leading-relaxed ${index === 0 ? "text-bone/70" : "text-carbon/70"}`}>
            {program.overview[lang]}
          </p>
          <dl className={`mt-8 border-t ${index === 0 ? "border-bone/20" : "border-carbon/20"}`}>
            {[
              [t.common.who, program.audience[lang]],
              [t.common.focus, program.focus[lang]],
              [t.common.format, program.format[lang]],
            ].map(([k, v]) => (
              <div key={k} className={`flex gap-4 border-b py-4 text-sm ${index === 0 ? "border-bone/10" : "border-carbon/10"}`}>
                <dt className="w-20 shrink-0 font-mono text-[10px] uppercase tracking-label text-stonegray">
                  {k}
                </dt>
                <dd className={index === 0 ? "text-bone/80" : "text-carbon/80"}>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <Btn
              to={`/programs/${program.id}`}
              variant={index === 0 ? "outline" : "outlineDark"}
              testId={`coaching-option-link-${program.id}`}
            >
              {t.common.learnMore}
            </Btn>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Coaching() {
  const { t } = useLang();
  const personalized = getProgram("personalized-flight");
  const consultation = getProgram("consultation");
  return (
    <>
      <PageHeader
        testId="coaching-page-title"
        eyebrow={t.coaching.eyebrow}
        title={[t.coaching.title]}
        body={t.coaching.body}
      />
      <section className="bg-bone py-16 sm:py-20 lg:py-24" data-testid="coaching-options">
        <div className={`${SHELL} grid gap-10 lg:grid-cols-2 lg:gap-14`}>
          <Option program={personalized} img={IMG.playerSpot} index={0} />
          <Option program={consultation} img={IMG.courtWalk} index={1} />
        </div>
      </section>
      <section className="grain bg-carbon py-20 sm:py-24" data-testid="coaching-cta">
        <div className={`${SHELL} flex flex-col justify-between gap-10 md:flex-row md:items-center`}>
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-4xl">
              {t.coaching.cta}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Btn to="/contact" testId="coaching-contact-cta">{t.coaching.contactCta}</Btn>
              <Btn to="/flight-test" variant="solid" testId="coaching-test-cta">{t.common.requestTest}</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
