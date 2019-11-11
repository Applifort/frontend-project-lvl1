import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

const nodAB = (a, b, i = b) => {
  if (a % i === 0 && b % i === 0) return i;
  const acc = i - 1;
  return nodAB(a, b, acc);
};

const gameGenerator = () => {
  const a = letRandom(1, 50);
  const b = letRandom(1, 25);
  const result = nodAB(a, b);
  return cons(`${a} ${b}`, String(result));
};

const gameGcd = () => {
  const gameIntroduction = 'Find the greatest common divisor of given numbers.';
  gameEngine(gameIntroduction, gameGenerator);
};

export default gameGcd;
