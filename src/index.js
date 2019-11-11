import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const gameEngine = (gameIntroduction = '', gameModule = null) => {
  console.log('Welcome to the Brain Games!');
  if (gameIntroduction !== '') console.log(`${gameIntroduction}`);
  const name = readlineSync.question('May I have your name? ');
  const nameIs = name === '' ? 'Anonymous' : name;
  console.log(`Hello, ${nameIs}!`);
  if (gameModule === null) return;
  for (let i = 0; i < 3; i += 1) {
    const gameQA = gameModule();
    console.log(`Question: ${car(gameQA)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== cdr(gameQA)) {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${cdr(gameQA)}'`);
      console.log(`let's try again, ${nameIs}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulation, ${nameIs}!`);
};

export default gameEngine;
