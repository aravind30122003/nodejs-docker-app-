const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  const message = `
    🌸✨ Hi Muu! ✨🌸

    🎂 Advance Happy Birthday! 🎉
    ❤️ I love you as always — Umma 💋

    🕊️ Wishing you happiness, health, and all your dreams come true!

    — With love from Aarav 💌
  `;
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(message);
});

server.listen(port, () => {
  console.log(`🌐 Server running at http://localhost:${port}`);
});


