import type { Session } from 'remix';

import { createFileSessionStorage } from 'remix';

export const sessionStorage = createFileSessionStorage({
  cookie: {
    name: 'SESSIONID',
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    secrets: [process.env.LGN_COOKIE_SECRET],
  },
  dir: 'sessions',
});

export const getSession = (request: Request): Promise<Session> =>
  sessionStorage.getSession(request.headers.get('cookie'));

export const { commitSession, destroySession } = sessionStorage;
