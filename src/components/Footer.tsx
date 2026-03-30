export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/LOGO1-hires.png"
                alt="Hotel Porec logo"
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold text-gray-900">
                Hotel Porec
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Privately owned since 1997. Located beside the Marina in the heart
              of Porec, Croatia. Open year-round.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#rooms"
                  className="text-gray-600 no-underline transition-colors hover:text-blue-600"
                >
                  Rooms &amp; Suites
                </a>
              </li>
              <li>
                <a
                  href="#restaurant"
                  className="text-gray-600 no-underline transition-colors hover:text-blue-600"
                >
                  Restaurant
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="text-gray-600 no-underline transition-colors hover:text-blue-600"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 no-underline transition-colors hover:text-blue-600"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Rade Koncara 1</li>
              <li>52440 Porec, Croatia</li>
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

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Information
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Check-in: 14:00</li>
              <li>Check-out: 10:00</li>
              <li>Free Wi-Fi</li>
              <li>Free parking</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-blue-50 pt-6 text-center text-sm text-gray-500">
          &copy; {year} Hotel Porec. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
