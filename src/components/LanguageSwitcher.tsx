import { useTranslation } from "react-i18next"

const languages = [
  { code: "en", name: "English", flag: "\ud83c\uddec\ud83c\udde7" },
  { code: "hr", name: "Hrvatski", flag: "\ud83c\udded\ud83c\uddf7" },
  { code: "de", name: "Deutsch", flag: "\ud83c\udde9\ud83c\uddea" },
] as const

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation()

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`rounded-md px-2 py-1 text-sm font-medium transition-colors ${
            i18n.language === lang.code
              ? "bg-blue-100 text-blue-700"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          }`}
          title={lang.name}
          aria-label={lang.name}
        >
          <span className="mr-1">{lang.flag}</span>
          <span className="uppercase">{lang.code}</span>
        </button>
      ))}
    </div>
  )
}
