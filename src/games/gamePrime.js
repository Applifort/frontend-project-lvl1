import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

const gameGenerator = () => {
  const number = letRandom(2, 500);
  let dividerCount = 0;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) dividerCount += 1;
  }
  const rightAnswer = dividerCount === 0 ? 'yes' : 'no';
  return cons(number, rightAnswer);
};

const gamePrime = () => {
  const gameIntroduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameEngine(gameIntroduction, gameGenerator);
};

export default gamePrime;
