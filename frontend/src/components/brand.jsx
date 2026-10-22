// Brand marks recreated in code from the official "línea gráfica" (brand notes).
// Temporary vector recreations — replace with official brand files when supplied.
export const XMark = ({ className = "h-4 w-4", stroke = 7 }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <path d="M14 14 L50 50 M50 14 L14 50" stroke="currentColor" strokeWidth={stroke} />
  </svg>
);

export const EyeGlyph = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path d="M6 24 C14 14, 34 14, 42 24 C34 34, 14 34, 6 24 Z" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="24" cy="24" r="6" fill="currentColor" />
    <path d="M24 8 V3 M10 11 L13 14 M38 11 L35 14" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

export const ArmGlyph = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path
      d="M30 6 C30 6, 14 12, 12 24 C10 36, 20 42, 28 40 C36 38, 38 30, 32 26 C26 22, 18 26, 18 32"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path d="M30 6 L36 12 L30 16" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

export const WaveGlyph = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path d="M8 16 C16 8, 24 8, 30 14 C36 20, 40 20, 42 18" stroke="currentColor" strokeWidth="2.5" />
    <path d="M8 30 C16 22, 24 22, 30 28 C36 34, 40 34, 42 32" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

export const BrainGlyph = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path
      d="M24 8 C14 8, 10 16, 13 22 C8 26, 10 36, 18 38 C22 40, 26 40, 30 38 C38 36, 40 26, 35 22 C38 16, 34 8, 24 8 Z"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path d="M24 10 V38 M18 18 C21 20, 21 24, 18 26 M30 18 C27 20, 27 24, 30 26" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Full symbolic emblem: eye (spirit) above, arm (strength) left,
// wave (movement) right, brain (mind) below, around the X.
// Used selectively in brand storytelling (About).
export const Emblem = ({ className = "h-20 w-auto", glyph = "#C6561A", xColor = "#1C1C1C" }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
    <g color={glyph}>
      <g transform="translate(76,0)">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <EyeGlyph />
        </svg>
      </g>
      <g transform="translate(20,76)">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <ArmGlyph />
        </svg>
      </g>
      <g transform="translate(132,76)">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <WaveGlyph />
        </svg>
      </g>
      <g transform="translate(76,152)">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <BrainGlyph />
        </svg>
      </g>
    </g>
    <g transform="translate(76,72)">
      <svg width="48" height="48" viewBox="0 0 64 64">
        <path d="M14 14 L50 50 M50 14 L14 50" stroke={xColor} strokeWidth="8" />
      </svg>
    </g>
  </svg>
);

// Primary wordmark lockup: serif FLIGHT ACADEMY, optionally with emblem between lines.
export const WordmarkStack = ({ className = "", glyph = "#C6561A", text = "#EFE9DB", emblem = true }) => (
  <span className={`inline-flex flex-col items-center leading-none ${className}`}>
    <span className="font-display font-semibold uppercase tracking-[0.08em]">Flight</span>
    {emblem && <XMark className="my-[0.18em] h-[0.32em] w-[0.32em]" stroke={9} />}
    <span className="font-display font-semibold uppercase tracking-[0.08em]">Academy</span>
  </span>
);
