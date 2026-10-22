import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { IMG } from "@/data/images";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "@/components/ui-bits";
import { Field, inputCls, useDemoForm, DemoBanner } from "@/components/DemoForm";

const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

export default function Camps() {
  const { t } = useLang();
  const f = t.camps;
  const [values, setValues] = useState({ name: "", email: "", role: "", message: "" });
  const { errors, done, submit } = useDemoForm();
  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  return (
    <>
      <PageHeader
        testId="camps-page-title"
        eyebrow={t.camps.eyebrow}
        title={[t.camps.title]}
        body={t.camps.body}
      />

      <section className="bg-bone py-16 sm:py-20 lg:py-24" data-testid="camps-announce">
        <div className={SHELL}>
          <Reveal>
            <p
              data-testid="camps-announce-banner"
              className="flex items-center gap-4 border-y border-carbon/25 py-6 font-display text-2xl italic text-carbon sm:text-3xl"
            >
              <span className="inline-block h-2 w-2 shrink-0 bg-rust" aria-hidden="true" />
              {t.camps.announce}
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-carbon/70">
              {t.camps.body}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <div className="overflow-hidden border border-carbon/25">
              <img
                src={IMG.campAction.src}
                width={IMG.campAction.w}
                height={IMG.campAction.h}
                alt={IMG.campAction.alt}
                loading="lazy"
                className="aspect-[21/9] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="grain bg-carbon py-20 sm:py-24 lg:py-32" data-testid="camps-form-section">
        <div className={`${SHELL} grid gap-14 lg:grid-cols-12 lg:gap-20`}>
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{f.formHeading}</Eyebrow>
              <p className="mt-6 inline-block border border-rust/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-rust" data-testid="camps-demo-badge">
                {f.formDemo}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            {done ? (
              <Reveal>
                <DemoBanner testId="camps-success" title={f.success} />
              </Reveal>
            ) : (
              <Reveal>
                <form
                  noValidate
                  onSubmit={(e) => submit(e, values, ["name", "email", "role"])}
                  className="grid gap-6 sm:grid-cols-2"
                  data-testid="camps-form"
                >
                  <Field label={f.name} id="camps-name" error={errors.name}>
                    <input id="camps-name" data-testid="camps-input-name" className={inputCls} value={values.name} onChange={set("name")} autoComplete="name" />
                  </Field>
                  <Field label={f.email} id="camps-email" error={errors.email}>
                    <input id="camps-email" data-testid="camps-input-email" type="email" className={inputCls} value={values.email} onChange={set("email")} autoComplete="email" />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label={f.role} id="camps-role" error={errors.role}>
                      <select id="camps-role" data-testid="camps-select-role" className={inputCls} value={values.role} onChange={set("role")}>
                        <option value="">{t.common.select}</option>
                        {f.roleOptions.map((o) => (
                          <option key={o} value={o} className="bg-carbon">{o}</option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field label={f.message} id="camps-message" error={errors.message}>
                      <textarea
                        id="camps-message"
                        data-testid="camps-input-message"
                        rows={4}
                        className={inputCls}
                        placeholder={f.messagePlaceholder}
                        value={values.message}
                        onChange={set("message")}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      data-testid="camps-submit-button"
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
