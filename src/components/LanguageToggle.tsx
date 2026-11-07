import { useLanguage } from "@/i18n/LanguageContext";

export const LanguageToggle = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="px-2.5 py-2 glass-card hover:border-primary/50 transition-all duration-300 code-font text-xs font-semibold"
      aria-label={lang === "en" ? "Prebaci na hrvatski" : "Switch to English"}
    >
      {lang === "en" ? "HR" : "EN"}
    </button>
  );
};
