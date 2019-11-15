import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

const isEven = (number) => number % 2 === 0;

const getQa = () => {
  const question = letRandom(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const gameIntroduction = 'Answer "yes" if the question is even, otherwise answer "no".';

const gameEven = () => {
  gameEngine(gameIntroduction, getQa);
};

export default gameEven;
