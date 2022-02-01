import type { User } from '@prisma/client';

import { Authenticator } from 'remix-auth';
import { db, sendEmail, sessionStorage } from '~/lib/utils';
import { EmailLinkStrategy } from 'remix-auth-email-link';

const AUTH_SECRET = process.env.LGN_AUTH_SECRET;

export const auth = new Authenticator<User>(sessionStorage);

const emailLinkStrategy = new EmailLinkStrategy(
  { sendEmail, secret: AUTH_SECRET, callbackURL: '/magic' },

  async ({ email }: { email: string }) => {
    const user = await db.user.upsert({
      where: {
        email,
      },
      update: {},
      create: {
        email,
      },
    });

    return user;
  },
);

auth.use(emailLinkStrategy);

export const EMAIL_LINK_STRATEGY = emailLinkStrategy.name;
