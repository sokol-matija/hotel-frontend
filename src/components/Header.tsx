import { Link } from "@tanstack/react-router"
import { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

const NAV_KEYS = [
  { key: "header.rooms", href: "#rooms" },
  { key: "header.restaurant", href: "#restaurant" },
  { key: "header.about", href: "#about" },
  { key: "header.contact", href: "#contact" },
] as const

export default function Header() {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    setScrolled(currentScrollY > 0)

    if (currentScrollY <= 0) {
      setHidden(false)
    } else if (currentScrollY > lastScrollY.current) {
      setHidden(true)
    } else {
      setHidden(false)
    }

    lastScrollY.current = currentScrollY
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-lg transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "border-blue-100 shadow-md" : "border-blue-100"}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img
            src="/LOGO1-hires.png"
            alt="Hotel Porec logo"
            className="h-10 w-auto"
          />

        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_KEYS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 no-underline transition-colors hover:text-blue-600"
            >
              {t(item.key)}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
          >
            {t("header.bookNow")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-blue-50 bg-white px-4 pb-4 pt-2 md:hidden">
          {NAV_KEYS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 no-underline transition-colors hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setMobileOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
          <div className="px-3 py-2.5">
            <LanguageSwitcher />
          </div>
          <a
            href="#contact"
            className="mt-2 block rounded-lg bg-blue-600 px-3 py-2.5 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-blue-700"
            onClick={() => setMobileOpen(false)}
          >
            {t("header.bookNow")}
          </a>
        </div>
      )}
    </header>
  )
}
