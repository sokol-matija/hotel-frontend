import { useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

export const Route = createFileRoute("/book")({ component: BookPage })

const ROOM_TYPE_KEYS = [
  "apartment-401",
  "superior",
  "family",
  "triple",
  "standard",
  "flex",
  "no-preference",
] as const

function BookPage() {
  const { t } = useTranslation()
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

  const roomLabel = t(`booking.roomTypes.${form.roomType}`)

  const subject = t("booking.emailSubject", {
    checkIn: form.checkIn,
    checkOut: form.checkOut,
  })
  const body = [
    t("booking.emailBodyName", {
      name: `${form.firstName} ${form.lastName}`,
    }),
    t("booking.emailBodyEmail", { email: form.email }),
    t("booking.emailBodyPhone", {
      phone: form.phone || t("booking.na"),
    }),
    "",
    t("booking.emailBodyCheckIn", { checkIn: form.checkIn }),
    t("booking.emailBodyCheckOut", {
      checkOut: form.checkOut,
      nights: t("booking.nightCount", { count: nights }),
    }),
    t("booking.emailBodyGuests", {
      guests: `${form.adults} ${form.adults > 1 ? "adults" : "adult"}${form.children > 0 ? `, ${form.children} ${form.children > 1 ? "children" : "child"}` : ""}`,
    }),
    t("booking.emailBodyRoom", { room: roomLabel }),
    "",
    form.requests
      ? t("booking.emailBodyRequests", { requests: form.requests })
      : "",
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
            {t("booking.title")}
          </h1>
          <p className="text-gray-500">{t("booking.subtitle")}</p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {/* Dates */}
          <fieldset className="mb-6">
            <legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              {t("booking.stayDates")}
            </legend>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  {t("booking.checkIn")}
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
                  {t("booking.checkOut")}
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
                {t("booking.nightCount", { count: nights })}
              </p>
            )}
          </fieldset>

          {/* Guests & Room */}
          <fieldset className="mb-6">
            <legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              {t("booking.guestsAndRoom")}
            </legend>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  {t("booking.adults")}
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
                  {t("booking.children")}
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
                  {t("booking.roomType")}
                </span>
                <select
                  value={form.roomType}
                  onChange={(e) => set("roomType", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                >
                  {ROOM_TYPE_KEYS.map((key) => (
                    <option key={key} value={key}>
                      {t(`booking.roomTypes.${key}`)}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </fieldset>

          {/* Contact info */}
          <fieldset className="mb-6">
            <legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              {t("booking.yourDetails")}
            </legend>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  {t("booking.firstName")} {t("common.required")}
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
                  {t("booking.lastName")} {t("common.required")}
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
                  {t("booking.emailLabel")} {t("common.required")}
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
                  {t("booking.phoneLabel")}
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
                {t("booking.specialRequests")}
              </span>
              <textarea
                value={form.requests}
                onChange={(e) => set("requests", e.target.value)}
                rows={3}
                placeholder={t("booking.specialRequestsPlaceholder")}
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
            {t("booking.sendBookingRequest")}
          </a>
          <p className="mt-3 text-center text-xs text-gray-400">
            {t("booking.emailNote")}
          </p>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-sm text-blue-600 no-underline hover:text-blue-700"
          >
            {t("booking.backToHotel")}
          </a>
        </div>
      </div>
    </main>
  )
}
