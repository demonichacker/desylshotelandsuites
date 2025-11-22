import RoomDetailPageClient from "../[id]/room-detail-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Standard Single | DE-SYLS HOTELS & SUITES",
  description: "Cozy single room for solo travelers on a budget. Comfortable bed, essential amenities, and great value for money.",
}

export default function StandardSinglePage() {
  return <RoomDetailPageClient params={{ id: 'standard-single' }} />
}