import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { IMG } from "@/data/images";
import { topics } from "@/data/school";
import { corePrograms } from "@/data/programs";
import { Lines, Reveal, EASE } from "@/components/motion";
import { XMark } from "@/components/brand";
import { Btn, Eyebrow, StatusTag, ArrowLink } from "@/components/ui-bits";
import Marquee from "@/components/Marquee";

const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 110]);
  const quick = [
    { to: "/school", label: t.home.quick.items[0] },
    { to: "/programs", label: t.home.quick.items[1] },
    { to: "/coaching", label: t.home.quick.items[2] },
    { to: "/camps", label: t.home.quick.items[3] },
  ];
  return (
    <section className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-carbon" data-testid="home-hero">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y }}>
        <img
          src={IMG.heroDunk.src}
          width={IMG.heroDunk.w}
          height={IMG.heroDunk.h}
          alt={IMG.heroDunk.alt}
          className="h-full w-full object-cover object-[70%_center] sm:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/70 to-carbon/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-carbon to-transparent" />
      </motion.div>

      <div className={`relative ${SHELL} flex flex-1 flex-col justify-center pb-16 pt-32`}>
        <Eyebrow className="mb-6 opacity-0 [animation:fadein_0.8s_ease_0.9s_forwards]">
          {t.home.hero.eyebrow}
        </Eyebrow>

        <h1 className="font-display font-semibold uppercase leading-[0.9] tracking-tight text-bone">
          <span className="block overflow-hidden text-[clamp(3.8rem,13vw,11.5rem)]">
            <motion.span
              className="block"
              initial={reduce ? { opacity: 0 } : { y: "110%" }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.15, ease: EASE }}
            >
              Flight
            </motion.span>
          </span>
          <span className="flex items-center gap-4 sm:gap-6">
            <motion.span
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
              className="ml-1 hidden sm:block"
            >
              <XMark className="h-[0.32em] w-[0.32em] text-rust" />
            </motion.span>
            <span className="block overflow-hidden text-[clamp(3.8rem,13vw,11.5rem)]">
              <motion.span
                className="block"
                initial={reduce ? { opacity: 0 } : { y: "110%" }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
              >
                Academy
              </motion.span>
            </span>
          </span>
        </h1>

        <Lines
          lines={t.home.hero.headline.split(". ").map((s, i, arr) => (i < arr.length - 1 ? s + "." : s))}
          delay={0.85}
          className="mt-8 font-display text-2xl italic text-bone/90 sm:text-3xl lg:text-4xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15, ease: EASE }}
          className="mt-8 max-w-xl"
        >
          <p className="text-base leading-relaxed text-bone/70 sm:text-lg">{t.home.hero.support}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Btn to="/programs" variant="solid" testId="hero-cta-explore-academy">
              {t.home.hero.ctaPrimary}
            </Btn>
            <Btn to="/school" testId="hero-cta-discover-school">
              {t.home.hero.ctaSecondary}
            </Btn>
          </div>
        </motion.div>
      </div>

      <div className={`relative border-t border-bone/15 ${SHELL}`}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {quick.map((q, i) => (
            <Link
              key={q.to}
              to={q.to}
              data-testid={`hero-quick-link-${i}`}
              className={`group flex items-center justify-between py-5 pr-4 font-mono text-[11px] uppercase tracking-label text-bone/70 transition-colors duration-200 hover:text-rust ${
                i > 0 ? "border-l border-bone/15 pl-5 sm:pl-8" : ""
              }`}
            >
              {q.label}
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </div>
      <style>{`@keyframes fadein{to{opacity:1}}`}</style>
    </section>
  );
}

function Paths() {
  const { t } = useLang();
  const p = t.home.paths;
  return (
    <section className="bg-bone py-20 text-carbon sm:py-28 lg:py-36" data-testid="home-paths">
      <div className={SHELL}>
        <Reveal>
          <Eyebrow className="!text-rust">{p.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            {p.heading}
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-carbon/20">
          {[p.school, p.academy].map((block, i) => (
            <Reveal key={i} delay={i * 0.12} className={i > 0 ? "lg:pl-16" : "lg:pr-16"}>
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs tracking-label text-rust">{block.index}</span>
                <span className="font-mono text-[10px] uppercase tracking-label text-stonegray">
                  {block.badge}
                </span>
              </div>
              <h3 className="mt-6 font-display text-4xl font-medium tracking-tight sm:text-5xl">
                {block.name}
              </h3>
              <p className="mt-3 font-display text-2xl italic text-rust">{block.tag}</p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-carbon/70">{block.body}</p>
              <div className="mt-8">
                <ArrowLink to={i === 0 ? "/school" : "/programs"} dark={false} testId={`home-path-cta-${i}`}>
                  {block.cta}
                </ArrowLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Start() {
  const { t } = useLang();
  const s = t.home.start;
  return (
    <section className="grain relative bg-carbon py-20 sm:py-28 lg:py-36" data-testid="home-start">
      <div className={`${SHELL} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
        <Reveal>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
            {s.heading}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/70 sm:text-lg">{s.body}</p>
          <div className="mt-9">
            <Btn to="/flight-test" variant="solid" testId="home-start-cta">
              {s.cta}
            </Btn>
          </div>
          <p className="mt-6 max-w-md font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-bone/40">
            {s.note}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="overflow-hidden border border-bone/15">
            <img
              src={IMG.hoopNight.src}
              width={IMG.hoopNight.w}
              height={IMG.hoopNight.h}
              alt={IMG.hoopNight.alt}
              loading="lazy"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pathways() {
  const { t, lang } = useLang();
  const rows = ["foundation", "flight-levels", "personalized-flight"]
    .map((id) => corePrograms.find((p) => p.id === id))
    .filter(Boolean);
  return (
    <section className="bg-bone py-20 text-carbon sm:py-28 lg:py-36" data-testid="home-pathways">
      <div className={SHELL}>
        <Reveal>
          <Eyebrow className="!text-rust">{t.home.pathways.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            {t.home.pathways.heading}
          </h2>
        </Reveal>
        <div className="mt-16">
          {rows.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <Link
                to={`/programs/${p.id}`}
                data-testid={`home-pathway-row-${p.id}`}
                className={`group grid gap-6 border-t border-carbon/20 py-10 transition-colors duration-200 hover:bg-carbon/[0.03] md:grid-cols-12 md:items-baseline ${
                  i === rows.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-mono text-xs tracking-label text-rust md:col-span-1">
                  0{i + 1}
                </span>
                <div className="md:col-span-5">
                  <h3 className="font-display text-3xl font-medium tracking-tight transition-colors duration-200 group-hover:text-rust sm:text-4xl">
                    {p.name[lang]}
                  </h3>
                  <p className="mt-2 font-display text-lg italic text-carbon/60">{p.tagline[lang]}</p>
                </div>
                <dl className="space-y-2 md:col-span-4">
                  {[
                    [t.common.who, p.audience[lang]],
                    [t.common.focus, p.focus[lang]],
                    [t.common.format, p.format[lang]],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-4 text-sm">
                      <dt className="w-20 shrink-0 font-mono text-[10px] uppercase tracking-label text-stonegray">
                        {k}
                      </dt>
                      <dd className="text-carbon/70">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="md:col-span-2 md:text-right">
                  <span className="group-hover:inline-flex inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-carbon transition-colors duration-200 group-hover:text-rust">
                    {t.common.learnMore}
                    <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SchoolPreview() {
  const { t, lang } = useLang();
  const featured = topics.filter((tp) => tp.featured);
  return (
    <section className="grain bg-carbon py-20 sm:py-28 lg:py-36" data-testid="home-school-preview">
      <div className={SHELL}>
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>{t.home.schoolPrev.eyebrow}</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
              {t.home.schoolPrev.heading}
            </h2>
          </div>
          <ArrowLink to="/school" testId="home-school-preview-link">{t.home.schoolPrev.cta}</ArrowLink>
        </Reveal>
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden border border-bone/15">
              <img
                src={IMG.ballGrip.src}
                width={IMG.ballGrip.w}
                height={IMG.ballGrip.h}
                alt={IMG.ballGrip.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 flex flex-col justify-center lg:order-2">
            {featured.map((tp, i) => (
              <Reveal key={tp.id} delay={i * 0.1}>
                <div
                  className={`flex flex-col gap-3 border-t border-bone/15 py-8 ${
                    i === featured.length - 1 ? "border-b" : ""
                  }`}
                  data-testid={`home-school-topic-${tp.id}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs tracking-label text-rust">0{i + 1}</span>
                    <StatusTag statusKey="comingSoon" label={t.status.comingSoon} />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-bone sm:text-3xl">
                    {tp.title[lang]}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-bone/60">{tp.summary[lang]}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="mt-8 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-bone/40">
                {t.school.statusNote}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const { t } = useLang();
  return (
    <section className="bg-bone py-20 text-carbon sm:py-28 lg:py-36" data-testid="home-approach">
      <div className={SHELL}>
        <Reveal>
          <Eyebrow className="!text-rust">{t.home.approach.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            {t.home.approach.heading}
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px border border-carbon/20 bg-carbon/20 md:grid-cols-2 lg:grid-cols-4">
          {t.home.approach.items.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.08} className="h-full">
              <div className="group flex h-full flex-col bg-bone p-8 transition-colors duration-300 hover:bg-carbon hover:text-bone lg:p-10" data-testid={`home-pillar-${i}`}>
                <span className="font-mono text-xs tracking-label text-rust">{item.n}</span>
                <h3 className="mt-10 font-display text-2xl font-medium tracking-tight lg:mt-14">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-carbon/60 transition-colors duration-300 group-hover:text-bone/60">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Creator() {
  const { t } = useLang();
  const c = t.home.creator;
  return (
    <section className="grain bg-carbon py-20 sm:py-28 lg:py-36" data-testid="home-creator">
      <div className={`${SHELL} grid items-center gap-14 lg:grid-cols-12 lg:gap-20`}>
        <Reveal className="lg:col-span-5">
          <div className="overflow-hidden border border-bone/15">
            <img
              src={IMG.creatorPortrait.src}
              width={IMG.creatorPortrait.w}
              height={IMG.creatorPortrait.h}
              alt={IMG.creatorPortrait.alt}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-bone/35">
            {t.footer.imageryNote}
          </p>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-medium tracking-tight text-bone sm:text-6xl">
              {c.name}
            </h2>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-label text-rust">{c.role}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/70 sm:text-lg">{c.body}</p>
            <p className="mt-4 max-w-xl font-display text-xl italic text-bone/85 sm:text-2xl">{c.body2}</p>
            <p className="mt-8 max-w-xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-bone/40">
              <XMark className="mr-2 inline h-2.5 w-2.5 text-rust" />
              {c.note}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Entries() {
  const { t } = useLang();
  const e = t.home.entries;
  return (
    <section className="bg-bone py-20 text-carbon sm:py-28 lg:py-36" data-testid="home-entries">
      <div className={`${SHELL} grid gap-10 lg:grid-cols-2 lg:gap-14`}>
        <Reveal className="h-full">
          <Link
            to="/coaching"
            data-testid="home-entry-coaching"
            className="group flex h-full flex-col bg-carbon text-bone transition-colors duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={IMG.playerSpot.src}
                width={IMG.playerSpot.w}
                height={IMG.playerSpot.h}
                alt={IMG.playerSpot.alt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-1 flex-col p-8 lg:p-10">
              <h3 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
                {e.coaching.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-bone/65">{e.coaching.body}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-rust">
                {e.coaching.cta}
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </Reveal>
        <Reveal delay={0.12} className="h-full">
          <Link
            to="/camps"
            data-testid="home-entry-camps"
            className="group flex h-full flex-col border border-carbon/25 transition-colors duration-300 hover:border-rust"
          >
            <div className="overflow-hidden">
              <img
                src={IMG.ringOrange.src}
                width={IMG.ringOrange.w}
                height={IMG.ringOrange.h}
                alt={IMG.ringOrange.alt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-1 flex-col p-8 lg:p-10">
              <h3 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
                {e.camps.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-carbon/65">{e.camps.body}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-rust">
                {e.camps.cta}
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Closing() {
  const { t } = useLang();
  return (
    <section className="grain relative overflow-hidden bg-carbon py-24 sm:py-32 lg:py-44" data-testid="home-closing">
      <img
        src={IMG.courtDusk.src}
        width={IMG.courtDusk.w}
        height={IMG.courtDusk.h}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale"
      />
      <div className="absolute inset-0 bg-carbon/70" />
      <div className={`relative ${SHELL}`}>
        <Reveal>
          <h2 className="max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-bone sm:text-6xl">
            {t.home.closing.heading}
          </h2>
          <div className="mt-10">
            <Btn to="/flight-test" variant="solid" testId="home-closing-cta">
              {t.home.closing.cta}
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Paths />
      <Start />
      <Pathways />
      <SchoolPreview />
      <Approach />
      <Creator />
      <Entries />
      <Closing />
    </>
  );
}
