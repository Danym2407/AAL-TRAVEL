import { useLanguage } from '../i18n/LanguageContext.jsx';
import { reviews } from '../data/reviews.js';
import ReviewCard from './ReviewCard.jsx';
import Reveal from './Reveal.jsx';

export default function ReviewsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-light-blue py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal as="h2" className="relative mb-5 pb-4 text-center text-2xl font-bold text-primary sm:text-3xl after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-16 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-accent after:to-gold">
          {t('section.reviewsTitle')}
        </Reveal>
        <Reveal as="p" className="mb-2 text-center text-sm text-gray-600 sm:text-base">
          {t('section.reviewsSubtitle')}
        </Reveal>
      </div>

      <div className="no-scrollbar mt-4 flex snap-x snap-proximity gap-5 overflow-x-auto px-4 pb-2 sm:px-6">
        {reviews.map((review, i) => (
          <ReviewCard key={review.id} review={review} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
