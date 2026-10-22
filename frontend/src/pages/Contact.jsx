import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "@/components/ui-bits";
import { Field, inputCls, inputClsLight, useDemoForm, DemoBanner } from "@/components/DemoForm";

const SHELL = "mx-auto max-w-shell px-5 sm:px-8 lg:px-12";

export default function Contact() {
  const { t } = useLang();
  const f = t.contact.form;
  const [values, setValues] = useState({ name: "", email: "", topic: "", message: "" });
  const { errors, done, submit } = useDemoForm();
  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const cls = inputClsLight;

  return (
    <>
      <PageHeader
        testId="contact-page-title"
        eyebrow={t.contact.eyebrow}
        title={[t.contact.title]}
        body={t.contact.body}
      />

      <section className="bg-bone py-16 sm:py-20 lg:py-24" data-testid="contact-section">
        <div className={`${SHELL} grid gap-14 lg:grid-cols-12 lg:gap-20`}>
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow className="!text-rust">{t.contact.detailsHeading}</Eyebrow>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-carbon/75">
                {t.contact.detailsNote}
              </p>
              <div className="mt-8 border-t border-carbon/20" data-testid="contact-details">
                <p className="border-b border-carbon/20 py-5 font-mono text-[11px] uppercase tracking-label text-carbon/70">
                  {t.contact.social}
                </p>
                <p className="border-b border-carbon/20 py-5 font-mono text-[11px] uppercase tracking-label text-stonegray">
                  {t.contact.detailsHeading} — {t.common.notSpecified}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-8 inline-block border border-rust/50 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-rust" data-testid="contact-demo-badge">
                {t.common.demoBadge}
              </p>
            </Reveal>
            {done ? (
              <Reveal>
                <DemoBanner testId="contact-success" title={f.success} />
              </Reveal>
            ) : (
              <Reveal>
                <form
                  noValidate
                  onSubmit={(e) => submit(e, values, ["name", "email", "topic", "message"])}
                  className="grid gap-6 sm:grid-cols-2"
                  data-testid="contact-form"
                >
                  <Field label={f.name} id="ct-name" error={errors.name} dark={false}>
                    <input id="ct-name" data-testid="contact-input-name" className={cls} value={values.name} onChange={set("name")} autoComplete="name" />
                  </Field>
                  <Field label={f.email} id="ct-email" error={errors.email} dark={false}>
                    <input id="ct-email" data-testid="contact-input-email" type="email" className={cls} value={values.email} onChange={set("email")} autoComplete="email" />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label={f.topic} id="ct-topic" error={errors.topic} dark={false}>
                      <select id="ct-topic" data-testid="contact-select-topic" className={cls} value={values.topic} onChange={set("topic")}>
                        <option value="">{t.common.select}</option>
                        {f.topicOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field label={f.message} id="ct-message" error={errors.message} dark={false}>
                      <textarea
                        id="ct-message"
                        data-testid="contact-input-message"
                        rows={5}
                        className={cls}
                        placeholder={f.messagePlaceholder}
                        value={values.message}
                        onChange={set("message")}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      data-testid="contact-submit-button"
                      className="w-full bg-rust px-7 py-4 text-center font-mono text-[11px] uppercase tracking-label text-bone transition-colors duration-200 hover:bg-carbon sm:w-auto"
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
