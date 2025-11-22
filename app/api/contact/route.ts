import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for contact messages
const messages: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const message = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      status: "New",
    }

    messages.push(message)

    // In production, send email notification here
    console.log("New contact message:", message)

    return NextResponse.json({ success: true, message }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json(messages)
}
