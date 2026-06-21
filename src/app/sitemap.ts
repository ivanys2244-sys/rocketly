import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://rocketly.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const demoRoutes: MetadataRoute.Sitemap = projects
    .filter((p) => p.type === "website" && p.demoUrl?.startsWith("/demo/"))
    .map((p) => ({
      url: `${siteUrl}/demo/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...demoRoutes];
}
