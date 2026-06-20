import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://zegoraagency.com";

export const SITE = {
  name: "Zegora Foreign Private Employment Agent",
  shortName: "Zegora",
  legalName: "Zegora Foreign Private Employment Agent",
  tagline: "Bridging Talent with Global Opportunities",
  description:
    "Zegora Foreign Private Employment Agent (zegoraagency.com) is a licensed Ethiopian private employment agency with 20+ years placing skilled workers in the Gulf, Europe and beyond.",
  email: "zegoratrading07@gmail.com",
  phones: ["+251115580901", "+251115580902", "+251115580904"],
  whatsapp: "+251901918658",
  address: {
    street: "Stadium, Yeha City Center, 9th Floor",
    city: "Addis Ababa",
    region: "Addis Ababa",
    country: "Ethiopia",
    countryCode: "ET",
    postalCode: "1000",
  },
  geo: {
    latitude: 9.0192,
    longitude: 38.7525,
  },
  social: {
    facebook: "https://www.facebook.com/share/1JxpeRKVLR/",
    tiktok: "https://www.tiktok.com/@zegoraforeignemploymenta",
  },
  foundingYear: 2004,
  ogImage:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/RvsnomANpMRbsLA7r9PDP8EJjEm2/social-images/social-1780744894113-photo_2026-06-06_14-20-41.webp",
} as const;

export const BRAND_NAMES = [
  "Zegora",
  "ZEGORA",
  "Zegora agency",
  "Zegora Agency",
  "Zegora Foreign Private Employment Agent",
  "zegoraagency",
  "Zegoraagency",
  "zegoraagency.com",
  "private employment agent Ethiopia",
] as const;

export const SEO_KEYWORDS = [
  ...BRAND_NAMES,
  "Zegora employment agent",
  "Zegora agency Ethiopia",
  "Zegora Ethiopia",
  "Zegora foreign employment",
  "Ethiopian employment agency",
  "Ethiopian private employment agent",
  "foreign employment agent Ethiopia",
  "overseas jobs Ethiopia",
  "Gulf jobs Ethiopia",
  "Saudi Arabia jobs Ethiopia",
  "UAE jobs Ethiopia",
  "recruitment agency Addis Ababa",
  "manpower agency Ethiopia",
  "licensed employment agent Ethiopia",
  "overseas recruitment Ethiopia",
  "work abroad Ethiopia",
  "Ethiopian workers abroad",
] as const;

export const DESTINATION_COUNTRIES = [
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Jordan",
  "Germany",
  "Poland",
  "Romania",
] as const;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogTitle,
  ogDescription,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const allKeywords = [...new Set([...SEO_KEYWORDS, ...keywords])];

  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE.name, url: SITE_URL }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "Employment & Recruitment",
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      alternateLocale: ["am_ET"],
      siteName: SITE.name,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url,
      images: [
        {
          url: SITE.ogImage,
          width: 1200,
          height: 630,
          alt: "Zegora Foreign Private Employment Agent — Ethiopia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [SITE.ogImage],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zegora | Zegora Foreign Private Employment Agent | Zegoraagency",
    template: `%s | Zegora`,
  },
  description: SITE.description,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  applicationName: "Zegora",
  category: "Employment & Recruitment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "en-US": absoluteUrl("/"),
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["am_ET"],
    siteName: SITE.name,
    title: "Zegora | Zegora Foreign Private Employment Agent | Zegoraagency",
    description: SITE.description,
    url: absoluteUrl("/"),
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Zegora Foreign Private Employment Agent at zegoraagency.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zegora | Zegora Foreign Private Employment Agent | Zegoraagency",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: {
    "geo.region": "ET-AA",
    "geo.placename": "Addis Ababa",
    "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
    ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
  },
};
