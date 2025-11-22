import RoomDetailPageClient from "../[id]/room-detail-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Classic | DE-SYLS HOTELS & SUITES",
  description: "Experience cozy comfort in our Classic room for solo travelers on a budget.",
}

export default function ClassicPage() {
  return <RoomDetailPageClient params={{ id: 'classic' }} />
}