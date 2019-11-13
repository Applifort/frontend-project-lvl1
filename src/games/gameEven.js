import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

const isEven = (number) => {
  const checkForEven = number % 2 === 0 ? 'yes' : 'no';
  return checkForEven;
};

const getQuestion = () => {
  const question = letRandom(0, 100);
  const answer = isEven(question);
  return cons(question, answer);
};

const gameIntroduction = 'Answer "yes" if the question is even, otherwise answer "no".';

const gameEven = () => {
  gameEngine(gameIntroduction, getQuestion);
};

export default gameEven;
