import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";

// Editorial button. variant: "solid" (rust) | "outline" (thin bone border)
export function Btn({ to, children, variant = "outline", className = "", testId, ...rest }) {
  const base = `group inline-flex items-center gap-3 px-7 py-4 font-mono text-[11px] uppercase tracking-label transition-colors duration-200 ${
    variant === "solid"
      ? "bg-rust text-bone hover:bg-bone hover:text-carbon"
      : variant === "outlineDark"
      ? "border border-carbon/40 text-carbon hover:border-rust hover:text-rust"
      : "border border-bone/40 text-bone hover:border-rust hover:text-rust"
  } ${className}`;
  if (to) {
    return (
      <Link to={to} data-testid={testId} className={base} {...rest}>
        {children}
        <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
      </Link>
    );
  }
  return (
    <button type="button" data-testid={testId} className={base} {...rest}>
      {children}
      <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
    </button>
  );
}

// Small uppercase label with rust rule.
export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-label text-rust ${className}`}
    >
      <span className="inline-block h-px w-8 bg-rust" aria-hidden="true" />
      {children}
    </p>
  );
}

// Honest development-status tag.
export function StatusTag({ statusKey, label, dark = true }) {
  const palette = {
    available: "border-forest text-forest bg-forest/10",
    inDevelopment: "border-rust text-rust bg-rust/10",
    planned: "border-stonegray text-stonegray bg-stonegray/10",
    underReview: "border-stonegray text-stonegray bg-stonegray/10",
    comingSoon: "border-rust text-rust bg-rust/10",
  };
  const onDark = {
    available: "border-forest/70 text-bone bg-forest/25",
    inDevelopment: "border-rust/70 text-rust bg-rust/10",
    planned: "border-bone/30 text-bone/70 bg-bone/5",
    underReview: "border-bone/30 text-bone/70 bg-bone/5",
    comingSoon: "border-rust/70 text-rust bg-rust/10",
  };
  return (
    <span
      data-testid={`status-tag-${statusKey}`}
      className={`inline-block border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
        (dark ? onDark : palette)[statusKey] || (dark ? onDark : palette).planned
      }`}
    >
      {label}
    </span>
  );
}

export function ArrowLink({ to, children, dark = true, testId, onClick }) {
  const cls = `group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label transition-colors duration-200 ${
    dark ? "text-bone hover:text-rust" : "text-carbon hover:text-rust"
  }`;
  return (
    <Link to={to} data-testid={testId} onClick={onClick} className={cls}>
      {children}
      <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
