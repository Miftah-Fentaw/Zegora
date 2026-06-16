import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ZEGORA Foreign Employment Agency",
    template: "%s | ZEGORA",
  },
  description:
    "ZEGORA connects skilled Ethiopian professionals with trusted international employers across the Gulf and Europe.",
  authors: [{ name: "ZEGORA Foreign Employment Agency" }],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "ZEGORA Foreign Employment Agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0E4B3A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZEGORA Foreign Employment Agency",
              url: "https://zegora-foreign-employment-agent-et.lovable.app",
              logo: "https://zegora-foreign-employment-agent-et.lovable.app/favicon.ico",
              description:
                "ZEGORA connects skilled Ethiopian professionals with trusted international employers across the Gulf and Europe.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Yeha City Center, 9th Floor",
                addressLocality: "Addis Ababa",
                addressCountry: "ET",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+251-901-918-658",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
