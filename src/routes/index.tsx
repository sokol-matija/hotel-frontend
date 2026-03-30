import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: HomePage })

/* ------------------------------------------------------------------ */
/*  Room data                                                         */
/* ------------------------------------------------------------------ */

const ROOMS = [
  {
    name: "Apartment 401",
    description:
      "Spacious top-floor apartment with whirlpool bath, separate living area, and panoramic views.",
    image: "/hotel-site/apartment/apt-01.jpg",
    features: ["Whirlpool", "Living area", "Balcony", "Minibar"],
  },
  {
    name: "Superior Room",
    description:
      "Elegantly appointed room with premium furnishings, generous space, and modern comfort.",
    image: "/hotel-site/rooms/superior-1.jpg",
    features: ["A/C", "SAT-TV", "Safe", "Balcony"],
  },
  {
    name: "Family Room",
    description:
      "Designed for families, with extra space and flexible sleeping arrangements for a comfortable stay.",
    image: "/hotel-site/rooms/family-2.jpg",
    features: ["Extra beds", "A/C", "Minibar", "Wi-Fi"],
  },
  {
    name: "Triple Room",
    description:
      "Comfortable room for three guests with all essential amenities and a private balcony.",
    image: "/hotel-site/rooms/triple-1.jpg",
    features: ["3 beds", "Balcony", "Shower", "SAT-TV"],
  },
  {
    name: "Standard Room",
    description:
      "Clean, cozy room with everything you need for a restful stay in Porec.",
    image: "/hotel-site/rooms/standard-1.jpg",
    features: ["A/C", "Wi-Fi", "Shower", "Safe"],
  },
  {
    name: "Flex Room",
    description:
      "Versatile room that adapts to solo travelers or couples with flexible configuration.",
    image: "/hotel-site/rooms/flex-1.jpg",
    features: ["Flexible layout", "A/C", "Minibar", "Balcony"],
  },
] as const

/* ------------------------------------------------------------------ */
/*  Amenity data                                                      */
/* ------------------------------------------------------------------ */

const AMENITIES = [
  {
    title: "Free Wi-Fi",
    description: "High-speed wireless internet throughout the hotel.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
        />
      </svg>
    ),
  },
  {
    title: "Air Conditioning",
    description: "Climate control in every room for year-round comfort.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Private Balcony",
    description: "Step outside and enjoy fresh Mediterranean air.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"
        />
      </svg>
    ),
  },
  {
    title: "SAT-TV",
    description: "Satellite television with international channels.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
  {
    title: "Minibar & Safe",
    description: "In-room minibar and personal safe in every room.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Free Parking",
    description: "Complimentary parking for all hotel guests.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
  },
] as const

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

