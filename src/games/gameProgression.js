import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

const getQa = () => {
  const boxOfNumbers = [];
  boxOfNumbers[0] = letRandom(1, 20);
  const valueOfProgression = letRandom(1, 10);
  const elementToHide = letRandom(3, 9);
  const quantityOfElements = 10;
  let question = `${boxOfNumbers[0]}`;
  for (let i = 1; i < quantityOfElements; i += 1) {
    boxOfNumbers[i] = boxOfNumbers[0] + valueOfProgression * i;
    if (i !== elementToHide) {
      question = `${question} ${boxOfNumbers[i]}`;
    } else question = `${question} ..`;
  }
  const answer = String(boxOfNumbers[elementToHide]);
  return cons(question, answer);
};

const gameIntroduction = 'What number is missing in the progression?';

const gameProgression = () => {
  gameEngine(gameIntroduction, getQa);
};

export default gameProgression;
