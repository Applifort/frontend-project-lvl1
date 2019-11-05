#!/usr/bin/env node
import gameEven from '../games/gameEven.js'
import actual from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const name = actual();
console.log(`Hello, ${name}!`);

gameEven(name);
