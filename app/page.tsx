import ClientPage from "./client-page"
import SchemaScript from "@/components/schema-script"

export const metadata = {
  title: "DE-SYLS HOTELS & SUITES | Luxury Accommodation in Festac Town",
  description:
    "Experience exclusive comfort at DE-SYLS HOTELS & SUITES. Luxury rooms, fine dining, and premium facilities in Festac Town.",
  openGraph: {
    title: "DE-SYLS HOTELS & SUITES",
    description: "Luxury accommodation in Festac Town",
  },
}

export default function Home() {
  return (
    <>
      <SchemaScript />
      <ClientPage />
    </>
  )
}
