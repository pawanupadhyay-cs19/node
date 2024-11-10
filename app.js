/* 1. How does the internet work?
The internet is a global network that connects millions of computers, allowing them to communicate and share information. It works through a system of protocols (rules) and infrastructure that transmits data. At its core, the internet relies on the IP (Internet Protocol), which routes data to the correct destination, and TCP (Transmission Control Protocol), which ensures data integrity and reliability. When you access a website, your computer sends a request to a server where that website is stored. This server then sends the required files (HTML, CSS, JavaScript) back to your device, allowing you to view the website.

2. Core modules of Node.js and their uses
Node.js includes several core modules essential for building applications. Some of the main ones are:

http: Used to create HTTP servers, handle requests and responses, and manage server communication over the web.
fs (File System): Used to work with the file system, including reading, writing, updating, and deleting files on the system.
path: Helps with working with file and directory paths, providing methods for handling file paths, resolving paths, and working with relative and absolute paths.
os: Provides utilities related to the operating system, like getting information about the system, memory usage, network interfaces, and CPU details.
events: Implements the event-driven architecture in Node.js, allowing for handling of asynchronous events and creating custom events.
url: Provides utilities for URL resolution and parsing, useful for parsing and formatting URL strings in a web application.
3. Relative path and absolute path
Relative Path: A relative path specifies a path relative to the current working directory. It doesn’t start with a root directory, so it is based on the location of the file using it. For example, ./folder/file.txt refers to file.txt in a folder relative to the current directory.
Absolute Path: An absolute path provides the complete path from the root directory to the file or folder. It starts with / on Unix-based systems (Linux, macOS) or a drive letter on Windows. Example: /home/user/folder/file.txt (Linux) or C:\Users\User\folder\file.txt (Windows).
4. What does createServer do?
In Node.js, createServer is a method of the http module that creates an HTTP server. This server can listen for incoming requests on a specified port and respond to those requests. It allows developers to define what actions should occur when the server receives an HTTP request, including setting up response headers and sending content back to the client.

5. What are anonymous functions?
Anonymous functions are functions without a name. In JavaScript, they are often used in places where a function is required but does not need to be named, like as a callback function in an event or as an argument in another function. Anonymous functions are useful for short, one-time operations that do not need to be reused elsewhere in the code.

6. What does server.listen do, and why do we need it?
The server.listen function in Node.js tells the server to start listening for incoming connections on a specified port. We need it to make the server accessible to clients, allowing them to send requests to it. By defining the port (e.g., 4000), we ensure that our server is available to accept HTTP requests on that port.
*/
const http = require('http');

// Create a server that listens on port 4000 and logs a name
const server = http.createServer((req, res) => {
  console.log("Your Name"); // Replace with your actual name
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello! Check the console for your name.');
});

// Start the server and listen on port 4000
server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});

