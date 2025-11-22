import RoomDetailPageClient from "../[id]/room-detail-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Class | DE-SYLS HOTELS & SUITES",
  description: "Experience comfort in our Business Class with plush bedding and elegant décor.",
}

export default function BusinessClassPage() {
  return <RoomDetailPageClient params={{ id: 'business-class' }} />
}