function HomePage() {
  return (
    <main>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        {/* Background — mosaic artwork */}
        <div className="absolute inset-0">
          <img
            src="/mozaik_gp1.png"
            alt=""
            className="absolute bottom-0 right-0 h-[70%] w-auto object-contain opacity-[0.12] sm:opacity-[0.15]"
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-transparent to-blue-50/90" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <img
            src="/LOGO1-hires.png"
            alt="Hotel Porec logo"
            className="fade-in mb-6 h-24 w-auto sm:h-28 lg:h-32"
          />
          <h1 className="fade-in mb-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
            Hotel Porec
          </h1>
          <p className="fade-in mb-3 text-lg font-medium tracking-wide text-blue-600/80 sm:text-xl">
            Beside the Marina &bull; Since 1997 &bull; Open Year-Round
          </p>
          <p className="fade-in mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            A privately owned Mediterranean retreat on the Istrian coast,
            where Adriatic charm meets genuine Croatian hospitality.
          </p>
          <div className="fade-in flex flex-wrap items-center justify-center gap-4">
            <a
              href="#rooms"
              className="rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white no-underline shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Explore Rooms
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-blue-200 bg-white/80 px-8 py-3.5 text-base font-semibold text-blue-600 no-underline backdrop-blur-sm transition-all hover:border-blue-300 hover:bg-white"
            >
              Book Your Stay
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <span className="text-xs font-medium uppercase tracking-widest">Discover</span>
              <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Hotel exterior showcase ---- */}
      <section className="relative -mt-1 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/mozaik/470911327_18035751920585995_4281438597651726607_n.jpg"
                alt="Hotel Porec facade with palm trees"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/mozaik/181462920_779311372770711_3842674505274444965_n.jpg"
                alt="Hotel Porec with flowers"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/hotel-site/hotel/exterior-1.jpg"
                alt="Hotel Porec exterior"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ABOUT                                                       */}
      {/* ============================================================ */}
      <section id="about" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Since 1997
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your Home by the Adriatic
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                Hotel Porec is a privately owned hotel located beside the Marina
                in the heart of Porec, one of the most beautiful coastal towns
                on the Istrian peninsula. We have been welcoming guests
                year-round since 1997.
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                Our rooms offer all the comforts you need: air conditioning,
                private balcony, satellite TV, minibar, in-room safe, free
                Wi-Fi, and a modern shower. Whether you are here for a family
                vacation, a romantic getaway, or business travel, we make you
                feel at home.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                  Beside the Marina
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                  Year-round
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                  Family owned
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/hotel-site/hotel/exterior-1.jpg"
                alt="Hotel Porec from the front"
                className="aspect-[3/4] w-full rounded-xl object-cover shadow-md"
                loading="lazy"
              />
              <img
                src="/hotel-site/apartment/apt-06.jpg"
                alt="Apartment 401 interior"
                className="mt-8 aspect-[3/4] w-full rounded-xl object-cover shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  MOSAIC — "Ples prirode"                                     */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-20 sm:py-28">
        {/* Subtle mosaic art background */}
        <div className="absolute inset-0 opacity-[0.06]">
          <img
            src="/mozaik_gp1.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
                Art &amp; Heritage
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                &ldquo;Ples prirode&rdquo;
              </h2>
              <p className="mb-1 text-sm font-medium text-blue-300">
                Dance of Nature &mdash; by Eugen Varzić
              </p>
              <p className="mb-5 leading-relaxed text-gray-300">
                Adorning the facade of Hotel Porec, this monumental mosaic was
                realized by the renowned Travisanutto Mosaics workshop from
                Spilimberga, Italy &mdash; commissioned by the Dugandžić family,
                owners of the hotel.
              </p>
              <p className="mb-5 leading-relaxed text-gray-300">
                The composition depicts movement and the natural circle of life,
                activated by three elements: wind, water, and sunlight, rendered
                in the distinctive colors of the Istrian climate.
              </p>
              <p className="mb-6 leading-relaxed text-gray-400">
                This work reestablishes monumental mosaic art in public urban
                spaces after decades of absence, positioning Porec on the global
                map of mosaic heritage &mdash; a tradition spanning from the 6th
                through the 20th century.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-medium text-blue-300">
                  Mosaic Art
                </span>
                <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-medium text-blue-300">
                  Travisanutto Workshop
                </span>
                <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-medium text-blue-300">
                  Istrian Heritage
                </span>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 overflow-hidden rounded-xl">
                <img
                  src="/mozaik/mozaik-section/655025040_18218911303315500_4451419922359182140_n.jpg"
                  alt="Hotel Porec mosaic — full facade view"
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/mozaik/mozaik-section/655244105_18115779043641697_9049057771106596511_n.jpg"
                  alt="Mosaic detail — artistic perspective through trees"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/mozaik/mozaik-section/655754288_18074886758176866_8702145790916969600_n.jpg"
                  alt="Mosaic — Dance of Nature by Eugen Varzić"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Artist quote */}
          <blockquote className="mx-auto mt-14 max-w-3xl border-l-2 border-blue-400/40 pl-6 text-center italic text-gray-400 sm:border-l-0 sm:pl-0">
            <p className="text-lg leading-relaxed sm:text-xl">
              &ldquo;This demonstrates the need for artists and craftsmen to
              unite, bringing renewed strength to collaboration that enriches our
              culture and enhances the visual identity of Porec&rsquo;s
              seafront.&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium not-italic text-blue-300">
              &mdash; Eugen Varzić, Artist
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ROOMS                                                       */}
      {/* ============================================================ */}
      <section
        id="rooms"
        className="bg-gradient-to-b from-blue-50/50 to-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Accommodation
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Rooms &amp; Suites
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              From our premium Apartment 401 with whirlpool to comfortable
              standard rooms, every space is designed for relaxation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.map((room) => (
              <article
                key={room.name}
                className="group overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {room.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  RESTAURANT                                                  */}
      {/* ============================================================ */}
      <section id="restaurant" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/hotel-site/restaurant/restaurant-1.jpg"
                alt="Restaurant dining area"
                className="aspect-square w-full rounded-xl object-cover shadow-md"
                loading="lazy"
              />
              <img
                src="/hotel-site/restaurant/restaurant-2.jpg"
                alt="Restaurant breakfast"
                className="mt-6 aspect-square w-full rounded-xl object-cover shadow-md"
                loading="lazy"
              />
              <img
                src="/hotel-site/restaurant/restaurant-3.jpg"
                alt="Restaurant terrace"
                className="aspect-square w-full rounded-xl object-cover shadow-md"
                loading="lazy"
              />
              <img
                src="/hotel-site/restaurant/restaurant-4.jpg"
                alt="Restaurant food"
                className="mt-6 aspect-square w-full rounded-xl object-cover shadow-md"
                loading="lazy"
              />
            </div>

            {/* Text content */}
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Dining
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Restaurant
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                Start every morning with a generous breakfast buffet featuring
                local and international selections. Fresh bread, Istrian cheeses
                and cold cuts, seasonal fruits, pastries, and more.
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                For lunch and dinner, our flexible menu offers Mediterranean and
                Croatian cuisine prepared with fresh, locally sourced
                ingredients. Enjoy your meal on our terrace with views toward the
                sea.
              </p>
              <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
                  Dining hours
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Breakfast buffet</span>
                    <span className="font-medium text-gray-900">
                      07:00 &ndash; 10:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lunch</span>
                    <span className="font-medium text-gray-900">
                      12:00 &ndash; 15:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dinner</span>
                    <span className="font-medium text-gray-900">
                      18:00 &ndash; 22:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  AMENITIES                                                   */}
      {/* ============================================================ */}
      <section
        id="amenities"
        className="bg-gradient-to-b from-blue-50/50 to-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Comfort
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hotel Amenities
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Every room includes these amenities to make your stay comfortable
              and hassle-free.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity.title}
                className="rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  {amenity.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  {amenity.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CONTACT / CTA                                               */}
      {/* ============================================================ */}
      <section id="contact" className="relative overflow-hidden bg-white py-20 sm:py-24">
        {/* Subtle background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{ backgroundImage: "url(/zemlja_gp_copy.webp)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/80 to-blue-100" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Get in Touch
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Book Your Stay
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Ready to experience Porec? Contact us directly for the best rates
              and availability.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <div className="rounded-xl border border-gray-200/80 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Phone</h3>
              <a
                href="tel:+38552451811"
                className="text-blue-600 no-underline hover:text-blue-700"
              >
                +385 52 451 811
              </a>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-gray-200/80 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Email</h3>
              <a
                href="mailto:info@hotelporec.com"
                className="text-blue-600 no-underline hover:text-blue-700"
              >
                info@hotelporec.com
              </a>
            </div>

            {/* Address */}
            <div className="rounded-xl border border-gray-200/80 bg-white p-6 text-center shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Address</h3>
              <p className="text-sm text-gray-600">
                Rade Koncara 1
                <br />
                52440 Porec, Croatia
              </p>
            </div>
          </div>

          {/* Map embed placeholder with CTA */}
          <div className="mt-10 text-center">
            <a
              href="mailto:info@hotelporec.com?subject=Reservation%20Inquiry"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white no-underline shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Send a Reservation Inquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
