import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';

const inputClasses =
  'w-full rounded-lg border border-gray-200 px-3 py-3 text-sm outline-none transition-shadow focus:border-accent focus:shadow-[0_0_0_3px_rgba(30,136,229,0.15)]';

export default function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Reveal as="h2" className="relative mb-5 pb-4 text-center text-2xl font-bold text-primary sm:text-3xl after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-16 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-accent after:to-gold">
        {t('contact.title')}
      </Reveal>
      <Reveal as="p" className="mb-6 text-center text-sm text-gray-600 sm:text-base">
        {t('contact.subtitle')}
      </Reveal>

      <Reveal as="form" onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-[0_4px_15px_rgba(0,0,0,0.08)] sm:p-7">
        <div className="mb-4">
          <label htmlFor="f-name" className="mb-1.5 block text-sm font-semibold text-gray-700">
            {t('contact.form.name')}
          </label>
          <input id="f-name" type="text" required placeholder={t('contact.form.namePlaceholder')} className={inputClasses} />
        </div>

        <div className="mb-4">
          <label htmlFor="f-contact" className="mb-1.5 block text-sm font-semibold text-gray-700">
            {t('contact.form.contact')}
          </label>
          <input id="f-contact" type="text" required placeholder="+33 6 00 00 00 00" className={inputClasses} />
        </div>

        <div className="mb-4">
          <label htmlFor="f-service" className="mb-1.5 block text-sm font-semibold text-gray-700">
            {t('contact.form.service')}
          </label>
          <select id="f-service" className={inputClasses}>
            <option>{t('contact.form.opt1')}</option>
            <option>{t('contact.form.opt2')}</option>
            <option>{t('contact.form.opt3')}</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="f-details" className="mb-1.5 block text-sm font-semibold text-gray-700">
            {t('contact.form.details')}
          </label>
          <textarea id="f-details" rows={3} placeholder={t('contact.form.detailsPlaceholder')} className={inputClasses} />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(13,71,161,0.3)]"
        >
          {t('contact.form.submit')}
        </button>

        {submitted && (
          <div className="animate-fade-in-up mt-3.5 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
            {t('contact.form.thanks')}
          </div>
        )}
      </Reveal>
    </section>
  );
}
