import { useEffect, useRef, useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Testimonials from "@/components/Testimonials"

gsap.registerPlugin(ScrollTrigger)

export const Route = createFileRoute("/")({ component: HomePage })

/* ------------------------------------------------------------------ */
/*  Room keys (for i18n lookup)                                       */
/* ------------------------------------------------------------------ */

const ROOM_KEYS = [
  { key: "apartment401", image: "/hotel-site/apartment/apt-01.jpg" },
  { key: "superior", image: "/hotel-site/rooms/superior-1.jpg" },
  { key: "family", image: "/hotel-site/rooms/family-2.jpg" },
  { key: "triple", image: "/hotel-site/rooms/triple-1.jpg" },
  { key: "standard", image: "/hotel-site/rooms/standard-1.jpg" },
  { key: "flex", image: "/hotel-site/rooms/flex-1.jpg" },
] as const

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

function HomePage() {
  const { t } = useTranslation()
  const mainRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const heroImagesRef = useRef<HTMLDivElement>(null)
  const heroBgRef = useRef<HTMLImageElement>(null)
  const exteriorRef = useRef<HTMLDivElement>(null)
  const aboutTextRef = useRef<HTMLDivElement>(null)
  const aboutImagesRef = useRef<HTMLDivElement>(null)
  const mosaicTextRef = useRef<HTMLDivElement>(null)
  const mosaicImagesRef = useRef<HTMLDivElement>(null)
  const mosaicQuoteRef = useRef<HTMLQuoteElement>(null)
  const roomsHeaderRef = useRef<HTMLDivElement>(null)
  const roomsGridRef = useRef<HTMLDivElement>(null)
  const restaurantImagesRef = useRef<HTMLDivElement>(null)
  const restaurantTextRef = useRef<HTMLDivElement>(null)
  const contactHeaderRef = useRef<HTMLDivElement>(null)
  const contactCardsRef = useRef<HTMLDivElement>(null)
  const contactCtaRef = useRef<HTMLDivElement>(null)
  const [showBookBtn, setShowBookBtn] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      gsap.set("[class*='opacity-0']", { opacity: 1 })
      return
    }

    const ctx = gsap.context(() => {
      const ease = "power3.out"
      const softEase = "power2.out"

      /* Hero — staggered entrance */
      if (heroRef.current) {
        const children = heroRef.current.children
        const tl = gsap.timeline({ defaults: { ease } })
        tl.fromTo(children[0], { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1 }, 0.2)
        tl.fromTo(children[1], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
        tl.fromTo(children[2], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.7)
        tl.fromTo(children[3], { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.7 }, 0.9)
      }

      /* Hero images — staggered reveal */
      if (heroImagesRef.current) {
        const imgs = heroImagesRef.current.querySelectorAll(".hero-img")
        gsap.fromTo(imgs, { opacity: 0, scale: 0.92, y: 30 }, {
          opacity: 1, scale: 1, y: 0, duration: 0.9, stagger: 0.15, ease,
          delay: 0.5,
        })
      }

      /* Hero background parallax */
      if (heroBgRef.current) {
        gsap.to(heroBgRef.current, {
          y: -60,
          ease: "none",
          scrollTrigger: { trigger: heroBgRef.current, start: "top top", end: "bottom top", scrub: 1 },
        })
      }

      /* Floating Book Now — show after 100vh */
      ScrollTrigger.create({
        trigger: mainRef.current,
        start: "100vh top",
        onEnter: () => setShowBookBtn(true),
        onLeaveBack: () => setShowBookBtn(false),
      })

      /* Exterior — slide up with rotation + stagger */
      if (exteriorRef.current) {
        gsap.fromTo(exteriorRef.current.children, { opacity: 0, y: 60, rotation: 2 }, {
          opacity: 1, y: 0, rotation: 0, duration: 0.9, stagger: 0.15, ease,
          scrollTrigger: { trigger: exteriorRef.current, start: "top 85%", toggleActions: "play none none none" },
        })
      }

      /* About — text from left, images from right */
      if (aboutTextRef.current) {
        gsap.fromTo(aboutTextRef.current.children, { opacity: 0, x: -50 }, {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.12, ease,
          scrollTrigger: { trigger: aboutTextRef.current, start: "top 80%", toggleActions: "play none none none" },
        })
      }
      if (aboutImagesRef.current) {
        gsap.fromTo(aboutImagesRef.current.children, { opacity: 0, x: 60, y: 30 }, {
          opacity: 1, x: 0, y: (i: number) => (i === 1 ? 32 : 0), duration: 1, stagger: 0.2, ease,
          scrollTrigger: { trigger: aboutImagesRef.current, start: "top 80%", toggleActions: "play none none none" },
        })
      }

      /* Mosaic — text stagger + clip-path wipe + quote */
      if (mosaicTextRef.current) {
        gsap.fromTo(mosaicTextRef.current.children, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease,
          scrollTrigger: { trigger: mosaicTextRef.current, start: "top 80%", toggleActions: "play none none none" },
        })
      }
      if (mosaicImagesRef.current) {
        const imgs = mosaicImagesRef.current.querySelectorAll(".mosaic-clip-img")
        gsap.fromTo(imgs, { clipPath: "inset(0 100% 0 0)" }, {
          clipPath: "inset(0 0% 0 0)", duration: 1.2, stagger: 0.2, ease: softEase,
          scrollTrigger: { trigger: mosaicImagesRef.current, start: "top 75%", toggleActions: "play none none none" },
        })
      }
      if (mosaicQuoteRef.current) {
        const words = mosaicQuoteRef.current.querySelectorAll(".quote-word")
        gsap.fromTo(words, { opacity: 0.1 }, {
          opacity: 1, duration: 0.05, stagger: 0.04, ease: "none",
          scrollTrigger: { trigger: mosaicQuoteRef.current, start: "top 85%", toggleActions: "play none none none" },
        })
        const footer = mosaicQuoteRef.current.querySelector("footer")
        if (footer) {
          gsap.fromTo(footer, { opacity: 0, y: 10 }, {
            opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease,
            scrollTrigger: { trigger: mosaicQuoteRef.current, start: "top 85%", toggleActions: "play none none none" },
          })
        }
      }

      /* Rooms — header + cascading fade-up */
      if (roomsHeaderRef.current) {
        gsap.fromTo(roomsHeaderRef.current.children, { opacity: 0, y: 25 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease,
          scrollTrigger: { trigger: roomsHeaderRef.current, start: "top 85%", toggleActions: "play none none none" },
        })
      }
      if (roomsGridRef.current) {
        gsap.fromTo(roomsGridRef.current.children, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.6, stagger: { each: 0.1, from: "start" }, ease: "back.out(1.2)",
          scrollTrigger: { trigger: roomsGridRef.current, start: "top 85%", toggleActions: "play none none none" },
        })
      }

      /* Restaurant — masonry stagger + text from right */
      if (restaurantImagesRef.current) {
        const imgs = restaurantImagesRef.current.children
        const directions = [{ x: -40, y: 30 }, { x: 40, y: 50 }, { x: -30, y: 40 }, { x: 30, y: 60 }]
        Array.from(imgs).forEach((img, i) => {
          const d = directions[i] ?? { x: 0, y: 30 }
          gsap.fromTo(img, { opacity: 0, x: d.x, y: d.y }, {
            opacity: 1, x: 0, y: i % 2 === 1 ? 24 : 0, duration: 0.9, delay: i * 0.12, ease,
            scrollTrigger: { trigger: restaurantImagesRef.current, start: "top 80%", toggleActions: "play none none none" },
          })
        })
      }
      if (restaurantTextRef.current) {
        gsap.fromTo(restaurantTextRef.current.children, { opacity: 0, x: 50 }, {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.12, ease,
          scrollTrigger: { trigger: restaurantTextRef.current, start: "top 80%", toggleActions: "play none none none" },
        })
      }

      /* Contact — slide up + stagger */
      if (contactHeaderRef.current) {
        gsap.fromTo(contactHeaderRef.current.children, { opacity: 0, y: 25 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease,
          scrollTrigger: { trigger: contactHeaderRef.current, start: "top 85%", toggleActions: "play none none none" },
        })
      }
      if (contactCardsRef.current) {
        gsap.fromTo(contactCardsRef.current.children, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease,
          scrollTrigger: { trigger: contactCardsRef.current, start: "top 85%", toggleActions: "play none none none" },
        })
      }
      if (contactCtaRef.current) {
        gsap.fromTo(contactCtaRef.current, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.7, ease,
          scrollTrigger: { trigger: contactCtaRef.current, start: "top 90%", toggleActions: "play none none none" },
        })
      }
    }, mainRef)

    return () => ctx.revert()
  }, [])

  const quoteText = t("mosaic.quote")

  return (
    <main ref={mainRef}>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        {/* Background — mosaic artwork */}
        <div className="absolute inset-0">
          <img
            ref={heroBgRef}
            src="/mozaik_gp1.webp"
            alt=""
            className="absolute bottom-0 right-0 h-[70%] w-auto object-contain opacity-[0.12] will-change-transform sm:opacity-[0.15]"
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-transparent to-blue-50/90" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          {/* Left — text content */}
          <div ref={heroRef} className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src="/LOGO1-hires.png"
              alt="Hotel Porec logo"
              className="mb-8 h-20 w-auto opacity-0 sm:h-28 lg:h-36"
            />
            <p className="mb-4 text-base font-medium tracking-wide text-blue-600/80 opacity-0 sm:text-lg">
              {t("hero.tagline")}
            </p>
            <p className="mb-10 max-w-lg text-base leading-relaxed text-gray-500 opacity-0 sm:text-lg">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 lg:justify-start">
              <a
                href="#rooms"
                className="min-h-[44px] rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white no-underline shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
              >
                {t("hero.exploreRooms")}
              </a>
              <a
                href="/book"
                className="min-h-[44px] rounded-lg border border-blue-200 bg-white/80 px-8 py-3.5 text-base font-semibold text-blue-600 no-underline backdrop-blur-sm transition-all hover:border-blue-300 hover:bg-white"
              >
                {t("hero.bookYourStay")}
              </a>
            </div>
          </div>

          {/* Mobile — single hero image */}
          <div className="lg:hidden">
            <div className="hero-img overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/hotel-site/best-images/exterior-3.jpg"
                alt="Hotel Porec exterior with garden"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          {/* Desktop — image mosaic */}
          <div ref={heroImagesRef} className="hidden lg:block">
            <div className="grid grid-cols-2 gap-3" style={{ height: "min(80vh, 700px)" }}>
              {/* Left column — stacked */}
              <div className="grid grid-rows-3 gap-3">
                <div className="hero-img row-span-2 overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/hotel-site/best-images/apt-01.jpg"
                    alt="Rooftop whirlpool overlooking Porec at night"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="hero-img overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/hotel-site/best-images/apt-13.jpg"
                    alt="Modern hotel room with panoramic view"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              {/* Right column — stacked */}
              <div className="grid grid-rows-3 gap-3">
                <div className="hero-img overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/hotel-site/best-images/655244105_18115779043641697_9049057771106596511_n.jpg"
                    alt="Mosaic artwork on hotel facade"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="hero-img row-span-2 overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/hotel-site/best-images/exterior-3.jpg"
                    alt="Hotel Porec exterior with garden"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs font-medium uppercase tracking-widest">{t("hero.discover")}</span>
            <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ---- Hotel exterior showcase ---- */}
      <section className="relative -mt-1 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div ref={exteriorRef} className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
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
            <div ref={aboutTextRef}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                {t("about.label")}
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t("about.title")}
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                {t("about.description1")}
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                {t("about.description2")}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                  {t("about.tagMarina")}
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                  {t("about.tagYearRound")}
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                  {t("about.tagFamilyOwned")}
                </span>
              </div>
            </div>
            <div ref={aboutImagesRef} className="grid grid-cols-2 gap-4">
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
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white py-20 sm:py-28">
        {/* Subtle mosaic art background */}
        <div className="absolute inset-0 opacity-[0.06]">
          <img
            src="/mozaik_gp1.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div ref={mosaicTextRef}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                {t("mosaic.label")}
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t("mosaic.title")}
              </h2>
              <p className="mb-4 text-sm font-medium text-blue-500">
                {t("mosaic.subtitle")}
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                {t("mosaic.description")}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                  {t("mosaic.tagMosaic")}
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                  {t("mosaic.tagWorkshop")}
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                  {t("mosaic.tagHeritage")}
                </span>
              </div>
            </div>

            {/* Images */}
            <div ref={mosaicImagesRef} className="grid grid-cols-2 gap-3">
              <div className="mosaic-clip-img col-span-2 overflow-hidden rounded-xl">
                <img
                  src="/mozaik/mozaik-section/655025040_18218911303315500_4451419922359182140_n.jpg"
                  alt="Hotel Porec mosaic — full facade view"
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mosaic-clip-img overflow-hidden rounded-xl">
                <img
                  src="/mozaik/mozaik-section/655244105_18115779043641697_9049057771106596511_n.jpg"
                  alt="Mosaic detail — artistic perspective through trees"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mosaic-clip-img overflow-hidden rounded-xl">
                <img
                  src="/mozaik/mozaik-section/655754288_18074886758176866_8702145790916969600_n.jpg"
                  alt="Mosaic — Dance of Nature by Eugen Varzic"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Artist quote — word-by-word reveal */}
          <blockquote ref={mosaicQuoteRef} className="mx-auto mt-14 max-w-3xl border-l-2 border-blue-300/40 pl-6 text-left italic text-gray-500 sm:border-l-0 sm:pl-0 sm:text-center">
            <p className="text-lg leading-relaxed sm:text-xl">
              {quoteText.split(" ").map((word, i) => (
                <span key={i} className="quote-word inline-block opacity-[0.1]">
                  {word}&nbsp;
                </span>
              ))}
            </p>
            <footer className="mt-4 text-sm font-medium not-italic text-blue-600 opacity-0">
              &mdash; {t("mosaic.quoteAuthor")}
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
          <div ref={roomsHeaderRef} className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              {t("rooms.label")}
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t("rooms.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              {t("rooms.description")}
            </p>
          </div>

          <div ref={roomsGridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROOM_KEYS.map((room) => (
              <article
                key={room.key}
                className="group overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={t(`rooms.${room.key}.name`)}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {t(`rooms.${room.key}.name`)}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {t(`rooms.${room.key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(t(`rooms.${room.key}.features`, { returnObjects: true }) as string[]).map((feature) => (
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
            <div ref={restaurantImagesRef} className="grid grid-cols-2 gap-4">
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
            <div ref={restaurantTextRef}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                {t("restaurant.label")}
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t("restaurant.title")}
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                {t("restaurant.description1")}
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                {t("restaurant.description2")}
              </p>
              <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
                  {t("restaurant.hoursTitle")}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>{t("restaurant.breakfast")}</span>
                    <span className="font-medium text-gray-900">
                      {t("restaurant.breakfastTime")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("restaurant.lunch")}</span>
                    <span className="font-medium text-gray-900">
                      {t("restaurant.lunchTime")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("restaurant.dinner")}</span>
                    <span className="font-medium text-gray-900">
                      {t("restaurant.dinnerTime")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/*  TESTIMONIALS                                                */}
      {/* ============================================================ */}
      <Testimonials />

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
          <div ref={contactHeaderRef} className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              {t("contact.label")}
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t("contact.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              {t("contact.description")}
            </p>
          </div>

          {/* Best price highlight */}
          <div className="mx-auto mb-10 max-w-xl overflow-hidden rounded-2xl border border-blue-200 bg-white p-8 text-center shadow-lg">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t("contact.bestPriceGuarantee")}
            </div>
            <p className="mb-2 text-3xl font-bold text-gray-900">
              {t("contact.saveUpTo")}
            </p>
            <p className="mb-6 text-sm leading-relaxed text-gray-500">
              {t("contact.comparedTo")}
              <br />
              {t("contact.bookDirectly")}
            </p>
            <a
              href="/book"
              className="inline-block min-h-[44px] rounded-xl bg-blue-600 px-10 py-4 text-base font-semibold text-white no-underline shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
            >
              {t("contact.bookNowBestPrice")}
            </a>
          </div>

          <div ref={contactCardsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <h3 className="mb-2 font-semibold text-gray-900">{t("contact.phone")}</h3>
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
              <h3 className="mb-2 font-semibold text-gray-900">{t("contact.email")}</h3>
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
              <h3 className="mb-2 font-semibold text-gray-900">{t("contact.address")}</h3>
              <p className="text-sm text-gray-600">
                {t("contact.addressLine1")}
                <br />
                {t("contact.addressLine2")}
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div ref={contactCtaRef} className="mt-10 overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="Hotel Porec location"
              src="https://maps.google.com/maps?q=Hotel+Porec,+Rade+Koncara+1,+52440+Porec,+Croatia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Floating Book Now FAB */}
      <a
        href="/book"
        className={`book-now-fab${showBookBtn ? " book-now-fab--visible" : ""}`}
      >
        {t("header.bookNow")}
      </a>
    </main>
  )
}
