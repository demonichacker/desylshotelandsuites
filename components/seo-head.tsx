import type { Metadata } from "next"

export function generateSEOMetadata(title: string, description: string, path = "/"): Metadata {
  const baseUrl = "https://desyls-hotels.vercel.app"
  const url = `${baseUrl}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "DE-SYLS HOTELS & SUITES",
      images: [
        {
          url: `${baseUrl}/luxury-executive-suite-hotel-room.jpg`,
          width: 1200,
          height: 630,
          alt: "DE-SYLS HOTELS & SUITES",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/luxury-executive-suite-hotel-room.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  }
}
