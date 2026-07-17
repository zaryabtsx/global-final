import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { formData, recipientEmails } = await req.json();
  const { sendADRFormEmail } = await import("@/app/actions/sendEmail");
  const result = await sendADRFormEmail(formData, recipientEmails);
  return NextResponse.json(result);
}
