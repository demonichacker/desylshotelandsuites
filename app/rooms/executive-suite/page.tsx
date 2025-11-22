import RoomDetailPageClient from "../[id]/room-detail-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Executive Suite | DE-SYLS HOTELS & SUITES",
  description: "Experience luxury in our Executive Suite with king bed, work desk, mini-bar, and private balcony. Perfect for business travelers.",
}

export default function ExecutiveSuitePage() {
  return <RoomDetailPageClient params={{ id: 'executive-suite' }} />
}