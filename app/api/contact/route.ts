import { NextRequest, NextResponse } from 'next/server';

import { Resend } from 'resend';

export async function POST(req: NextRequest) {
	const { firstName, lastName, email, phone, message } = await req.json();

	const resend = new Resend(process.env.RESEND_API_KEY);

	resend.emails.send({
		from: 'noreply@roysheppard.dev',
		to: 'me@roysheppard.dev',
		subject: 'New Contact Form Submission',
		html: message,
	});

	return NextResponse.json({
		status: 200,
	});
}
