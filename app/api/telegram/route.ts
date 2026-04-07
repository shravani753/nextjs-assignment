import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone } = body;

    const BOT_TOKEN = "8271186981:AAFsMGtKWNJGaz0uHJXqqeite7a9QhD0aIw";
    const CHAT_ID = "6490440344";

    const message = `
🚀 New Lead
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}