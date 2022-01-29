import type { ActionFunction, LoaderFunction } from 'remix';

import { Form } from 'remix';
import { auth } from '~/lib/helpers';

export const loader: LoaderFunction = async ({ request }) => {
  await auth.isAuthenticated(request, { successRedirect: '/me' });

  return null;
};

export const action: ActionFunction = async ({ request }) => {
  await auth.authenticate('email-link', request, {
    successRedirect: '/login',
    failureRedirect: '/login',
  });
};

const Screen = () => {
  return (
    <Form method="post">
      <label>
        E-mail <input type="email" name="email" required />
      </label>
      <button>Send magic link to my email</button>
    </Form>
  );
};

export default Screen;