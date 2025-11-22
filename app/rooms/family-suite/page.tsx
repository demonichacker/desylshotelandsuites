import RoomDetailPageClient from "../[id]/room-detail-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Family Suite | DE-SYLS HOTELS & SUITES",
  description: "Perfect for families, our Family Suite features two bedrooms, living area, and kitchenette. Accommodates up to 4 guests comfortably.",
}

export default function FamilySuitePage() {
  return <RoomDetailPageClient params={{ id: 'family-suite' }} />
}