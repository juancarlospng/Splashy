import { Fragment } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { XMark } from "./brand";

const items = (t) => [
  t.home.paths.school.name + " — " + t.home.paths.school.tag,
  t.home.paths.academy.name + " — " + t.home.paths.academy.tag,
  t.home.hero.headline,
];

// One slow editorial marquee.
export default function Marquee() {
  const { t, lang } = useLang();
  const seq = items(t);
  const Strip = ({ hidden }) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {seq.map((item, i) => (
        <Fragment key={i}>
          <span className="whitespace-nowrap px-8 font-display text-2xl italic text-bone/85 sm:text-3xl">
            {item}
          </span>
          <XMark className="h-3 w-3 shrink-0 text-rust" />
        </Fragment>
      ))}
    </div>
  );
  return (
    <div
      className="overflow-hidden border-y border-bone/10 bg-carbon py-5"
      data-testid="editorial-marquee"
      lang={lang}
    >
      <div className="marquee-track">
        <Strip />
        <Strip hidden />
      </div>
    </div>
  );
}
