import type { User } from '~/lib/types';

import { Authenticator } from 'remix-auth';
import { sendEmail, sessionStorage } from '~/lib/utils';
import { EmailLinkStrategy } from 'remix-auth-email-link';

const AUTH_SECRET = process.env.LGN_AUTH_SECRET;

export const auth = new Authenticator<User>(sessionStorage);

const emailLinkStrategy = new EmailLinkStrategy(
  { sendEmail, secret: AUTH_SECRET, callbackURL: '/magic' },

  async ({ email }: { email: string }) => {
    return {
      email,
    };
  },
);

auth.use(emailLinkStrategy);

export const EMAIL_LINK_STRATEGY = emailLinkStrategy.name;
