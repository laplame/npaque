// server.js
(async () => {
    const serve = (await import('serve')).default;
    const server = serve('build', { port: 3000 });
    console.log('Serving on http://localhost:3000');
  })();