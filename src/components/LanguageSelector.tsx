import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const FlagFR = () => (
  <svg viewBox="0 0 640 480" className="w-6 h-4 rounded-sm">
    <rect width="213.3" height="480" fill="#002395"/>
    <rect x="213.3" width="213.4" height="480" fill="#fff"/>
    <rect x="426.7" width="213.3" height="480" fill="#ed2939"/>
  </svg>
);

const FlagGB = () => (
  <svg viewBox="0 0 640 480" className="w-6 h-4 rounded-sm">
    <path fill="#012169" d="M0 0h640v480H0z"/>
    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
  </svg>
);

const FlagBE = () => (
  <svg viewBox="0 0 640 480" className="w-6 h-4 rounded-sm">
    <rect width="213.3" height="480" fill="#000"/>
    <rect x="213.3" width="213.4" height="480" fill="#fdda24"/>
    <rect x="426.7" width="213.3" height="480" fill="#ef3340"/>
  </svg>
);

const FlagDE = () => (
  <svg viewBox="0 0 640 480" className="w-6 h-4 rounded-sm">
    <rect width="640" height="160" fill="#000"/>
    <rect y="160" width="640" height="160" fill="#dd0000"/>
    <rect y="320" width="640" height="160" fill="#ffcc00"/>
  </svg>
);

const flags: Record<Lang, React.ReactNode> = {
  fr: <FlagFR />,
  en: <FlagGB />,
  nl: <FlagBE />,
  de: <FlagDE />,
};

const languages: { code: Lang; label: string }[] = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "nl", label: "Nederlands" },
  { code: "de", label: "Deutsch" },
];

const LanguageSelector = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-14 right-0 glass-card rounded-xl p-2 flex flex-col gap-1 min-w-[160px] shadow-lg border border-border"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setOpen(false); }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  l.code === lang
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {flags[l.code]}
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full glass-card border border-border shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Change language"
      >
        {flags[lang]}
      </button>
    </div>
  );
};

export default LanguageSelector;
