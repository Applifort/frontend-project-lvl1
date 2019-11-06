import { cons } from '@hexlet/pairs';
import { letRandom, isEven } from './mymath';

const gameEven = () => {
  const number = letRandom(0, 100);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return cons(number, rightAnswer);
};

export default gameEven;
