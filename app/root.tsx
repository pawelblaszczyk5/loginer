import type { LinksFunction, MetaFunction } from 'remix';

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import { ThemeSetter } from '~/lib/components/ThemeSetter';
import styles from '~/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => {
  return { title: 'Loginer' };
};

const App = () => {
  return (
    // Supressing warning because of adding class in ThemeSetter
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeSetter />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
};

export default App;
