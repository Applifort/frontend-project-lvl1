import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import gameEven from './games/gameEven';
import gameCalc from './games/gameCalc';
import gameGcd from './games/gameGcd';
import gameProgression from './games/gameProgression';

// Игру можно запустить с аргументом GameEven и GameCalc - это выбор игры.
// если запустить без аргумента, то пройдет просто приветствие.

const game = (nameOfGame) => {
  console.log('Welcome to the Brain Games!');
  switch (nameOfGame) {
    case 'gameEven':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'gameCalc':
      console.log('What is the result of the expression?');
      break;
    case 'gameGcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'gameProgression':
      console.log('What number is missing in the progression?');
      break;
    default: break;
  }
  const name = readlineSync.question('May I have your name? ');
  const nameIs = name === '' ? 'Anonymous' : name;
  console.log(`Hello, ${nameIs}!`);
  for (let i = 0; i < 3; i += 1) {
    let gameQA = null;
    switch (nameOfGame) {
      case 'gameEven':
        gameQA = gameEven();
        break;
      case 'gameCalc':
        gameQA = gameCalc();
        break;
      case 'gameGcd':
        gameQA = gameGcd();
        break;
      case 'gameProgression':
        gameQA = gameProgression();
        break;
      default: return;
    }
    console.log(`Question: ${car(gameQA)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== cdr(gameQA)) {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${cdr(gameQA)}'`);
      console.log(`let's try again, ${nameIs}!`);
      i = 0;
    } else console.log('Correct!');
  } console.log(`Congratulation, ${nameIs}!`);
};

export default game;
