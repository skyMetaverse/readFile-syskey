# readFile-syskey

This Node.js module provides a utility function for reading lines from a specified file asynchronously.

## Features

- Read lines from a file as an array of strings.
- Handles both carriage return and line feed as line separators.
- Returns a Promise that either resolves with the lines or rejects with an error.

## Installation

```js
npm i readFile-syskey
```

## Usage

Here's an example of how to use the `readLines` function:

```js
const readLines = require('readFile-syskey');

const filePath = 'path/to/your/file.txt';

// Call the function and handle the Promise
readLines(filePath)
  .then((lines) => {
    // Process the lines as needed
    lines.forEach((line) => console.log(line));
  })
  .catch((error) => {
    // Handle any errors here
    console.error(error);
  });
```
