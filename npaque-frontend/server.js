// server.js
(async () => {
  const serve = (await import('serve')).default;
  const server = serve('build', { port: 3000, host: '0.0.0.0' });
  console.log('Serving on http://0.0.0.0:3000');
})();