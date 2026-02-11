import { NextRequest, NextResponse } from 'next/server';
import { appendJsonRecord } from '@/lib/storage';
import { checkRateLimit } from '@/lib/rate-limit';

type WaitlistBody = {
  fullName?: string;
  email?: string;
  phone?: string;
  city?: string;
  userType?: string;
  website?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';

  if (!checkRateLimit(`waitlist:${ip}`)) {
    return NextResponse.json({ message: 'Too many requests. Please try again shortly.' }, { status: 429 });
  }

  const body = (await request.json()) as WaitlistBody;

  if (body.website) {
    return NextResponse.json({ message: 'Submission received.' }, { status: 200 });
  }

  if (!body.fullName || !body.email || !body.phone || !body.city || !body.userType) {
    return NextResponse.json({ message: 'Please complete all required fields.' }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(body.email)) {
    return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 });
  }

  await appendJsonRecord('waitlist.json', {
    fullName: body.fullName,
    email: body.email,
    phone: body.phone,
    city: body.city,
    userType: body.userType,
    createdAt: new Date().toISOString()
  });

  return NextResponse.json({ message: 'Waitlist signup successful.' }, { status: 201 });
}
