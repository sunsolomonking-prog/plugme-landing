import { NextRequest, NextResponse } from 'next/server';
import { appendJsonRecord } from '@/lib/storage';
import { checkRateLimit } from '@/lib/rate-limit';

type PartnerBody = {
  companyName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  city?: string;
  partnerType?: string;
  notes?: string;
  website?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';

  if (!checkRateLimit(`partners:${ip}`)) {
    return NextResponse.json({ message: 'Too many requests. Please try again shortly.' }, { status: 429 });
  }

  const body = (await request.json()) as PartnerBody;

  if (body.website) {
    return NextResponse.json({ message: 'Submission received.' }, { status: 200 });
  }

  if (!body.companyName || !body.contactName || !body.email || !body.phone || !body.city || !body.partnerType) {
    return NextResponse.json({ message: 'Please complete all required fields.' }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(body.email)) {
    return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 });
  }

  await appendJsonRecord('partners.json', {
    companyName: body.companyName,
    contactName: body.contactName,
    email: body.email,
    phone: body.phone,
    city: body.city,
    partnerType: body.partnerType,
    notes: body.notes ?? '',
    createdAt: new Date().toISOString()
  });

  return NextResponse.json({ message: 'Partner request submitted successfully.' }, { status: 201 });
}
