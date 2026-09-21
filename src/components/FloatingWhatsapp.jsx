import { useContactModal } from '../context/ContactModalContext.jsx';

export default function FloatingWhatsapp() {
  const { openModal } = useContactModal();

  return (
    <button
      type="button"
      aria-label="WhatsApp"
      onClick={() => openModal()}
      className="animate-wa-pulse fixed bottom-20 right-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-3xl text-white shadow-lg md:bottom-8"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </button>
  );
}
