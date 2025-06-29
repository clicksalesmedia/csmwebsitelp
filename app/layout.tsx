import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://clicksalesmedia.com'),
  title: {
    default: "كليك سيلز ميديا - تصميم مواقع ومتاجر إلكترونية في دبي | Click Sales Media",
    template: "%s | Click Sales Media"
  },
  description: "شركة كليك سيلز ميديا رائدة في تصميم وتطوير المواقع والمتاجر الإلكترونية في دبي والإمارات. نقدم حلول رقمية احترافية، صفحات هبوط، تسويق رقمي وتحسين محركات البحث SEO. خبرة +10 سنوات",
  keywords: [
    "تصميم مواقع دبي",
    "تطوير مواقع الإمارات", 
    "متاجر إلكترونية دبي",
    "صفحات هبوط دبي",
    "تسويق رقمي دبي",
    "شركة تصميم مواقع الإمارات",
    "تحسين محركات البحث دبي",
    "برمجة مواقع دبي",
    "تصميم متاجر إلكترونية",
    "شركة برمجة مواقع",
    "Click Sales Media",
    "website design Dubai",
    "ecommerce development UAE",
    "digital marketing Dubai",
    "web development company Dubai",
    "landing pages Dubai",
    "SEO services UAE",
    "responsive web design",
    "mobile app development"
  ],
  authors: [{ name: "Click Sales Media", url: "https://clicksalesmedia.com" }],
  creator: "Click Sales Media",
  publisher: "Click Sales Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://clicksalesmedia.com",
    languages: {
      'ar': 'https://clicksalesmedia.com',
      'en': 'https://clicksalesmedia.com/en',
      'x-default': 'https://clicksalesmedia.com'
    }
  },
  openGraph: {
    type: "website",
    locale: "ar_AE",
    alternateLocale: ["en_US"],
    url: "https://clicksalesmedia.com",
    siteName: "Click Sales Media",
    title: "كليك سيلز ميديا - تصميم مواقع ومتاجر إلكترونية في دبي",
    description: "شركة كليك سيلز ميديا رائدة في تصميم وتطوير المواقع والمتاجر الإلكترونية في دبي والإمارات. خبرة +10 سنوات في الحلول الرقمية والتسويق الإلكتروني",
    images: [
      {
        url: "/clicksalesmedialogo.png",
        width: 1200,
        height: 630,
        alt: "Click Sales Media - شركة تصميم مواقع في دبي",
        type: "image/png",
      },
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "خدمات تصميم المواقع والمتاجر الإلكترونية",
        type: "image/webp",
      },
    ],
    countryName: "United Arab Emirates",
    emails: ["info@clicksalesmedia.com"],
    phoneNumbers: ["+971503412174"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@clicksalesmedia",
    creator: "@clicksalesmedia",
    title: "كليك سيلز ميديا - تصميم مواقع ومتاجر إلكترونية في دبي",
    description: "شركة رائدة في تصميم وتطوير المواقع والمتاجر الإلكترونية في دبي والإمارات. خبرة +10 سنوات",
    images: {
      url: "/clicksalesmedialogo.png",
      alt: "Click Sales Media Logo",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },
  category: "Technology",
  classification: "Business Services",
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/clicksalesmedialogo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/clicksalesmedialogo.png',
    },
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#c3a177',
    'color-scheme': 'light',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai',
    'geo.position': '25.2048493;55.2707828',
    'ICBM': '25.2048493, 55.2707828',
    'contact': 'info@clicksalesmedia.com',
    'phone': '+971503412174',
    'address': 'ند الشبا, دبي, الامارات العربية المتحدة',
    'coverage': 'Worldwide',
    'distribution': 'Global',
    'rating': 'General',
    'revisit-after': '1 days',
    'language': 'Arabic',
    'reply-to': 'info@clicksalesmedia.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured Data - JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Click Sales Media",
              "alternateName": "كليك سيلز ميديا",
              "url": "https://clicksalesmedia.com",
              "logo": "https://clicksalesmedia.com/clicksalesmedialogo.png",
              "description": "شركة رائدة في تصميم وتطوير المواقع والمتاجر الإلكترونية في دبي والإمارات",
              "foundingDate": "2014",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ند الشبا",
                "addressLocality": "دبي",
                "addressCountry": "AE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971503412174",
                "contactType": "customer service",
                "availableLanguage": ["Arabic", "English"]
              },
              "sameAs": [
                "https://wa.me/971503412174"
              ],
              "serviceArea": {
                "@type": "Place",
                "name": "UAE, Dubai, Abu Dhabi, Sharjah"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "خدمات كليك سيلز ميديا",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "تصميم المواقع الإلكترونية",
                      "description": "تصميم وتطوير مواقع احترافية متجاوبة مع تحسين محركات البحث"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "المتاجر الإلكترونية",
                      "description": "تطوير متاجر إلكترونية متكاملة وآمنة مع أنظمة دفع متقدمة"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "صفحات الهبوط",
                      "description": "تصميم صفحات هبوط محسنة للتحويل مع أنظمة تتبع متقدمة"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "التسويق الرقمي",
                      "description": "خدمات التسويق الرقمي وتحسين محركات البحث والحملات الإعلانية"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Click Sales Media",
              "image": "https://clicksalesmedia.com/clicksalesmedialogo.png",
              "telephone": "+971503412174",
              "email": "info@clicksalesmedia.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ند الشبا",
                "addressLocality": "دبي",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.2048493,
                "longitude": 55.2707828
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "25"
              }
            })
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Click Sales Media",
              "alternateName": "كليك سيلز ميديا",
              "url": "https://clicksalesmedia.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://clicksalesmedia.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {children}
      </body>
    </html>
  );
}
