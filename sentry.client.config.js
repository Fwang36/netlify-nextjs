// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { RewriteFrames } from '@sentry/integrations';
const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;


  Sentry.init({
    dsn: SENTRY_DSN || 'https://aea7efac19544416b6a60adf127567aa@o1407376.ingest.sentry.io/4505427699564544',

    release: "aldenRelease",
    environment: "testing",

    debug: true,
    beforeSend(event) {

      console.log(event)

      return event
    },
    beforeSendTransaction: (event) => {
      
      console.log("event", event)


      return event
    },

    integrations: [
      new Sentry.BrowserTracing({

        markBackgroundTransactions: false,

    
      }),
      new Sentry.Replay({
        networkDetailAllowUrls: ["3000"],
        networkCaptureBodies: true
      }),      
    ],
    
    replaysSessionSampleRate: 1,
    replaysOnErrorSampleRate: 1,
  

  
  });


