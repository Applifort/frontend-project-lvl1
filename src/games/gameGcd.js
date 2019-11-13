import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

const getGcd = (a, b, i = b) => {
  if (a % i === 0 && b % i === 0) return i;
  const acc = i - 1;
  return getGcd(a, b, acc);
};

const getQuestion = () => {
  const firstNumber = letRandom(1, 50);
  const secondNumber = letRandom(1, 25);
  const answer = String(getGcd(firstNumber, secondNumber));
  return cons(`${firstNumber} ${secondNumber}`, answer);
};

const gameIntroduction = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
  gameEngine(gameIntroduction, getQuestion);
};

export default gameGcd;
