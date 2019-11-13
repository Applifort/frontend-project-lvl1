import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

const getGcd = (num1, num2, i = num2) => {
  if (num1 % i === 0 && num2 % i === 0) return i;
  const acc = i - 1;
  return getGcd(num1, num2, acc);
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
