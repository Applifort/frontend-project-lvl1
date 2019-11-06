import { cons } from '@hexlet/pairs';
import { letRandom, nodAB } from './mymath';

const gameGcd = () => {
  const a = letRandom(1, 50);
  const b = letRandom(1, 25);
  const result = nodAB(a, b);
  return cons(`${a} ${b}`, String(result));
};

export default gameGcd;
