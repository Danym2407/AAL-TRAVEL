import { useLanguage } from '../i18n/LanguageContext.jsx';
import ImageWithFallback from './ImageWithFallback.jsx';
import Reveal from './Reveal.jsx';

export default function ReviewCard({ review, delay = 0 }) {
  const { t } = useLanguage();

  return (
    <Reveal
      delay={delay}
      className="w-[270px] shrink-0 snap-start rounded-2xl bg-white p-5 shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] sm:w-80"
    >
      <div className="mb-2.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <i key={i} className="fa-solid fa-star"></i>
        ))}
      </div>
      <p className="mb-4 text-sm italic text-gray-700">{t(review.textKey)}</p>
      <div className="flex items-center gap-2.5">
        <ImageWithFallback
          src={review.image}
          alt={review.name}
          fallbackIcon="fa-solid fa-user"
          iconClassName="text-lg"
          className="h-10 w-10 rounded-full bg-light-blue object-cover"
        />
        <div>
          <h4 className="text-sm font-bold">{review.name}</h4>
          <p className="text-xs text-gray-500">
            {t('review.traveledTo')} - {review.location}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
