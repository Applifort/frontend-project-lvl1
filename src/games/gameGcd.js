import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

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

const gameIntroduction = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
  gameEngine(gameIntroduction, getQa);
};

export default gameGcd;
