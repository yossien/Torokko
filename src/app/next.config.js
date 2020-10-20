const {nextI18NextRewrites} = require('next-i18next/rewrites')
const localeSubpaths = {}

module.exports = {
  distDir: '../../dist/functions/.next',
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    // Auth Providers
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  }
}