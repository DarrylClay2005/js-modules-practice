import { add, subtract } from './mathUtils.js';
import { capitalize, reverseString } from './stringUtils.js';

// Using math utility functions
const sum = add(10, 5);
console.log(`10 + 5 = ${sum}`);

const difference = subtract(10, 5);
console.log(`10 - 5 = ${difference}`);

// Using string utility functions
const capitalized = capitalize('hello world');
console.log(`'hello world' capitalized is: ${capitalized}`);

const reversed = reverseString('JavaScript');
console.log(`'JavaScript' reversed is: ${reversed}`);