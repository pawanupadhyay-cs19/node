const fs = require('fs');
const readMessages = require('./readMessages');

const writeMessage = (message) => {
  const messages = readMessages();
  messages.unshift(message); // Add new message to the top
  fs.writeFileSync('messages.txt', messages.join('\n'), 'utf-8');
};

exports.writeMessage = writeMessage; // Export using `exports.<functionName>`
