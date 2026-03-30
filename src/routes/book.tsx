import { useState } from "react"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/book")({ component: BookPage })

const ROOM_TYPES = [
  { value: "apartment-401", label: "Apartment 401 (Whirlpool)" },
  { value: "superior", label: "Superior Room" },
  { value: "family", label: "Family Room" },
  { value: "triple", label: "Triple Room" },
  { value: "standard", label: "Standard Room" },
  { value: "flex", label: "Flex Room" },
  { value: "no-preference", label: "No preference" },
] as const

function BookPage() {
  const today = new Date().toISOString().split("T")[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0]

  const [form, setForm] = useState({
    checkIn: today,
    checkOut: tomorrow,
    adults: 2,
    children: 0,
    roomType: "no-preference",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requests: "",
  })

  const set = (key: keyof typeof form, value: string | number) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const nights = Math.max(
    1,
    Math.ceil(
      (new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime()) /
        86400000
    )
  )

  const roomLabel =
    ROOM_TYPES.find((r) => r.value === form.roomType)?.label ?? form.roomType

  const subject = `Reservation Inquiry — ${form.checkIn} to ${form.checkOut}`
  const body = [
    `Name: ${form.firstName} ${form.lastName}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || "N/A"}`,
    "",
    `Check-in: ${form.checkIn}`,
    `Check-out: ${form.checkOut} (${nights} night${nights > 1 ? "s" : ""})`,
    `Guests: ${form.adults} adult${form.adults > 1 ? "s" : ""}${form.children > 0 ? `, ${form.children} child${form.children > 1 ? "ren" : ""}` : ""}`,
    `Room preference: ${roomLabel}`,
    "",
    form.requests ? `Special requests:\n${form.requests}` : "",
  ]
    .filter(Boolean)
    .join("\n")

  const mailtoUrl = `mailto:info@hotelporec.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  const isValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.checkIn &&
    form.checkOut &&
    form.checkOut > form.checkIn

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 sm:py-20">
      {/* Background mosaic artwork */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/mozaik_gp1.png"
          alt=""
          className="absolute bottom-0 right-0 h-[60%] w-auto object-contain opacity-[0.08]"
        />
      </div>
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <a href="/" className="mb-6 inline-block">
            <img
              src="/LOGO1-hires.png"
              alt="Hotel Porec"
              className="mx-auto h-16 w-auto"
            />
          </a>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Book Your Stay
          </h1>
          <p className="text-gray-500">
            Best price guaranteed &mdash; book directly and save up to 15%.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {/* Dates */}
          <fieldset className="mb-6">
            <legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Stay dates
            </legend>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Check-in
                </span>
                <input
                  type="date"
                  value={form.checkIn}
                  min={today}
                  onChange={(e) => set("checkIn", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Check-out
                </span>
                <input
                  type="date"
                  value={form.checkOut}
                  min={form.checkIn || today}
                  onChange={(e) => set("checkOut", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </label>
            </div>
            {form.checkIn && form.checkOut && form.checkOut > form.checkIn && (
              <p className="mt-2 text-sm text-blue-600">
                {nights} night{nights > 1 ? "s" : ""}
              </p>
            )}
          </fieldset>

          {/* Guests & Room */}
          <fieldset className="mb-6">
            <legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Guests &amp; Room
            </legend>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Adults
                </span>
                <select
                  value={form.adults}
                  onChange={(e) => set("adults", Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Children
                </span>
                <select
                  value={form.children}
                  onChange={(e) => set("children", Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              <label className="col-span-2 block sm:col-span-1">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Room type
                </span>
                <select
                  value={form.roomType}
                  onChange={(e) => set("roomType", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                >
                  {ROOM_TYPES.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </fieldset>

          {/* Contact info */}
          <fieldset className="mb-6">
            <legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Your details
            </legend>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  First name *
                </span>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Last name *
                </span>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </label>
              <label className="col-span-2 block sm:col-span-1">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Email *
                </span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </label>
              <label className="col-span-2 block sm:col-span-1">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Phone
                </span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </label>
            </div>
          </fieldset>

          {/* Special requests */}
          <fieldset className="mb-8">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">
                Special requests
              </span>
              <textarea
                value={form.requests}
                onChange={(e) => set("requests", e.target.value)}
                rows={3}
                placeholder="Early check-in, extra bed, dietary needs..."
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </label>
          </fieldset>

          {/* Submit */}
          <a
            href={isValid ? mailtoUrl : undefined}
            onClick={(e) => {
              if (!isValid) e.preventDefault()
            }}
            className={`block min-h-[44px] w-full rounded-lg px-8 py-3.5 text-center text-base font-semibold no-underline shadow-lg transition-all ${
              isValid
                ? "bg-blue-600 text-white shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl"
                : "cursor-not-allowed bg-gray-300 text-gray-500 shadow-none"
            }`}
          >
            Send Booking Request
          </a>
          <p className="mt-3 text-center text-xs text-gray-400">
            Opens your email client. We reply within 2 hours during business
            hours.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-sm text-blue-600 no-underline hover:text-blue-700"
          >
            &larr; Back to Hotel Porec
          </a>
        </div>
      </div>
    </main>
  )
}
