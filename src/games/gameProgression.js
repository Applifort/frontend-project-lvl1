import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

const getQuestion = () => {
  const arr = [];
  arr[0] = letRandom(1, 20);
  const valueOfProgression = letRandom(1, 10);
  const elementToHide = letRandom(3, 9);
  let question = `${arr[0]}`;
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + valueOfProgression;
    if (i !== elementToHide) {
      question = `${question} ${arr[i]}`;
    } else question = `${question} ..`;
  }
  const answer = String(arr[elementToHide]);
  return cons(question, answer);
};

const gameIntroduction = 'What number is missing in the progression?';

const gameProgression = () => {
  gameEngine(gameIntroduction, getQuestion);
};

export default gameProgression;
