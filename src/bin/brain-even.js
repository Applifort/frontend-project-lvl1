#!/usr/bin/env node
import game from '../game.js'
import actual from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const name = actual();
console.log(`Hello, ${name}!`);

game(name);
