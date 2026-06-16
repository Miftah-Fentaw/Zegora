import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://zegora-foreign-employment-agent-et.lovable.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/countries`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/employers`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/job-seekers`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
