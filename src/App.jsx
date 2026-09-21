import { LanguageProvider } from './i18n/LanguageContext.jsx';
import { ContactModalProvider } from './context/ContactModalContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ExperiencesSection from './components/ExperiencesSection.jsx';
import NewYearSection from './components/NewYearSection.jsx';
import ReviewsSection from './components/ReviewsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import ContactModal from './components/ContactModal.jsx';
import FloatingWhatsapp from './components/FloatingWhatsapp.jsx';
import MobileNav from './components/MobileNav.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <LanguageProvider>
      <ContactModalProvider>
        <div id="top" className="pb-[70px] md:pb-0">
          <Header />
          <Hero />
          <ExperiencesSection />
          <NewYearSection />
          <ReviewsSection />
          <ContactSection />
          <ContactModal />
          <FloatingWhatsapp />
          <MobileNav />
          <Footer />
        </div>
      </ContactModalProvider>
    </LanguageProvider>
  );
}
