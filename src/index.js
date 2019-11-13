import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const gameEngine = (gameIntroduction = '', runGame = null) => {
  console.log('Welcome to the Brain Games!');
  if (gameIntroduction !== '') console.log(`${gameIntroduction}`);
  const name = readlineSync.question('May I have your name? ');
  const nameIs = name === '' ? 'Anonymous' : name;
  console.log(`Hello, ${nameIs}!`);
  if (runGame === null) return;
  for (let i = 0; i < 3; i += 1) {
    const questionAndAnswer = runGame();
    console.log(`Question: ${car(questionAndAnswer)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== cdr(questionAndAnswer)) {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${cdr(questionAndAnswer)}'`);
      console.log(`let's try again, ${nameIs}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulation, ${nameIs}!`);
};

export default gameEngine;
