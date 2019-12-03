import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

export default (gameIntroduction, runGame) => {
  console.log(`Welcome to the Brain Games! \n${gameIntroduction}`);
  const userName = readlineSync.question('May I have your name? ');
  const name = userName === '' ? 'Anonymous' : userName;
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < roundsCount; i += 1) {
    const questionAndAnswer = runGame();
    const question = car(questionAndAnswer);
    const answer = cdr(questionAndAnswer);
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (usersAnswer !== answer) {
      console.log(`'${usersAnswer}' is wrong answer;(. Correct answer was '${answer}'`);
      console.log(`let's try again, ${name}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulation, ${name}!`);
};
