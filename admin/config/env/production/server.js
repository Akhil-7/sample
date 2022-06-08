module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env("PUBLIC_URL", "http://65.20.75.248:1337"),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
