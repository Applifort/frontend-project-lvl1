import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

const getQuestion = () => {
  const question = letRandom(2, 500);
  let dividerCount = 0;
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) dividerCount += 1;
  }
  const answer = dividerCount === 0 ? 'yes' : 'no';
  return cons(question, answer);
};

const gameIntroduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  gameEngine(gameIntroduction, getQuestion);
};

export default gamePrime;
