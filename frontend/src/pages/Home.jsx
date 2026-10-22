import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { IMG } from "@/data/images";
import { topics } from "@/data/school";
import { corePrograms } from "@/data/programs";
import { statusLabel } from "@/data/statusLabel";
import { Lines, Reveal, EASE } from "@/components/motion";
import { XMark } from "@/components/brand";
import { XMarker, Trajectory, RiseMark, FrameTag, CourtArc } from "@/components/Graphics";
import { Btn, Eyebrow, StatusTag, ArrowLink } from "@/components/ui-bits";
import Marquee from "@/components/Marquee";
import ProgramIndex from "@/components/ProgramIndex";
const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

/* ------------------------------ 01 · HERO ------------------------------ */
function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const yAthlete = useTransform(scrollY, [0, 900], [0, 90]);
  const yType = useTransform(scrollY, [0, 900], [0, -30]);
  const quick = [
    { to: "/school", label: t.home.quick.items[0] },
    { to: "/programs", label: t.home.quick.items[1] },
    { to: "/coaching", label: t.home.quick.items[2] },
    { to: "/camps", label: t.home.quick.items[3] },
  ];

  return (
    <section className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-carbon" data-testid="home-hero">
      {/* court arc, bottom left */}
      <CourtArc className="pointer-events-none absolute -bottom-24 -left-24 w-[520px] opacity-80" />

      {/* monumental outlined ACADEMY behind the athlete (desktop) */}
      <motion.div
        aria-hidden="true"
        style={reduce ? undefined : { y: yType }}
        className="pointer-events-none absolute right-0 top-[16%] hidden select-none lg:block"
      >
        <span className="outline-type font-display text-[11rem] font-semibold uppercase leading-none tracking-tight xl:text-[13rem]">
          Academy
        </span>
      </motion.div>

      {/* athlete cutout — black backdrop dissolves into carbon via blend */}
      <motion.div
        className="pointer-events-none absolute right-[-6%] top-[6%] h-[92%] sm:right-[2%] lg:right-[6%]"
        style={reduce ? undefined : { y: yAthlete }}
      >
        <motion.img
          src={IMG.heroCutout.src}
          width={IMG.heroCutout.w}
          height={IMG.heroCutout.h}
          alt={IMG.heroCutout.alt}
          className="h-full w-auto object-contain mix-blend-screen"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.35, ease: EASE }}
        />
        {/* feather the image edges into the carbon field */}
        <div className="absolute inset-0 mix-blend-screen" style={{ boxShadow: "inset 0 0 120px 60px #1c1c1c" }} />
      </motion.div>

      {/* movement annotation: trajectory + takeoff marker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="pointer-events-none absolute right-[26%] top-[24%] hidden w-64 lg:block"
        aria-hidden="true"
      >
        <Trajectory flip />
        <span className="mt-1 block text-right font-mono text-[9px] uppercase tracking-[0.2em] text-rust">
          {t.graphics.takeoff} · A
        </span>
      </motion.div>

      {/* content */}
      <div className={`relative ${SHELL} flex flex-1 flex-col justify-center pb-10 pt-32`}>
        <motion.div style={reduce ? undefined : { y: yType }} className="max-w-3xl">
          <Eyebrow className="mb-8">{t.home.hero.eyebrow}</Eyebrow>
          <h1 className="font-display font-semibold uppercase leading-[0.86] tracking-tight text-bone">
            <span className="block overflow-hidden text-[clamp(4.2rem,14.5vw,15rem)]">
              <motion.span
                className="block"
                initial={reduce ? { opacity: 0 } : { y: "112%" }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.25, delay: 0.15, ease: EASE }}
              >
                Flight
              </motion.span>
            </span>
          </h1>
          {/* ACADEMY as outline on mobile (the layered desktop version is decorative) */}
          <span className="block overflow-hidden text-[clamp(4.2rem,14.5vw,15rem)] lg:hidden">
            <motion.span
              className="outline-type block font-display font-semibold uppercase leading-[0.86] tracking-tight"
              initial={reduce ? { opacity: 0 } : { y: "112%" }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.25, delay: 0.3, ease: EASE }}
            >
              Academy
            </motion.span>
          </span>

          <Lines
            lines={t.home.hero.headline.split(". ").map((s, i, arr) => (i < arr.length - 1 ? s + "." : s))}
            delay={0.9}
            className="mt-8 font-display text-2xl italic text-bone/90 sm:text-3xl lg:text-4xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
            className="mt-7 max-w-md"
          >
            <p className="text-base leading-relaxed text-bone/70 sm:text-lg">{t.home.hero.support}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Btn to="/programs" variant="solid" testId="hero-cta-explore-academy">
                {t.home.hero.ctaPrimary}
              </Btn>
              <Btn to="/school" testId="hero-cta-discover-school">
                {t.home.hero.ctaSecondary}
              </Btn>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* lower-edge editorial details */}
      <div className={`relative ${SHELL}`}>
        <div className="flex items-center justify-between border-t border-bone/15 py-4">
          <FrameTag className="hidden sm:inline-flex">Flight School — Flight Academy</FrameTag>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50 sm:hidden">
            F.S — F.A
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50 sm:block">
            {t.common.scrollHint} ↓
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">01 / 08</span>
        </div>
        <div className="grid grid-cols-2 border-t border-bone/15 md:grid-cols-4">
          {quick.map((q, i) => (
            <Link
              key={q.to}
              to={q.to}
              data-testid={`hero-quick-link-${i}`}
              className={`group flex items-center justify-between gap-3 py-4 font-mono text-[11px] uppercase tracking-label text-bone/70 transition-colors duration-200 hover:text-rust ${
                i > 0 ? "border-l border-bone/15 pl-5 sm:pl-8" : ""
              }`}
            >
              <span className="whitespace-nowrap">{q.label}</span>
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------- 02 · TWO PATHS, ONE ECOSYSTEM --------------------- */
function Paths() {
  const { t } = useLang();
  const p = t.home.paths;
  return (
    <section className="bg-bone py-20 text-carbon sm:py-28 lg:py-36" data-testid="home-paths">
      <div className={`${SHELL} grid gap-14 lg:grid-cols-12 lg:gap-16`}>
        {/* sticky intro column */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <XMarker index="02" dark={false} />
              <h2 className="mt-8 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl">
                Two paths,
                <br />
                <span className="italic text-rust">one ecosystem.</span>
              </h2>
              <div className="mt-10 hidden lg:block">
                <RiseMark className="h-24 w-6 text-carbon/40" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* two distinct entries */}
        <div className="lg:col-span-8">
          <Reveal>
            <article className="border-t-2 border-rust pt-8" data-testid="home-path-school">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <span className="font-mono text-xs tracking-label text-rust">{p.school.index}</span>
                <FrameTag dark={false}>{p.school.badge}</FrameTag>
              </div>
              <h3 className="mt-5 font-display text-4xl font-medium tracking-tight sm:text-6xl">
                {p.school.name}
              </h3>
              <p className="mt-2 font-display text-2xl italic text-rust sm:text-3xl">{p.school.tag}</p>
              <div className="mt-6 grid gap-8 md:grid-cols-5">
                <p className="max-w-md text-base leading-relaxed text-carbon/70 md:col-span-3">{p.school.body}</p>
                <div className="md:col-span-2 md:justify-self-end md:self-end">
                  <Trajectory className="w-40 text-carbon/30" tone="#4C5C52" />
                </div>
              </div>
              <div className="mt-8">
                <ArrowLink to="/school" dark={false} testId="home-path-cta-0">
                  {p.school.cta}
                </ArrowLink>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="mt-16 bg-carbon p-8 text-bone sm:p-12" data-testid="home-path-academy">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <span className="font-mono text-xs tracking-label text-rust">{p.academy.index}</span>
                <FrameTag>{p.academy.badge}</FrameTag>
              </div>
              <h3 className="mt-5 font-display text-4xl font-medium tracking-tight sm:text-6xl">
                {p.academy.name}
              </h3>
              <p className="mt-2 font-display text-2xl italic text-rust sm:text-3xl">{p.academy.tag}</p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-bone/70">{p.academy.body}</p>
              <div className="mt-8">
                <ArrowLink to="/programs" testId="home-path-cta-1">
                  {p.academy.cta}
                </ArrowLink>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------- 03 · FIND YOUR STARTING POINT --------------------- */
function Start() {
  const { t } = useLang();
  const s = t.home.start;
  return (
    <section className="grain relative overflow-hidden bg-carbon py-20 sm:py-28 lg:py-36" data-testid="home-start">
      <CourtArc className="pointer-events-none absolute -bottom-32 right-[-10%] w-[640px]" />
      <div className={`${SHELL} grid items-center gap-14 lg:grid-cols-12 lg:gap-20`}>
        <Reveal className="lg:col-span-7">
          <XMarker index="03" />
          <h2 className="mt-8 font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
            {s.heading}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/70 sm:text-lg">{s.body}</p>
          <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Btn to="/flight-test" variant="solid" testId="home-start-cta">
              {s.cta}
            </Btn>
            <span className="h-px w-16 bg-rust" aria-hidden="true" />
            <p className="max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-bone/40">
              {s.note}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-5">
          <div className="relative">
            <img
              src={IMG.hoopNight.src}
              width={IMG.hoopNight.w}
              height={IMG.hoopNight.h}
              alt={IMG.hoopNight.alt}
              loading="lazy"
              className="aspect-[3/4] w-full border border-bone/15 object-cover lg:aspect-[4/5]"
            />
            <span className="absolute -left-3 top-8 h-24 w-px bg-rust" aria-hidden="true" />
            <span className="absolute bottom-6 right-6 font-mono text-[9px] uppercase tracking-[0.2em] text-bone/70">
              {t.graphics.apex}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------- 04 · FEATURED PATHWAYS ----------------------- */
function Pathways() {
  const { t, lang } = useLang();
  const rows = ["foundation", "flight-levels", "personalized-flight"]
    .map((id) => corePrograms.find((p) => p.id === id))
    .filter(Boolean);
  const imageById = {
    foundation: IMG.campAction,
    "flight-levels": IMG.hoopMoody,
    "personalized-flight": IMG.playerSpot,
  };
  return (
    <section className="bg-bone py-20 text-carbon sm:py-28 lg:py-36" data-testid="home-pathways">
      <div className={SHELL}>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <XMarker index="04" dark={false} />
            <h2 className="mt-8 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              {t.home.pathways.heading}
            </h2>
          </div>
          <ArrowLink to="/programs" dark={false} testId="home-pathways-all">
            {t.common.explorePrograms}
          </ArrowLink>
        </Reveal>
        <Reveal delay={0.1} className="mt-14">
          <ProgramIndex items={rows} imageById={imageById} testPrefix="home-pathway" />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------ 05 · FLIGHT SCHOOL PREVIEW ------------------------ */
function SchoolPreview() {
  const { t, lang } = useLang();
  const featured = topics.filter((tp) => tp.featured);
  const imgs = [IMG.courtWalk, IMG.ballGrip, IMG.heroDunk];
  return (
    <section className="grain bg-carbon py-20 sm:py-28 lg:py-36" data-testid="home-school-preview">
      <div className={SHELL}>
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <XMarker index="05" />
            <h2 className="mt-8 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
              {t.home.schoolPrev.heading}
            </h2>
          </div>
          <ArrowLink to="/school" testId="home-school-preview-link">{t.home.schoolPrev.cta}</ArrowLink>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {featured.map((tp, i) => (
            <Reveal key={tp.id} delay={i * 0.1} className={i === 0 ? "md:col-span-2" : ""}>
              <article
                className={`group flex h-full flex-col border border-bone/15 ${i === 0 ? "md:row-span-1" : ""}`}
                data-testid={`home-school-topic-${tp.id}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={imgs[i].src}
                    width={imgs[i].w}
                    height={imgs[i].h}
                    alt={imgs[i].alt}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                      i === 0 ? "aspect-[21/9] md:aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  />
                  <span className="absolute left-4 top-4">
                    <FrameTag>F.{String(i + 1).padStart(2, "0")}</FrameTag>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <span className="font-mono text-[10px] uppercase tracking-label text-stonegray">
                    {t.school.filters[tp.category === "fundamentals" ? "fundamentals" : "dunk"]}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium text-bone sm:text-3xl">
                    {tp.title[lang]}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-bone/60">{tp.summary[lang]}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <StatusTag statusKey="comingSoon" label={t.status.comingSoon} />
                    <XMark className="h-3 w-3 text-rust" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-bone/40">
            {t.school.statusNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- 06 · THE METHOD ---------------------------- */
function Method() {
  const { t } = useLang();
  return (
    <section className="bg-bone py-20 text-carbon sm:py-28 lg:py-36" data-testid="home-approach">
      <div className={`${SHELL} grid gap-14 lg:grid-cols-12 lg:gap-20`}>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <XMarker index="06" dark={false} />
              <h2 className="mt-8 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl">
                {t.home.approach.heading}
              </h2>
              <div className="mt-12 hidden lg:block">
                <Trajectory className="w-56" />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative lg:col-span-7">
          {/* vertical trajectory line with stops */}
          <span className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-carbon/20" aria-hidden="true" />
          {t.home.approach.items.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.08}>
              <div className={`flex gap-8 ${i > 0 ? "pt-14" : ""}`} data-testid={`home-pillar-${i}`}>
                <div className="relative flex flex-col items-center">
                  <span className="z-10 flex h-4 w-4 items-center justify-center rounded-full border border-rust bg-bone">
                    <span className="h-1.5 w-1.5 rounded-full bg-rust" />
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <FrameTag dark={false}>F.{item.n}</FrameTag>
                    <span className="font-mono text-[10px] uppercase tracking-label text-stonegray">
                      {t.home.approach.eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-base leading-relaxed text-carbon/65">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- 07 · MEET THE CREATOR ------------------------- */
function Creator() {
  const { t } = useLang();
  const c = t.home.creator;
  return (
    <section className="grain relative overflow-hidden bg-carbon py-20 sm:py-28 lg:py-36" data-testid="home-creator">
      <div className={`${SHELL} grid items-center gap-14 lg:grid-cols-12 lg:gap-20`}>
        <Reveal className="lg:col-span-5">
          <div className="relative border border-bone/15">
            <img
              src={IMG.creatorPortrait.src}
              width={IMG.creatorPortrait.w}
              height={IMG.creatorPortrait.h}
              alt={IMG.creatorPortrait.alt}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            {/* court-marking frame corners */}
            <span className="absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-rust" aria-hidden="true" />
            <span className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-rust" aria-hidden="true" />
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-bone/35">
            {t.footer.imageryNote}
          </p>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <XMarker index="07" />
            <p className="mt-8 font-mono text-[11px] uppercase tracking-label text-rust">{c.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.02] tracking-tight text-bone sm:text-6xl lg:text-7xl">
              Marquie
              <br />
              <span className="italic text-bone/80">“Splashy”</span> Smith
            </h2>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-label text-bone/60">{c.role}</p>
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

/* --------------------- 08 · COACHING & CAMPS ENTRIES --------------------- */
function Entries() {
  const { t } = useLang();
  const e = t.home.entries;
  return (
    <section className="bg-bone py-20 text-carbon sm:py-28 lg:py-36" data-testid="home-entries">
      <div className={`${SHELL} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
        <Reveal className="lg:col-span-7">
          <Link
            to="/coaching"
            data-testid="home-entry-coaching"
            className="group block bg-carbon text-bone"
          >
            <div className="overflow-hidden">
              <img
                src={IMG.playerSpot.src}
                width={IMG.playerSpot.w}
                height={IMG.playerSpot.h}
                alt={IMG.playerSpot.alt}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex items-start justify-between gap-6 p-8 lg:p-10">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-label text-rust">
                  {t.nav.coaching}
                </span>
                <h3 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                  {e.coaching.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-bone/65">{e.coaching.body}</p>
              </div>
              <span
                aria-hidden="true"
                className="mt-2 font-mono text-xl text-rust transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </div>
          </Link>
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-5 lg:mt-24">
          <Link
            to="/camps"
            data-testid="home-entry-camps"
            className="group block border border-carbon/25 transition-colors duration-300 hover:border-rust"
          >
            <div className="overflow-hidden">
              <img
                src={IMG.ringOrange.src}
                width={IMG.ringOrange.w}
                height={IMG.ringOrange.h}
                alt={IMG.ringOrange.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-8 lg:p-10">
              <span className="font-mono text-[10px] uppercase tracking-label text-rust">
                {t.nav.camps}
              </span>
              <h3 className="mt-3 font-display text-3xl font-medium tracking-tight">{e.camps.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-carbon/65">{e.camps.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-rust">
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

/* --------------------------- 09 · FINAL CTA --------------------------- */
function Closing() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  return (
    <section className="grain relative overflow-hidden bg-carbon py-24 sm:py-32 lg:py-44" data-testid="home-closing">
      <img
        src={IMG.courtDusk.src}
        width={IMG.courtDusk.w}
        height={IMG.courtDusk.h}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
      />
      <div className="absolute inset-0 bg-carbon/75" />
      <div className={`relative ${SHELL}`}>
        <Reveal>
          <XMarker index="08" />
          <h2 className="mt-10 max-w-5xl font-display text-5xl font-medium leading-[0.98] tracking-tight text-bone sm:text-7xl lg:text-8xl">
            {t.home.closing.heading}
          </h2>
          <motion.span
            initial={reduce ? { width: "96px" } : { width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="mt-10 block h-0.5 bg-rust"
          />
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
      <Method />
      <Creator />
      <Entries />
      <Closing />
    </>
  );
}
