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

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Hotel Porec",
      },
      {
        name: "description",
        content:
          "Hotel Porec - Privately owned hotel beside the Marina in Porec, Croatia. Since 1997. Rooms, restaurant, and year-round hospitality.",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href: appCss,
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
