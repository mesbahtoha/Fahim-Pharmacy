import type { MetadataRoute } from "next";
import { SITE, IMAGES } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.nameEn,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAFC",
    theme_color: "#0F766E",
    icons: [
      { src: IMAGES.logo, sizes: "any", type: "image/jpeg" },
    ],
  };
}
