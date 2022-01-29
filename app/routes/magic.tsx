import type { LoaderFunction } from 'remix';

import { auth } from '~/lib/helpers';

export const loader: LoaderFunction = async ({ request }) => {
  await auth.authenticate('email-link', request, {
    successRedirect: '/me',
    failureRedirect: '/login',
  });
};
