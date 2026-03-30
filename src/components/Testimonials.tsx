import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const REVIEWS = [
  {
    text: "Lovely hotel. Perfect location by beach and town. Everything works — fridge cold, aircon great, shower great. Nice balcony and everything you could want for breakfast.",
    author: "P2HAM",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 9,
  },
  {
    text: "Amazing little place with great service. Central location — closest you get to the center of the town. Hotel is GORGEOUS. Polite receptionists and cleaning crew.",
    author: "SarahLee C.",
    country: "Canada",
    flag: "🇨🇦",
    rating: 10,
  },
  {
    text: "The rooms and bathrooms are very clean. Our room had a small fridge. The balcony was big and spacious, which gave us a spectacular view. There are restaurants near the hotel.",
    author: "Saf",
    country: "Belgium",
    flag: "🇧🇪",
    rating: 10,
  },
  {
    text: "Super clean, well kept and organized, we would rebook on our next trip to Porec. Comfortable room and a good breakfast. Excellent advice on places to visit.",
    author: "a_Julian",
    country: "Canada",
    flag: "🇨🇦",
    rating: 9,
  },
  {
    text: "Entire staff was extremely polite and helpful. The room and all hotel are very clean. Breakfast was very good, so we are going back someday for sure.",
    author: "Alan Ford",
    country: "Croatia",
    flag: "🇭🇷",
    rating: 10,
  },
  {
    text: "Great location, close to everything. Breakfast excellent with so many choices between hot food and cold platters, fruits. Staff very friendly and helpful.",
    author: "DeLoew",
    country: "Germany",
    flag: "🇩🇪",
    rating: 9,
  },
  {
    text: "It's a good hotel and place to break down and enjoy yourself. Closer to everywhere, finally you don't need to drive. Breakfast is good, all what you need to start your day.",
    author: "Mo.Osman",
    country: "Hungary",
    flag: "🇭🇺",
    rating: 10,
  },
  {
    text: "Excellent location, walking distance from the Centre of Porec and all its restaurants and sights. Convenient parking, friendly staff, and a very good breakfast.",
    author: "Verified Guest",
    country: "Booking.com",
    flag: "🏨",
    rating: 9,
  },
] as const

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 10`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < Math.round(rating / 2) ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!trackRef.current || !sectionRef.current) return

    const track = trackRef.current
    const totalWidth = track.scrollWidth - track.parentElement!.clientWidth

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/60 to-blue-100 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Guest Reviews
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Guests Say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">8.5/10</div>
              <p className="text-xs text-gray-500">2,190+ reviews</p>
            </div>
            <div className="flex h-12 items-center rounded-lg bg-blue-600 px-3">
              <span className="text-lg font-bold text-white">8.5</span>
            </div>
          </div>
        </div>
        <p className="mb-10 max-w-xl text-gray-600">
          Rated &ldquo;Very Good&rdquo; on Booking.com. Location scored 9.6 —
          the highest among hotels in Porec.
        </p>
      </div>

      {/* Horizontal scroll track */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-5 pl-[max(1rem,calc((100vw-72rem)/2+1rem))]"
        >
          {REVIEWS.map((review, i) => (
            <article
              key={i}
              className="w-[320px] shrink-0 rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:w-[360px]"
            >
              <Stars rating={review.rating} />
              <blockquote className="mt-4 text-sm leading-relaxed text-gray-700">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-lg">
                  {review.flag}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {review.author}
                  </p>
                  <p className="text-xs text-gray-500">{review.country}</p>
                </div>
                <span className="ml-auto rounded-md bg-blue-600 px-2 py-0.5 text-xs font-bold text-white">
                  {review.rating}/10
                </span>
              </div>
            </article>
          ))}
          {/* Spacer for scroll end */}
          <div className="w-8 shrink-0" />
        </div>
      </div>
    </section>
  )
}
