import type { SendEmailFunction } from 'remix-auth-email-link';
import type { User } from '~/lib/types';

import { createTransport } from 'nodemailer';

const transporter = createTransport({
  host: process.env.LGN_SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.LGN_SMTP_USER,
    pass: process.env.LGN_SMTP_PASS,
  },
});

export const sendEmail: SendEmailFunction<User> = async ({ emailAddress, user, domainUrl, magicLink }) => {
  await transporter.sendMail({
    from: '"Loginer Magic Link" <magic@loginer.ct8.pl>',
    to: emailAddress,
    subject: 'Sign in!',
    text: magicLink,
    html: `<a href="${magicLink}" target="_blank">Sign in</a>`,
  });
};
