import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const gameInterations = 3;

export default (gameIntroduction, runGame) => {
  console.log(`Welcome to the Brain Games! \n${gameIntroduction}`);
  if (readlineSync.question('test? ')) return;
  const enteredName = readlineSync.question('May I have your name? ');
  const name = enteredName === '' ? 'Anonymous' : enteredName;
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < gameInterations; i += 1) {
    const questionAndAnswer = runGame();
    const question = car(questionAndAnswer);
    const rightAnswer = cdr(questionAndAnswer);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${rightAnswer}'`);
      console.log(`let's try again, ${name}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulation, ${name}!`);
};
