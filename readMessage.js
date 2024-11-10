const fs = require('fs');

const readMessages = () => {
  try {
    const data = fs.readFileSync('messages.txt', 'utf-8');
    return data ? data.split('\n').filter(line => line.trim() !== '') : [];
  } catch (err) {
    console.error('Error reading messages file:', err);
    return [];
  }
};

module.exports = readMessages; // Export as a single function
