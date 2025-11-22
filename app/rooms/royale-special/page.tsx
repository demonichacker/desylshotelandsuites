import RoomDetailPageClient from "../[id]/room-detail-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Royale Special | DE-SYLS HOTELS & SUITES",
  description: "Experience family comfort in our Royale Special with two bedrooms, living area, and kitchenette.",
}

export default function RoyaleSpecialPage() {
  return <RoomDetailPageClient params={{ id: 'royale-special' }} />
}