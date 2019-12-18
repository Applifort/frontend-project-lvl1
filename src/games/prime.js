import { cons } from '@hexlet/pairs';
import letRandom from '../utils';
import gameEngine from '..';

const gameIntroduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  const maxPossibleDevider = number / 2;
  for (let i = 2; i <= maxPossibleDevider; i += 1) {
    if (number % i === 0) return false;
  } return true;
};

const getQuestionAndAnswer = () => {
  const question = letRandom(2, 500);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => gameEngine(gameIntroduction, getQuestionAndAnswer);
