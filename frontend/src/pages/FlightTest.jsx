import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { IMG } from "@/data/images";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Eyebrow, Btn } from "@/components/ui-bits";
import { Field, inputCls, useDemoForm, DemoBanner } from "@/components/DemoForm";

const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

export default function FlightTest() {
  const { t, lang } = useLang();
  const f = t.flightTest.form;
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    level: "",
    goal: "",
    language: "",
    guardianName: "",
    guardianConsent: false,
  });
  const { errors, done, submit } = useDemoForm();

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const isMinor = values.age === t.flightTest.form.ageOptions[0] || values.age === t.flightTest.form.ageOptions[1];
  const required = ["name", "email", "age", "level", "goal", "language"].concat(
    isMinor ? ["guardianName"] : []
  );
  if (isMinor && values.guardianConsent === false) required.push("guardianConsent");

  return (
    <>
      <PageHeader
        testId="flight-test-page-title"
        index="04"
        eyebrow={t.flightTest.eyebrow}
        title={[t.flightTest.title]}
        body={t.flightTest.intro}
      />

      <section className="bg-bone py-16 text-carbon sm:py-20 lg:py-24" data-testid="flight-test-explainer">
        <div className={`${SHELL} grid gap-px border border-carbon/20 bg-carbon/20 md:grid-cols-3`}>
          {[t.flightTest.what, t.flightTest.who, t.flightTest.how].map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col bg-bone p-8 lg:p-10" data-testid={`flight-test-block-${i}`}>
                <span className="font-mono text-xs tracking-label text-rust">0{i + 1}</span>
                <h2 className="mt-8 font-display text-2xl font-medium tracking-tight">{b.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-carbon/70">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grain bg-carbon py-20 sm:py-24 lg:py-32" data-testid="flight-test-form-section">
        <div className={`${SHELL} grid gap-14 lg:grid-cols-12 lg:gap-20`}>
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{f.heading}</Eyebrow>
              <p className="mt-6 inline-block border border-rust/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-rust" data-testid="flight-test-demo-badge">
                {f.demo}
              </p>
              <div className="mt-10 overflow-hidden border border-bone/15">
                <img
                  src={IMG.campAction.src}
                  width={IMG.campAction.w}
                  height={IMG.campAction.h}
                  alt={IMG.campAction.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {done ? (
              <Reveal>
                <DemoBanner
                  testId="flight-test-success"
                  title={f.success}
                  body={f.successBody}
                />
              </Reveal>
            ) : (
              <Reveal>
                <form
                  noValidate
                  onSubmit={(e) => submit(e, values, required)}
                  className="grid gap-6 sm:grid-cols-2"
                  data-testid="flight-test-form"
                >
                  <Field label={f.name} id="ft-name" error={errors.name}>
                    <input
                      id="ft-name"
                      data-testid="flight-test-input-name"
                      className={inputCls}
                      value={values.name}
                      onChange={set("name")}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label={f.email} id="ft-email" error={errors.email}>
                    <input
                      id="ft-email"
                      data-testid="flight-test-input-email"
                      type="email"
                      className={inputCls}
                      value={values.email}
                      onChange={set("email")}
                      autoComplete="email"
                    />
                  </Field>
                  <Field label={f.age} id="ft-age" error={errors.age}>
                    <select id="ft-age" data-testid="flight-test-select-age" className={inputCls} value={values.age} onChange={set("age")}>
                      <option value="">{t.common.select}</option>
                      {f.ageOptions.map((o) => (
                        <option key={o} value={o} className="bg-carbon">{o}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label={f.level} id="ft-level" error={errors.level}>
                    <select id="ft-level" data-testid="flight-test-select-level" className={inputCls} value={values.level} onChange={set("level")}>
                      <option value="">{t.common.select}</option>
                      {f.levelOptions.map((o) => (
                        <option key={o} value={o} className="bg-carbon">{o}</option>
                      ))}
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label={f.goal} id="ft-goal" error={errors.goal}>
                      <textarea
                        id="ft-goal"
                        data-testid="flight-test-input-goal"
                        rows={4}
                        className={inputCls}
                        placeholder={f.goalPlaceholder}
                        value={values.goal}
                        onChange={set("goal")}
                      />
                    </Field>
                  </div>
                  <Field label={f.language} id="ft-language" error={errors.language}>
                    <select id="ft-language" data-testid="flight-test-select-language" className={inputCls} value={values.language} onChange={set("language")}>
                      <option value="">{t.common.select}</option>
                      {f.langOptions.map((o) => (
                        <option key={o} value={o} className="bg-carbon">{o}</option>
                      ))}
                    </select>
                  </Field>

                  {isMinor && (
                    <div
                      className="border border-forest/50 bg-forest/10 p-6 sm:col-span-2"
                      data-testid="flight-test-guardian-block"
                    >
                      <h3 className="font-mono text-[11px] uppercase tracking-label text-bone">
                        {f.guardianHeading}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-bone/70">{f.guardianBody}</p>
                      <div className="mt-5">
                        <Field label={f.guardianName} id="ft-guardian-name" error={errors.guardianName}>
                          <input
                            id="ft-guardian-name"
                            data-testid="flight-test-input-guardian-name"
                            className={inputCls}
                            value={values.guardianName}
                            onChange={set("guardianName")}
                          />
                        </Field>
                      </div>
                      <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-bone/80">
                        <input
                          type="checkbox"
                          data-testid="flight-test-checkbox-guardian-consent"
                          checked={values.guardianConsent}
                          onChange={(e) =>
                            setValues((v) => ({ ...v, guardianConsent: e.target.checked }))
                          }
                          className="mt-1 h-4 w-4 shrink-0 accent-[#C6561A]"
                        />
                        {f.guardianConsent}
                      </label>
                      {errors.guardianConsent && (
                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-rust">
                          {errors.guardianConsent}
                        </p>
                      )}
                    </div>
                  )}

                  <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-bone/40 sm:col-span-2">
                    {f.guardianNote}
                  </p>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      data-testid="flight-test-submit-button"
                      className="w-full bg-rust px-7 py-4 text-center font-mono text-[11px] uppercase tracking-label text-bone transition-colors duration-200 hover:bg-bone hover:text-carbon sm:w-auto"
                    >
                      {f.submit} →
                    </button>
                  </div>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
