import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for bookings (in production, use a database)
const bookings: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const booking = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      status: "Pending",
    }

    bookings.push(booking)

    // In production, send email notification here
    console.log("New booking:", booking)

    return NextResponse.json({ success: true, booking }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json(bookings)
}
