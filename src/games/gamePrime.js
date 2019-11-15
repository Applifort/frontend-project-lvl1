import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  } return true;
};

const getQa = () => {
  const question = letRandom(2, 500);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const gameIntroduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  gameEngine(gameIntroduction, getQa);
};

export default gamePrime;
