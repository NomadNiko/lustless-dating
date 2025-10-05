import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import messages from '../../../messages/en.json';

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

        const t = messages.email;
        const currentYear = new Date().getFullYear();

        // Send notification email to lustless-dating@nomadsoft.us
        const { error: notificationError } = await resend.emails.send({
            from: `${process.env.RESEND_SENDER_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
            to: [process.env.RESEND_TO_EMAIL],
            subject: t.adminSubject,
            html: `
                <h2>${t.adminBody.title}</h2>
                <p><strong>${t.adminBody.nameLabel}</strong> ${name}</p>
                <p><strong>${t.adminBody.emailLabel}</strong> ${email}</p>
            `,
        });

        if (notificationError) {
            console.error('Notification email error:', notificationError);
        }

        // Send welcome email to user
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://lustless.barvibez.app';
        const { error: welcomeError } = await resend.emails.send({
            from: `${process.env.RESEND_SENDER_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
            to: [email],
            subject: t.subject,
            html: `
<!DOCTYPE html>
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>${t.subject}</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: 'Outfit', Arial, sans-serif; background-color: #f6f6f6;">
    <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #f6f6f6;">
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="max-width: 600px;">
            <!-- Header -->
            <tr>
              <td style="padding: 20px;">
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="180" valign="top" align="center" style="padding-bottom: 20px;">
                      <img src="${baseUrl}/assets/logo.png" alt="${t.welcomeEmail.logoAlt}" width="180" style="display: block;">
                    </td>
                    <td width="360" align="center" style="padding-top: 25px;">
                      <img src="${baseUrl}/assets/beyound-the-surface.png" alt="${t.welcomeEmail.headerAlt}" width="310" style="display: block;">
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Main Content -->
            <tr>
              <td style="padding: 20px;">
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td valign="top" width="86" style="padding-right: 15px;">
                            <img src="${baseUrl}/assets/logo_heart.png" width="75" alt="${t.welcomeEmail.heartLogoAlt}" style="display: block;">
                          </td>
                          <td>
                            <h2 style="font-family: 'Outfit', Arial, sans-serif; font-size: 26px; color: #333; margin: 0 0 10px 0;">
                              ${t.welcomeEmail.greeting.replace('{name}', name)}<br>${t.welcomeEmail.subGreeting}
                            </h2>
                            <p style="font-family: 'Outfit', Arial, sans-serif; font-size: 16px; color: #666; line-height: 1.6; margin: 0;">
                              ${t.welcomeEmail.bodyText}
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer Images -->
            <tr>
              <td style="padding: 20px;">
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="270" style="padding-right: 10px;">
                      <img src="${baseUrl}/assets/work-4.png" alt="" width="270" style="display: block; max-width: 100%;">
                    </td>
                    <td width="270" style="padding-left: 10px;">
                      <img src="${baseUrl}/assets/work-5.png" alt="" width="270" style="display: block; max-width: 100%; padding-top: 15px;">
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 20px; text-align: center; border-top: 1px solid #eee;">
                <p style="font-family: 'Outfit', Arial, sans-serif; font-size: 14px; color: #999; margin: 0;">
                  ${t.welcomeEmail.footerCopyright.replace('{year}', currentYear)}<br>
                  <a href="${baseUrl}" style="color: #b820e6; text-decoration: none;">${t.welcomeEmail.footerLinkText}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
            `,
        });

        if (welcomeError) {
            console.error('Welcome email error:', welcomeError);
            return NextResponse.json(
                { error: 'Failed to send welcome email' },
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
