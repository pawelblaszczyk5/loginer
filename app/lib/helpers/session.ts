import type { Session } from 'remix';
import { createFileSessionStorage } from 'remix';

const {
  commitSession,
  destroySession,
  getSession: _getSession,
} = createFileSessionStorage({
  cookie: {
    name: 'SESSIONID',
    httpOnly: true,
    sameSite: 'strict',
    secure: true,
    secrets: [process.env.LGN_COOKIE_SECRET],
  },
  dir: 'sessions',
});

const getSession = (request: Request): Promise<Session> => _getSession(request.headers.get('cookie'));

export { commitSession, destroySession, getSession };
