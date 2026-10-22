import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal, Lines } from "@/components/motion";
import { XMark, Emblem } from "@/components/brand";

export default function Access() {
  const { t } = useLang();
  const [code, setCode] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section
      className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-carbon px-6 py-32 text-center"
      data-testid="access-page"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-x-0 top-1/2 h-px bg-bone/10" />
      </div>

      <Reveal>
        <Emblem className="mx-auto h-24 w-auto" glyph="#C6561A" xColor="#EFE9DB" />
      </Reveal>

      <h1
        className="mt-10 font-display font-semibold uppercase leading-[0.95] tracking-tight text-bone/40"
        data-testid="access-title"
      >
        <Lines lines={[t.access.title]} className="text-[clamp(2.6rem,9vw,7rem)]" />
      </h1>

      <Reveal delay={0.3} className="mt-10 w-full max-w-md">
        <p className="mx-auto max-w-md text-sm leading-relaxed text-bone/60">{t.access.body}</p>

        {done ? (
          <div className="mt-8 border border-rust/60 px-5 py-4" data-testid="access-demo-success">
            <p className="font-mono text-[11px] uppercase tracking-label text-rust">{t.access.success}</p>
          </div>
        ) : (
          <form
            className="mt-8 flex items-stretch border border-bone/30 focus-within:border-rust"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            data-testid="access-form"
          >
            <input
              type="password"
              data-testid="access-input-code"
              placeholder={t.access.placeholder}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              aria-label={t.access.placeholder}
              className="w-full bg-transparent px-5 py-4 font-mono text-sm text-bone placeholder:text-bone/30 focus:outline-none"
            />
            <button
              type="submit"
              data-testid="access-submit-button"
              aria-label={t.access.submit}
              className="border-l border-bone/30 px-6 font-mono text-lg text-rust transition-colors duration-200 hover:bg-rust hover:text-bone"
            >
              →
            </button>
          </form>
        )}

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/40">
          <XMark className="mr-2 inline h-2.5 w-2.5 text-rust" />
          {t.access.demo}
        </p>

        <Link
          to="/"
          data-testid="access-back-link"
          className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-bone/60 transition-colors duration-200 hover:text-rust"
        >
          <span aria-hidden="true">←</span> {t.access.back}
        </Link>
      </Reveal>
    </section>
  );
}
