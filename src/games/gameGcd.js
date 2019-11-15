import { cons } from '@hexlet/pairs';
import letRandom from '../utils';
import gameEngine from '..';

const gameIntroduction = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return getGcd(num2, num1 % num2);
};

const getQa = () => {
  const num1 = letRandom(1, 50);
  const num2 = letRandom(1, 25);
  const answer = String(getGcd(num1, num2));
  const question = `${num1} ${num2}`;
  return cons(question, answer);
};

export default () => gameEngine(gameIntroduction, getQa);
