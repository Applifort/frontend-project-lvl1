import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

const gameGenerator = () => {
  const number = letRandom(0, 100);
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  return cons(number, rightAnswer);
};

const gameEven = () => {
  const gameIntroduction = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameEngine(gameIntroduction, gameGenerator);
};

export default gameEven;
