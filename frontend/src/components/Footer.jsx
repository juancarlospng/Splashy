import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { LangSwitch } from "./Nav";
import { XMark, Emblem } from "./brand";

export default function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-bone/10 bg-carbon" data-testid="site-footer">
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" data-testid="footer-logo-home" className="inline-flex items-center gap-3">
              <XMark className="h-4 w-4 text-rust" />
              <span className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-bone">
                Flight Academy
              </span>
            </Link>
            <p className="mt-4 max-w-sm font-display text-xl italic text-bone/70">
              {t.footer.tagline}
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-label text-bone/40">
              {t.home.creator.name}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-label text-rust">
              {t.footer.explore}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link className="text-bone/70 transition-colors hover:text-bone" to="/school" data-testid="footer-link-school">{t.nav.school}</Link></li>
              <li><Link className="text-bone/70 transition-colors hover:text-bone" to="/programs" data-testid="footer-link-programs">{t.nav.programs}</Link></li>
              <li><Link className="text-bone/70 transition-colors hover:text-bone" to="/flight-test" data-testid="footer-link-flight-test">{t.nav.flightTest}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-label text-rust">
              {t.footer.company}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link className="text-bone/70 transition-colors hover:text-bone" to="/coaching" data-testid="footer-link-coaching">{t.nav.coaching}</Link></li>
              <li><Link className="text-bone/70 transition-colors hover:text-bone" to="/camps" data-testid="footer-link-camps">{t.nav.camps}</Link></li>
              <li><Link className="text-bone/70 transition-colors hover:text-bone" to="/about" data-testid="footer-link-about">{t.nav.about}</Link></li>
              <li><Link className="text-bone/70 transition-colors hover:text-bone" to="/contact" data-testid="footer-link-contact">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-label text-rust">
              {t.footer.langLabel}
            </h3>
            <LangSwitch className="mt-5" />
            <p className="mt-6 font-mono text-[11px] uppercase tracking-label text-bone/40">
              {lang === "en" ? "Follow" : "Síguenos"}
            </p>
            <p className="mt-2 text-sm text-bone/70" data-testid="footer-social">
              {t.contact.social}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-bone/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone/35">
            © {year} Flight Academy — {t.footer.rights}
          </p>
          <p className="max-w-xl font-mono text-[10px] leading-relaxed tracking-[0.08em] text-bone/35">
            {t.footer.demoNote} {t.footer.imageryNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
