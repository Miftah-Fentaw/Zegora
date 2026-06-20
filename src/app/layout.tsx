import { rootMetadata } from "@/lib/seo";
import { faqJsonLd, organizationJsonLd, serviceJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/site/JsonLd";
import "./globals.css";

export const metadata = rootMetadata;

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
        <JsonLd data={[organizationJsonLd(), websiteJsonLd(), serviceJsonLd(), faqJsonLd()]} />
      </head>
      <body>{children}</body>
    </html>
  );
}
