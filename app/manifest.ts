import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AIVerse",
    short_name: "AIVerse",
    description: "Your central hub for discovering cutting-edge AI tools across various categories",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1729",
    theme_color: "#1E88FC",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
