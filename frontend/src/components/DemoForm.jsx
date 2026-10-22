import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

export function Field({ label, id, error, children, dark = true }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className={`font-mono text-[11px] uppercase tracking-label ${dark ? "text-bone/60" : "text-carbon/60"}`}
      >
        {label}
      </label>
      {children}
      {error && (
        <p data-testid={`${id}-error`} className="font-mono text-[10px] uppercase tracking-[0.12em] text-rust">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputCls =
  "w-full border border-bone/25 bg-transparent px-4 py-3 text-sm text-bone placeholder:text-bone/30 transition-colors duration-200 focus:border-rust focus:outline-none";

export const inputClsLight =
  "w-full border border-carbon/25 bg-transparent px-4 py-3 text-sm text-carbon placeholder:text-carbon/30 transition-colors duration-200 focus:border-rust focus:outline-none";

// Shared validation + demo-success banner for demonstration forms.
export function useDemoForm() {
  const { t } = useLang();
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const validate = (values, required) => {
    const errs = {};
    required.forEach((k) => {
      const raw = values[k];
      const v = typeof raw === "boolean" ? raw : (raw || "").trim();
      if (!v) errs[k] = t.common.required;
      else if (k === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) errs[k] = t.common.invalidEmail;
    });
    return errs;
  };

  const submit = (e, values, required) => {
    e.preventDefault();
    const errs = validate(values, required);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setDone(true);
    else setDone(false);
  };

  return { errors, done, submit, setDone };
}

export function DemoBanner({ title, body, testId }) {
  return (
    <div
      data-testid={testId}
      role="status"
      className="border border-forest/60 bg-forest/15 px-5 py-4"
    >
      <p className="font-mono text-[11px] uppercase tracking-label text-bone">{title}</p>
      {body && <p className="mt-2 text-sm text-bone/70">{body}</p>}
    </div>
  );
}
