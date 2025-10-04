import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, email } = await request.json();

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        // Send email to lustless-dating@nomadsoft.us
        const { data, error } = await resend.emails.send({
            from: `${process.env.RESEND_SENDER_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
            to: [process.env.RESEND_TO_EMAIL],
            subject: 'New Waitlist Signup',
            html: `
                <h2>New Waitlist Signup</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Successfully joined waitlist' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
