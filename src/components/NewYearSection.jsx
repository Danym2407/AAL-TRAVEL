import { useLanguage } from '../i18n/LanguageContext.jsx';
import { newYearDestinations } from '../data/newyear.js';
import CompareCard from './CompareCard.jsx';
import Reveal from './Reveal.jsx';

export default function NewYearSection() {
  const { t } = useLanguage();

  return (
    <section id="findeanio" className="bg-light-gray py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal as="h2" className="relative mb-5 pb-4 text-center text-2xl font-bold text-primary sm:text-3xl after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-16 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-accent after:to-gold">
          {t('newyear.title')}
        </Reveal>
        <Reveal as="p" className="mb-2 text-center text-sm text-gray-600 sm:text-base">
          {t('newyear.subtitle')}
        </Reveal>

        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {newYearDestinations.map((destination, i) => (
            <CompareCard key={destination.id} destination={destination} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
