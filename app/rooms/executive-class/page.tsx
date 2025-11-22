import RoomDetailPageClient from "../[id]/room-detail-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Executive Class | DE-SYLS HOTELS & SUITES",
  description: "Experience luxury in our Executive Class with king bed, work desk, mini-bar, and private balcony. Perfect for business travelers.",
}

export default function ExecutiveClassPage() {
  return <RoomDetailPageClient params={{ id: 'executive-class' }} />
}