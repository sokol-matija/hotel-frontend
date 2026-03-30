import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Brand — hidden on mobile, shown on sm+ */}
        <div className="hidden sm:block">
          <div className="flex items-center gap-3">
            <img
              src="/LOGO1-hires.png"
              alt="Hotel Porec logo"
              className="h-10 w-auto"
            />
            <span className="text-lg font-bold text-gray-900">
              {t("common.hotelPorec")}
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-600">
            {t("footer.description")}
          </p>
        </div>

        {/* Link columns — 2-col grid on mobile, 3-col on sm+ */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:mt-8 sm:grid-cols-3 sm:gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-900 sm:mb-3">
              {t("footer.explore")}
            </h3>
            <ul className="space-y-1.5 text-sm sm:space-y-2">
              <li>
                <a
                  href="#rooms"
                  className="text-gray-600 no-underline transition-colors hover:text-blue-600"
                >
                  {t("footer.roomsAndSuites")}
                </a>
              </li>
              <li>
                <a
                  href="#restaurant"
                  className="text-gray-600 no-underline transition-colors hover:text-blue-600"
                >
                  {t("footer.restaurant")}
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="text-gray-600 no-underline transition-colors hover:text-blue-600"
                >
                  {t("footer.amenities")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 no-underline transition-colors hover:text-blue-600"
                >
                  {t("footer.aboutUs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-900 sm:mb-3">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-1.5 text-sm text-gray-600 sm:space-y-2">
              <li>{t("contact.addressLine1")}</li>
              <li>{t("contact.addressLine2")}</li>
              <li>
                <a
                  href="tel:+38552451811"
                  className="text-gray-600 no-underline transition-colors hover:text-blue-600"
                >
                  +385 52 451 811
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hotelporec.com"
                  className="text-gray-600 no-underline transition-colors hover:text-blue-600"
                >
                  info@hotelporec.com
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-900 sm:mb-3">
              {t("footer.information")}
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-gray-600 sm:grid-cols-1 sm:space-y-2 sm:gap-0">
              <li>{t("footer.checkIn")}</li>
              <li>{t("footer.checkOut")}</li>
              <li>{t("footer.freeWifi")}</li>
              <li>{t("footer.freeParking")}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 border-t border-blue-50 pt-4 text-center text-sm text-gray-500 sm:mt-10 sm:pt-6">
          {t("footer.copyright", { year })}
        </div>
      </div>
    </footer>
  )
}
