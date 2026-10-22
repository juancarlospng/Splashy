// FLIGHT graphic language: jump trajectories, takeoff markers, court markings,
// frame annotations. Editorial graphics only — never real measurements or data.

// Dotted jump arc with takeoff X and landing tick.
export function Trajectory({ className = "", flip = false, tone = "#C6561A" }) {
  return (
    <svg
      viewBox="0 0 320 120"
      className={className}
      fill="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M12 108 C 96 108, 150 18, 236 14"
        stroke={tone}
        strokeWidth="1.5"
        strokeDasharray="1 7"
        strokeLinecap="round"
      />
      <path d="M6 100 L18 116 M18 100 L6 116" stroke={tone} strokeWidth="2" />
      <circle cx="236" cy="14" r="3" fill={tone} />
      <path d="M236 26 v14 M224 108 h24" stroke={tone} strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

// Vertical movement mark: baseline + ascending ticks.
export function RiseMark({ className = "" }) {
  return (
    <svg viewBox="0 0 24 72" className={className} fill="none" aria-hidden="true">
      <path d="M4 68 V8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 8 L12 20 M4 8 L-0.5 18" stroke="#C6561A" strokeWidth="1.5" />
      <path d="M12 68 v-16 M19 68 v-30" stroke="currentColor" strokeWidth="1" opacity="0.45" />
    </svg>
  );
}

// X section marker: number + thin rule + X.
export function XMarker({ index, label, dark = true, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="font-mono text-[10px] tracking-label text-rust">{index}</span>
      <span className={`h-px w-14 ${dark ? "bg-bone/30" : "bg-carbon/30"}`} />
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-rust" fill="none">
        <path d="M2 2 L10 10 M10 2 L2 10" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      {label && (
        <span
          className={`font-mono text-[10px] uppercase tracking-label ${dark ? "text-bone/50" : "text-carbon/50"}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

// Frame annotation (motion-analysis framing device).
export function FrameTag({ children, dark = true, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${
        dark ? "border-bone/25 text-bone/60" : "border-carbon/25 text-carbon/60"
      } ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-rust" aria-hidden="true" />
      {children}
    </span>
  );
}

// Center-court arc decoration for dark sections.
export function CourtArc({ className = "", tone = "rgba(239,233,219,0.10)" }) {
  return (
    <svg viewBox="0 0 600 300" className={className} fill="none" aria-hidden="true">
      <path d="M0 300 A 300 300 0 0 1 600 300" stroke={tone} strokeWidth="1" />
      <path d="M60 300 A 240 240 0 0 1 540 300" stroke={tone} strokeWidth="1" strokeDasharray="2 10" />
      <circle cx="300" cy="300" r="6" stroke="#C6561A" strokeWidth="1.5" />
    </svg>
  );
}
