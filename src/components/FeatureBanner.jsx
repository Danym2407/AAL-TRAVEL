import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useContactModal } from '../context/ContactModalContext.jsx';
import ImageWithFallback from './ImageWithFallback.jsx';
import Reveal from './Reveal.jsx';

export default function FeatureBanner({ tour, delay = 0 }) {
  const { t } = useLanguage();
  const { openModal } = useContactModal();

  return (
    <Reveal
      delay={delay}
      className="group relative mb-5 flex min-h-[320px] items-end overflow-hidden rounded-2xl sm:min-h-[420px]"
    >
      <ImageWithFallback
        src={tour.image}
        alt={t(`${tour.i18nKey}.title`)}
        fallbackIcon={tour.fallbackIcon}
        iconClassName="text-5xl"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 via-[#0a2540]/10 to-transparent" />

      {tour.badgeKey && (
        <span className="absolute right-5 top-5 z-10 rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-black">
          {t(tour.badgeKey)}
        </span>
      )}

      <div className="relative z-10 w-full p-6 text-white sm:p-8">
        <h3 className="mb-2 text-xl font-bold sm:text-2xl">{t(`${tour.i18nKey}.title`)}</h3>
        <p className="mb-4 max-w-[48ch] text-sm opacity-90 sm:text-base">{t(`${tour.i18nKey}.subtitle`)}</p>
        <div className="flex flex-wrap items-center justify-between gap-3.5">
          <div className="text-lg font-bold sm:text-xl">
            {tour.price} <span className="text-xs font-normal opacity-85">{t(tour.priceSuffixKey)}</span>
          </div>
          <button
            type="button"
            onClick={() => openModal(`${tour.i18nKey}.title`)}
            className="rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-dark transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            {t('cta.book')}
          </button>
        </div>
      </div>
    </Reveal>
  );
}
