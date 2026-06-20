import { DESTINATION_COUNTRIES, SITE, SITE_URL, absoluteUrl } from "@/lib/seo";

export const FAQ_ITEMS = [
  {
    question: "What is Zegora?",
    answer:
      "Zegora is the brand name of Zegora Foreign Private Employment Agent — a licensed Ethiopian private employment agency based in Addis Ababa. Search for Zegora, Zegora agency, or visit zegoraagency.com for our official website and contact details.",
  },
  {
    question: "Is Zegoraagency the same as Zegora agency?",
    answer:
      "Yes. Zegoraagency, Zegora agency, and Zegora all refer to Zegora Foreign Private Employment Agent at zegoraagency.com — the same licensed Ethiopian private employment agency.",
  },
  {
    question: "What is Zegora Foreign Private Employment Agent?",
    answer:
      "Zegora Foreign Private Employment Agent is a licensed Ethiopian private employment agency based in Addis Ababa with over 20 years of experience connecting skilled Ethiopian professionals with reputable employers in the Gulf, Europe and beyond.",
  },
  {
    question: "Is Zegora a licensed Ethiopian employment agent?",
    answer:
      "Yes. Zegora Foreign Private Employment Agent is a government-licensed private employment agency in Ethiopia, operating with full legal compliance, verified documentation and ethical recruitment standards.",
  },
  {
    question: "Which countries does Zegora place workers in?",
    answer: `Zegora places Ethiopian workers in ${DESTINATION_COUNTRIES.slice(0, 6).join(", ")}, and other destinations including ${DESTINATION_COUNTRIES.slice(6).join(", ")}.`,
  },
  {
    question: "How do I apply for overseas jobs through Zegora?",
    answer:
      "Contact Zegora by phone, email at zegoratrading07@gmail.com, WhatsApp or visit our Addis Ababa office at Yeha City Center. Our team will guide you through eligibility, documentation and placement with verified international employers.",
  },
  {
    question: "Does Zegora help employers hire Ethiopian workers?",
    answer:
      "Yes. Zegora Foreign Private Employment Agent partners with international employers to source, vet and deploy pre-qualified Ethiopian talent across hospitality, healthcare, construction, manufacturing and other sectors.",
  },
] as const;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EmploymentAgency", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    alternateName: [
      "Zegora",
      "ZEGORA",
      "Zegora Agency",
      "Zegora agency",
      "Zegora Foreign Private Employment Agent",
      "Zegora Ethiopia",
      "zegoraagency",
      "Zegoraagency",
      "zegoraagency.com",
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    image: SITE.ogImage,
    description: SITE.description,
    slogan: SITE.tagline,
    foundingDate: String(SITE.foundingYear),
    email: SITE.email,
    telephone: SITE.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: [
      { "@type": "Country", name: "Ethiopia" },
      ...DESTINATION_COUNTRIES.map((name) => ({ "@type": "Country", name })),
    ],
    sameAs: [SITE.social.facebook, SITE.social.tiktok],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.whatsapp,
        contactType: "customer service",
        availableLanguage: ["English", "Amharic"],
        areaServed: "ET",
      },
      {
        "@type": "ContactPoint",
        email: SITE.email,
        contactType: "recruitment",
        availableLanguage: ["English", "Amharic"],
      },
    ],
    knowsAbout: [
      "Ethiopian foreign employment",
      "Private employment agent Ethiopia",
      "Overseas recruitment",
      "Gulf workforce placement",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE.name,
    alternateName: [
      "Zegora",
      "Zegora agency",
      "Zegoraagency",
      "zegoraagency.com",
      "Zegora Foreign Private Employment Agent",
    ],
    url: SITE_URL,
    description: SITE.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: readonly { question: string; answer: string }[] = FAQ_ITEMS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd() {
  const services = [
    "Overseas Recruitment",
    "Employer Partnerships",
    "Workforce Solutions",
    "Recruitment Consulting",
    "Documentation Guidance",
    "International Placement Support",
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Foreign Employment & Overseas Recruitment",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: DESTINATION_COUNTRIES.map((name) => ({
      "@type": "Country",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Zegora Recruitment Services",
      itemListElement: services.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  };
}
