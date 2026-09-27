import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { PHONE_NUMBER } from '../i18n/dict.js';
import Reveal from './Reveal.jsx';

const inputClasses =
  'w-full rounded-lg border border-gray-200 px-3 py-3 text-sm outline-none transition-shadow focus:border-accent focus:shadow-[0_0_0_3px_rgba(30,136,229,0.15)]';

export default function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [links, setLinks] = useState({ whatsapp: '', sms: '' });

  const buildMessage = (form) => {
    const name = form.elements['f-name'].value.trim();
    const email = form.elements['f-email'].value.trim();
    const phone = form.elements['f-phone'].value.trim();
    const service = form.elements['f-service'].value;
    const details = form.elements['f-details'].value.trim();

    return [
      t('contact.form.waIntro'),
      `${t('contact.form.name')}: ${name}`,
      `${t('contact.form.email')}: ${email}`,
      `${t('contact.form.phone')}: ${phone}`,
      `${t('contact.form.service')}: ${service}`,
      details ? `${t('contact.form.details')}: ${details}` : null,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = buildMessage(e.currentTarget);
    const encoded = encodeURIComponent(message);
    const whatsapp = `https://wa.me/${PHONE_NUMBER}?text=${encoded}`;
    const sms = `sms:+${PHONE_NUMBER}?body=${encoded}`;

    setLinks({ whatsapp, sms });
    setSubmitted(true);

    // Open WhatsApp immediately with the message ready — this click is the user gesture,
    // so the popup isn't blocked. The buttons below stay as a fallback so the data is
    // never lost even if the tab gets closed or a popup blocker interferes.
    window.open(whatsapp, '_blank', 'noopener');
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
          <input id="f-name" name="f-name" type="text" required placeholder={t('contact.form.namePlaceholder')} className={inputClasses} />
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="f-email" className="mb-1.5 block text-sm font-semibold text-gray-700">
              {t('contact.form.email')}
            </label>
            <input id="f-email" name="f-email" type="email" required placeholder={t('contact.form.emailPlaceholder')} className={inputClasses} />
          </div>
          <div>
            <label htmlFor="f-phone" className="mb-1.5 block text-sm font-semibold text-gray-700">
              {t('contact.form.phone')}
            </label>
            <input id="f-phone" name="f-phone" type="tel" required placeholder={t('contact.form.phonePlaceholder')} className={inputClasses} />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="f-service" className="mb-1.5 block text-sm font-semibold text-gray-700">
            {t('contact.form.service')}
          </label>
          <select id="f-service" name="f-service" className={inputClasses}>
            <option>{t('contact.form.opt1')}</option>
            <option>{t('contact.form.opt2')}</option>
            <option>{t('contact.form.opt3')}</option>
            <option>{t('contact.form.opt4')}</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="f-details" className="mb-1.5 block text-sm font-semibold text-gray-700">
            {t('contact.form.details')}
          </label>
          <textarea id="f-details" name="f-details" rows={3} placeholder={t('contact.form.detailsPlaceholder')} className={inputClasses} />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(13,71,161,0.3)]"
        >
          {t('contact.form.submit')}
        </button>

        {submitted && (
          <div className="animate-fade-in-up mt-3.5 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
            <p className="mb-3">{t('contact.form.thanks')}</p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25d366] py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                <i className="fa-brands fa-whatsapp text-base"></i> {t('contact.form.sendWhatsapp')}
              </a>
              <a
                href={links.sms}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                <i className="fa-solid fa-comment-sms text-base"></i> {t('contact.form.sendSms')}
              </a>
            </div>
          </div>
        )}
      </Reveal>
    </section>
  );
}
