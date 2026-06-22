import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = "https://rocketly.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  title: "Rocketly | Сайты, Telegram-боты и автоматизация бизнеса",
  description:
    "Разрабатываем сайты, Telegram-ботов и решения для автоматизации бизнеса. Запуск проектов от 2 до 5 дней. Работаем по всей России.",
  keywords: [
    "разработка Telegram-ботов",
    "Telegram-бот под ключ",
    "создание сайта визитки",
    "разработка сайта для бизнеса",
    "автоматизация бизнеса",
    "веб-разработка",
    "Rocketly",
    "заказать Telegram-бота",
    "заказать сайт",
  ],
  openGraph: {
    title: "Rocketly | Сайты, Telegram-боты и автоматизация бизнеса",
    description:
      "Разрабатываем сайты, Telegram-ботов и решения для автоматизации бизнеса. Запуск проектов от 2 до 5 дней. Работаем по всей России.",
    type: "website",
    locale: "ru_RU",
    siteName: "Rocketly",
    url: "https://rocketly.dev",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rocketly | Сайты, Telegram-боты и автоматизация бизнеса",
    description:
      "Разрабатываем сайты, Telegram-ботов и решения для автоматизации бизнеса. Запуск проектов от 2 до 5 дней. Работаем по всей России.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Rocketly",
                  url: siteUrl,
                  logo: `${siteUrl}/logo-horizontal.png`,
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "sales",
                    availableLanguage: ["Russian"],
                  },
                  sameAs: ["https://t.me/manager_rocketly"],
                },
                {
                  "@type": "WebSite",
                  name: "Rocketly",
                  url: siteUrl,
                  description:
                    "Разрабатываем сайты, Telegram-ботов и решения для автоматизации бизнеса.",
                  inLanguage: "ru-RU",
                },
                {
                  "@type": "Service",
                  serviceType: "Разработка Telegram-ботов и сайтов",
                  provider: { "@id": `${siteUrl}#org` },
                  areaServed: "RU",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Услуги Rocketly",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Telegram-бот",
                        },
                        priceSpecification: {
                          "@type": "PriceSpecification",
                          priceCurrency: "RUB",
                          minPrice: 3500,
                          description: "от 3 500 ₽, запуск за 2–3 дня",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Сайт",
                        },
                        priceSpecification: {
                          "@type": "PriceSpecification",
                          priceCurrency: "RUB",
                          minPrice: 10000,
                          description: "от 10 000 ₽, запуск за 3–4 дня",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Сайт + Telegram-бот",
                        },
                        priceSpecification: {
                          "@type": "PriceSpecification",
                          priceCurrency: "RUB",
                          minPrice: 15000,
                          description: "от 15 000 ₽, запуск за 5–7 дней",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
