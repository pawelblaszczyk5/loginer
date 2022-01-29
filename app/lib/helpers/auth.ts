import type { User } from '~/lib/types';

import { Authenticator } from 'remix-auth';
import { sendEmail, sessionStorage } from '~/lib/helpers';
import { EmailLinkStrategy } from 'remix-auth-email-link';

const AUTH_SECRET = process.env.LGN_AUTH_SECRET;

export const auth = new Authenticator<User>(sessionStorage);

auth.use(
  new EmailLinkStrategy(
    { sendEmail, secret: AUTH_SECRET, callbackURL: '/magic' },

    async ({ email }: { email: string }) => {
      console.log(email);

      return {
        email,
      };
    },
  ),
);
