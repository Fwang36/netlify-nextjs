// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://aea7efac19544416b6a60adf127567aa@o1407376.ingest.sentry.io/4505427699564544',
  debug:true,
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  // release: process.env.VERCEL_GIT_COMMIT_SHA || "81"
  release: 'aldenRelease',
  // dist: "1",
});
