import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const TABS = [
  { id: 'packages', icon: 'fa-solid fa-layer-group', key: 'hero.tabs.packages' },
  { id: 'flights', icon: 'fa-solid fa-plane', key: 'hero.tabs.flights' },
  { id: 'hotels', icon: 'fa-solid fa-hotel', key: 'hero.tabs.hotels' },
  { id: 'experiences', icon: 'fa-solid fa-ticket', key: 'hero.tabs.experiences' },
];

export default function Hero() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('packages');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    if (destination || date) {
      const details = document.getElementById('f-details');
      if (details) details.value = [destination, date].filter(Boolean).join(' — ');
    }
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => document.getElementById('f-name')?.focus({ preventScroll: true }), 400);
  };

  return (
    <section className="relative overflow-hidden rounded-b-3xl px-4 pb-14 pt-20 text-center text-white sm:px-6">
      <div
        className="animate-hero-zoom absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/45 to-primary/80" />

      <div className="relative z-10">
        <h1 className="animate-fade-in-up mx-auto mb-3.5 max-w-[16ch] text-[clamp(2rem,7vw,3.4rem)] font-bold leading-tight tracking-tight">
          {t('hero.title')}
        </h1>
        <p className="animate-fade-in-up mx-auto mb-8 max-w-[42ch] text-sm opacity-90 sm:text-base" style={{ animationDelay: '0.15s' }}>
          {t('hero.subtitle')}
        </p>

        <div
          className="animate-fade-in-up mx-auto max-w-3xl rounded-2xl border border-white/35 bg-white/15 p-5 shadow-2xl backdrop-blur-xl sm:p-6"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="no-scrollbar mb-4 flex gap-2 overflow-x-auto pb-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-transform hover:-translate-y-0.5 sm:text-sm ${
                  activeTab === tab.id
                    ? 'border-gold bg-gold text-dark'
                    : 'border-white/30 bg-white/10 text-white'
                }`}
              >
                <i className={tab.icon}></i> {t(tab.key)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder={t('hero.destinationPlaceholder')}
              className="w-full rounded-lg border border-white/40 bg-white/90 px-3 py-3 text-sm text-dark outline-none"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-white/40 bg-white/90 px-3 py-3 text-sm text-dark outline-none"
            />
            <select className="w-full rounded-lg border border-white/40 bg-white/90 px-3 py-3 text-sm text-dark outline-none">
              <option>{t('hero.pax.one')}</option>
              <option>{t('hero.pax.two')}</option>
              <option>{t('hero.pax.family')}</option>
            </select>
            <button
              type="button"
              onClick={handleSearch}
              className="w-full rounded-lg bg-gold px-3 py-3 text-sm font-bold text-dark transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              {t('hero.searchBtn')}
            </button>
          </div>

          <p className="mt-3 text-left text-[0.78rem] text-white/85">{t('hero.searchNote')}</p>
        </div>

        <div className="animate-bounce-down mt-8 text-2xl text-white/85" aria-hidden="true">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
}
