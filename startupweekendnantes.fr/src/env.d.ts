/// <reference types="astro/client" />

type ImportMetaEnv = {
  /** PostHog project API token — see .env.example. Absent in dev/preview → PostHog disabled. */
  readonly PUBLIC_POSTHOG_KEY?: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
