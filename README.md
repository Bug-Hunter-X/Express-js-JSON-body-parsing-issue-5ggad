# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue encountered when working with JSON request bodies in Express.js applications.  The problem arises when the `express.json()` middleware is not properly placed or configured, resulting in the request body not being parsed correctly.

## Bug

The `bug.js` file contains an Express.js application that attempts to parse a JSON request body. However, due to a placement issue of the `express.json()` middleware, the application fails to correctly parse the request body, leading to unexpected behavior. 

## Solution

The `bugSolution.js` file demonstrates the solution. By placing the `express.json()` middleware correctly, ensuring it is called *before* any routes that expect JSON bodies, the application correctly parses the JSON data.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install the required dependencies.
4. Run `node bug.js`. This will start the server with the bug. You can send a POST request with a JSON body to `/user` to observe the issue.
5. Run `node bugSolution.js`. This will start the server with the solution applied. Send the same POST request to confirm that the issue is resolved.
