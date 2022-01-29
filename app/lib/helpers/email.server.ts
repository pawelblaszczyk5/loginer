import type { SendEmailFunction } from 'remix-auth-email-link';
import type { User } from '~/lib/types';

export const sendEmail: SendEmailFunction<User> = async ({ emailAddress, user, domainUrl, magicLink }) => {
  console.log({ emailAddress, user, domainUrl, magicLink });
  return;
};
