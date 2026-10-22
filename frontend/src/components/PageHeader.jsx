import { Eyebrow } from "./ui-bits";
import { XMarker } from "./Graphics";
import { Lines, Reveal } from "./motion";

// Shared dark editorial page header with numbered X marker.
export default function PageHeader({ eyebrow, title, body, index = "00", testId }) {
  const titleLines = Array.isArray(title) ? title : [title];
  return (
    <header className="grain relative overflow-hidden bg-carbon pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-24">
      <div className="mx-auto max-w-shell px-5 sm:px-8 lg:px-12">
        <XMarker index={index} className="mb-8" />
        <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
        <h1
          data-testid={testId}
          className="max-w-5xl font-display text-4xl font-medium leading-[1.02] tracking-tight text-bone sm:text-6xl lg:text-7xl"
        >
          <Lines lines={titleLines} />
        </h1>
        {body && (
          <Reveal delay={0.35} className="mt-8 max-w-xl">
            <p className="text-base leading-relaxed text-bone/70 sm:text-lg">{body}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
