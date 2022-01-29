import type { ActionFunction, LoaderFunction } from 'remix';
import { useActionData, Form } from 'remix';
import { auth, getSession } from '~/lib/helpers';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await auth.isAuthenticated(request);

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
