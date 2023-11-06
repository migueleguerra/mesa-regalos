import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import db from "@/core/db";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }

  const body = await request.json();
  const { name, eventDate } = body;

  const mesa = await db.mesa.create({
    data: {
      name: name,
      eventDate: eventDate,
      userId: session.userId,
    },
  });

  return NextResponse.json(mesa);
}
