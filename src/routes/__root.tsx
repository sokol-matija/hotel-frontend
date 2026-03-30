import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"

import TanStackQueryProvider from "../integrations/tanstack-query/root-provider"

import appCss from "../styles.css?url"

import type { QueryClient } from "@tanstack/react-query"

interface MyRouterContext {
  queryClient: QueryClient
}

const SITE_DESCRIPTION =
  "Hotel Porec - Privately owned hotel beside the Marina in Porec, Croatia. Since 1997. Rooms, restaurant, and year-round hospitality."
const SITE_URL = "https://hotel-porec-web.vercel.app"

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hotel Porec — Porec, Croatia | Since 1997" },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "theme-color", content: "#2563eb" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Hotel Porec — Porec, Croatia" },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      {
        property: "og:image",
        content: `${SITE_URL}/hotel-site/best-images/exterior-3.jpg`,
      },
      { property: "og:locale", content: "en_GB" },
      { property: "og:site_name", content: "Hotel Porec" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hotel Porec — Porec, Croatia" },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      {
        name: "twitter:image",
        content: `${SITE_URL}/hotel-site/best-images/exterior-3.jpg`,
      },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "canonical", href: SITE_URL },
      { rel: "manifest", href: "/manifest.json" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "dns-prefetch",
        href: "https://maps.google.com",
      },
      {
        rel: "preload",
        as: "image",
        href: "/hotel-site/best-images/exterior-3.jpg",
      },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Hotel Porec",
          description: SITE_DESCRIPTION,
          url: SITE_URL,
          telephone: "+385-52-451-811",
          email: "info@hotelporec.com",
          image: `${SITE_URL}/hotel-site/best-images/exterior-3.jpg`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rade Koncara 1",
            addressLocality: "Porec",
            postalCode: "52440",
            addressCountry: "HR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 45.2271,
            longitude: 13.5947,
          },
          starRating: { "@type": "Rating", ratingValue: "3" },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "8.5",
            bestRating: "10",
            reviewCount: "2190",
          },
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
            { "@type": "LocationFeatureSpecification", name: "Free Parking" },
            { "@type": "LocationFeatureSpecification", name: "Restaurant" },
            { "@type": "LocationFeatureSpecification", name: "Air Conditioning" },
            { "@type": "LocationFeatureSpecification", name: "Balcony" },
          ],
          checkinTime: "14:00",
          checkoutTime: "10:00",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        <TanStackQueryProvider>
          <Header />
          {children}
          <Footer />
        </TanStackQueryProvider>
        <Scripts />
      </body>
    </html>
  )
}
