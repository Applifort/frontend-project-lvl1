import { cons } from '@hexlet/pairs';
import letRandom from '../utils';
import gameEngine from '..';

const gameIntroduction = 'What number is missing in the progression?';

const progressionLength = 10;

const getQustionAndAnswer = () => {
  const startElement = letRandom(1, 20);
  const incrimentValue = letRandom(1, 10);
  const hiddenIndex = letRandom(3, 9);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== hiddenIndex) {
      const nextElement = startElement + incrimentValue * i;
      question = `${question} ${nextElement}`;
    } else question = `${question} ..`;
  }
  const answer = String(startElement + incrimentValue * hiddenIndex);
  return cons(question, answer);
};

export default () => gameEngine(gameIntroduction, getQustionAndAnswer);
