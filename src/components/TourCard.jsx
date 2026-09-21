import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useContactModal } from '../context/ContactModalContext.jsx';
import ImageWithFallback from './ImageWithFallback.jsx';

export default function TourCard({ tour }) {
  const { t } = useLanguage();
  const { openModal } = useContactModal();

  const priceLabel = tour.priceLabelKey ? t(tour.priceLabelKey) : tour.price;
  const priceSuffix = t(tour.priceSuffixKey);

  return (
    <div className="group relative flex w-[270px] shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_32px_rgba(0,0,0,0.16)] sm:w-72 lg:w-full">
      {tour.badgeKey && (
        <span className="absolute right-3.5 top-3.5 z-10 rounded-xl bg-gold px-2.5 py-1 text-xs font-bold text-black">
          {t(tour.badgeKey)}
        </span>
      )}
      <ImageWithFallback
        src={tour.image}
        alt={t(`${tour.i18nKey}.title`)}
        fallbackIcon={tour.fallbackIcon}
        className="h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
      />
      <div className="flex flex-1 flex-col p-[18px]">
        <h3 className="mb-1 text-base font-bold text-primary">{t(`${tour.i18nKey}.title`)}</h3>
        <p className="mb-3 min-h-[2.6em] text-sm text-gray-600">{t(`${tour.i18nKey}.subtitle`)}</p>
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="text-base font-bold text-primary">
            {priceLabel} <span className="text-xs font-normal text-gray-500">{priceSuffix}</span>
          </div>
          <button
            type="button"
            onClick={() => openModal(`${tour.i18nKey}.title`)}
            className="rounded-lg bg-light-blue px-3.5 py-2 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-dark"
          >
            {t('cta.book')}
          </button>
        </div>
      </div>
    </div>
  );
}
