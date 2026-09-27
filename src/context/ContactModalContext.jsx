import { createContext, useContext, useMemo, useState } from 'react';
import { contactMessages, PHONE_NUMBER } from '../i18n/dict.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const ContactModalContext = createContext(null);

export function ContactModalProvider({ children }) {
  const { lang, t } = useLanguage();
  const [itemKey, setItemKey] = useState(null);
  const [custom, setCustom] = useState(null); // { message, label } for non-i18n-key content (e.g. the hero search)
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (key = null) => {
    setItemKey(key);
    setCustom(null);
    setIsOpen(true);
  };

  const openModalWithMessage = (message, label = null) => {
    setItemKey(null);
    setCustom({ message, label });
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const itemName = itemKey ? t(itemKey) : custom?.label ?? null;

  const message = useMemo(() => {
    if (custom) return custom.message;
    const msgs = contactMessages[lang];
    return itemName ? msgs.item(itemName) : msgs.generic;
  }, [lang, itemName, custom]);

  const whatsappHref = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  const callHref = `tel:+${PHONE_NUMBER}`;

  const value = { isOpen, itemKey, itemName, openModal, openModalWithMessage, closeModal, whatsappHref, callHref };

  return <ContactModalContext.Provider value={value}>{children}</ContactModalContext.Provider>;
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error('useContactModal must be used within a ContactModalProvider');
  return ctx;
}
