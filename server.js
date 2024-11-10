const http = require('http');
const url = require('url');
const readMessages = require('./readMessages'); // Import readMessages
const { writeMessage } = require('./writeMessage'); // Destructuring writeMessage

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'GET' && parsedUrl.pathname === '/') {
    const messages = readMessages();
    const messageList = messages.map(msg => `<p>${msg}</p>`).join('');
    const html = `
      <!DOCTYPE html>
      <html>
        <head><title>Message Board</title></head>
        <body>
          <h2>Messages</h2>
          ${messageList}
          <form action="/add-message" method="POST">
            <input type="text" name="message" placeholder="Enter your message" required>
            <button type="submit">Add Message</button>
          </form>
        </body>
      </html>
    `;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);

  } else if (req.method === 'POST' && parsedUrl.pathname === '/add-message') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const message = new URLSearchParams(body).get('message');
      if (message) {
        writeMessage(message);
      }
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Page Not Found');
  }
});

server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});

module.exports = server; // Export the server as a module
