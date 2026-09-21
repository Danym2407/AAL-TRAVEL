import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useContactModal } from '../context/ContactModalContext.jsx';
import ImageWithFallback from './ImageWithFallback.jsx';
import Reveal from './Reveal.jsx';

export default function CompareCard({ destination, delay = 0 }) {
  const { t } = useLanguage();
  const { openModal } = useContactModal();
  const activities = t(`${destination.i18nKey}.activities`);

  return (
    <Reveal
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_32px_rgba(0,0,0,0.16)]"
    >
      <div className="relative h-40 overflow-hidden">
        <ImageWithFallback
          src={destination.image}
          alt={t(`${destination.i18nKey}.title`)}
          fallbackIcon="fa-solid fa-champagne-glasses"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
        />
        <span className="absolute left-3 top-3 z-10 rounded-full bg-gold px-3 py-1 text-xs font-bold text-black">
          {t(`${destination.i18nKey}.budget`)}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-bold text-primary">{t(`${destination.i18nKey}.title`)}</h3>
        <p className="text-sm text-gray-600">{t(`${destination.i18nKey}.desc`)}</p>
        <ul className="my-1 flex flex-col gap-2">
          {Array.isArray(activities) &&
            activities.map((activity) => (
              <li key={activity} className="flex items-start gap-2 text-sm text-gray-700">
                <i className="fa-solid fa-check mt-0.5 text-xs text-gold"></i>
                <span>{activity}</span>
              </li>
            ))}
        </ul>
        <button
          type="button"
          onClick={() => openModal(`${destination.i18nKey}.title`)}
          className="mt-auto w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent"
        >
          {t('newyear.cta')}
        </button>
      </div>
    </Reveal>
  );
}
