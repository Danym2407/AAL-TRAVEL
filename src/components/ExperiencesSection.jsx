import { useLanguage } from '../i18n/LanguageContext.jsx';
import { featuredTours, moreTours } from '../data/tours.js';
import FeatureBanner from './FeatureBanner.jsx';
import TourCard from './TourCard.jsx';
import Reveal from './Reveal.jsx';

export default function ExperiencesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal as="h2" className="relative mb-5 pb-4 text-center text-2xl font-bold text-primary sm:text-3xl after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-16 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-accent after:to-gold">
          {t('section.experiencesTitle')}
        </Reveal>
        <Reveal as="p" className="mb-7 text-center text-sm text-gray-600 sm:text-base">
          {t('section.experiencesSubtitle')}{' '}
          <span className="inline-block font-script text-2xl text-accent">Best of Dubái</span>
        </Reveal>

        {featuredTours.map((tour, i) => (
          <FeatureBanner key={tour.id} tour={tour} delay={i * 0.08} />
        ))}

        <Reveal as="h3" className="mb-1 mt-9 text-lg font-bold text-primary sm:text-xl">
          {t('section.moreTitle')}
        </Reveal>
        <Reveal as="p" className="mb-2 text-sm text-gray-600">
          {t('section.moreSubtitle')}
        </Reveal>
      </div>

      <div className="no-scrollbar mt-4 flex snap-x snap-proximity gap-5 overflow-x-auto px-4 pb-5 sm:px-6 lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-3 lg:overflow-visible xl:grid-cols-5">
        {moreTours.map((tour) => (
          <div key={tour.id} className="snap-start lg:w-auto">
            <TourCard tour={tour} />
          </div>
        ))}
      </div>
    </section>
  );
}
