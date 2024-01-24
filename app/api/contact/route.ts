import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/EmailTemplate';

export async function POST(req: NextRequest) {
	const { firstName, lastName, companyName, email, phone, message } =
		await req.json();

	// if honeypot field has value message is spam
	if (companyName.length > 0) {
		return NextResponse.json({
			status: 400,
			message: 'Message is suspected to be spam.',
		});
	}

	const resend = new Resend(process.env.RESEND_API_KEY);

	const { data, error } = await resend.emails.send({
		from: 'My Portfolio <noreply@roysheppard.dev>',
		reply_to: email,
		to: 'me@roysheppard.dev',
		subject: 'New Contact Form Submission',
		react: EmailTemplate({ firstName, lastName, email, phone, message }),
		text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${
			phone ? phone : 'Unknown'
		}\nMessage: ${message}`,
	});

	if (error) {
		return NextResponse.json({
			status: 400,
			...error,
		});
	}

	return NextResponse.json({
		status: 200,
		...data,
	});
}
