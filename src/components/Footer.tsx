import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-blue-100 bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: "url(/zemlja_gp2.webp)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="shrink-0">
            <img src="/LOGO1-hires.png" alt="Hotel Porec logo" className="h-10 w-auto" />
            <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-gray-500">
              {t("footer.description")}
            </p>
          </div>

          {/* Contact + Info */}
          <div className="flex gap-10 text-sm text-gray-600 sm:gap-14">
            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {t("footer.contact")}
              </h3>
              <ul className="space-y-1">
                <li>{t("contact.addressLine1")}</li>
                <li>{t("contact.addressLine2")}</li>
                <li>
                  <a href="tel:+38552451811" className="text-gray-600 no-underline hover:text-blue-600">
                    +385 52 451 811
                  </a>
                </li>
                <li>
                  <a href="mailto:info@hotelporec.com" className="text-gray-600 no-underline hover:text-blue-600">
                    info@hotelporec.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {t("footer.information")}
              </h3>
              <ul className="space-y-1">
                <li>{t("footer.checkIn")}</li>
                <li>{t("footer.checkOut")}</li>
                <li>{t("footer.freeWifi")}</li>
                <li>{t("footer.freeParking")}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 border-t border-blue-50 pt-4 text-center text-xs text-gray-400">
          {t("footer.copyright", { year })}
        </div>
      </div>
    </footer>
  )
}
