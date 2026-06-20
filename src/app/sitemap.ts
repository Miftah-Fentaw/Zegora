import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const ROUTES: MetadataRoute.Sitemap = [
  { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
  { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/job-seekers`, changeFrequency: "monthly", priority: 0.85 },
  { url: `${SITE_URL}/employers`, changeFrequency: "monthly", priority: 0.85 },
  { url: `${SITE_URL}/countries`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES;
}
