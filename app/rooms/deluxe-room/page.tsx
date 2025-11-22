import RoomDetailPageClient from "../[id]/room-detail-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Delux Class | DE-SYLS HOTELS & SUITES",
  description: "Enjoy comfort in our Delux Class with elegant décor and modern amenities. Perfect for couples or business travelers.",
}

export default function DeluxClassPage() {
  return <RoomDetailPageClient params={{ id: 'delux-class' }} />
}