// Import required Node.js modules for file system operations and reading lines
const fs = require('fs');
const readline = require('readline');

/**
 * Reads all lines from a given file and returns them as an array of strings.
 * 
 * @param {string} filePath - The path to the file to be read.
 * @returns {Promise<Array<string>>} - A promise that resolves to an array of strings, 
 *         where each string is a line from the file. If reading the file fails, 
 *         the promise rejects with an error message.
 * 
 * The function creates a readable stream for the file at filePath, then uses the readline 
 * interface to read the file line by line. It collects all lines in an array and returns 
 * this array once the 'close' event indicates that the file stream has been fully read.
 * If there's an error reading the file, the function will reject the promise with the 
 * corresponding error.
 */
function readLines(filePath) {
    // Return a new Promise object that resolves to an array of lines or rejects with an error
    return new Promise((resolve, reject) => {
        // Create a readline Interface to read the file stream
        const lineReader = readline.createInterface({
            input: fs.createReadStream(filePath),
            crlfDelay: Infinity, // Handle CR and LF characters as line separators
        });

        const lines = []; // Array to hold file lines

        // Event listener for the 'line' event, triggered for each line read from the file
        lineReader.on('line', (line) => {
            lines.push(line); // Add the line to the lines array
        });

        // Event listener for the 'close' event, triggered when the file is fully read
        lineReader.on('close', () => {
            resolve(lines); // Resolve the Promise with the lines array
        });

        // Event listener for the 'error' event, triggered on a file read error
        lineReader.on('error', (err) => {
            reject(`Error reading file: ${filePath}\n${err}`); // Reject the Promise with the error
        });
    });
};

// Export the readLines function for use in other modules
module.exports = readLines;