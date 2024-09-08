import { NextRequest, NextResponse } from 'next/server';
import prisma from "./../../../../prisma/client";

export async function GET() {
  console.log("inside get");
  try {
    console.log("here");
    const data = await prisma.post.findMany();
    console.log("data");
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  const post = await request.json();
  const data = await prisma.post.create({
    data: { title: post.title }
  });
  return NextResponse.json(data); 
}