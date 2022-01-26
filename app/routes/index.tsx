import type { LoaderFunction } from 'remix';

import { useLoaderData, json } from 'remix';
import { commitSession, getSession } from '~/lib/helpers';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);

  if (!session.get('test')) session.set('test', Math.random() * 100 + 1);

  return json(session.get('test'), {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

const Index = () => {
  const data = useLoaderData();

  return <h1>Hello world {data}</h1>;
};

export default Index;
