// Basic test file
const assert = require('assert');
const { greet } = require('../src/index');

// Test the greet function
console.log('Testing greet function...');
assert.strictEqual(greet('User'), 'Hello, User! Welcome to Nexium.');
console.log('All tests passed!');
