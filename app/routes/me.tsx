import type { User } from '~/lib/types';
import type { LoaderFunction } from 'remix';

import { json, useLoaderData } from 'remix';
import { auth } from '~/lib/helpers';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await auth.isAuthenticated(request, { failureRedirect: '/login' });

  return json(user);
};

const Screen = () => {
  const user = useLoaderData<User>();

  return <h1>{user.email}</h1>;
};

export default Screen;
