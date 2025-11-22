import RoomDetailPageClient from "./room-detail-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Room Details | DE-SYLS HOTELS & SUITES",
  description: "View detailed information about our luxury rooms and suites.",
}

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  return <RoomDetailPageClient params={params} />
}
