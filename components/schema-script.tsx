import { hotelSchema } from "@/app/schema"

export default function SchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(hotelSchema),
      }}
    />
  )
}
