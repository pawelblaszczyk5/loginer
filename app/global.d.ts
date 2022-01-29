import type { Theme } from '~/lib/enums';

declare global {
  interface Window {
    setTheme: (newTheme: Theme) => void;
    handleThemeChange: () => void;
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LGN_COOKIE_SECRET: string;
      LGN_AUTH_SECRET: string;
    }
  }
}
