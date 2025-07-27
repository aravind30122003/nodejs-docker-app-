const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end(" hi ammu ! advance happy birthday , i love you umma ");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

