import { cons } from '@hexlet/pairs';
import letRandom from '../utils';
import gameEngine from '..';

const gameIntroduction = 'Answer "yes" if the question is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = letRandom(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => gameEngine(gameIntroduction, getQuestionAndAnswer);
