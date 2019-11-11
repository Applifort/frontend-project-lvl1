import { cons } from '@hexlet/pairs';
import letRandom from '../mymath';
import gameEngine from '..';

const gameGenerator = () => {
  const arr = [];
  arr[0] = letRandom(1, 20);
  const volOfProg = letRandom(1, 10);
  const elementOfHide = letRandom(3, 9);
  let progMiss = `${arr[0]}`;
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + volOfProg;
    if (i !== elementOfHide) {
      progMiss = `${progMiss} ${arr[i]}`;
    } else progMiss = `${progMiss} ..`;
  }
  const hiddenElement = arr[elementOfHide];
  return cons(progMiss, String(hiddenElement));
};

const gameProgression = () => {
  const gameIntroduction = 'What number is missing in the progression?';
  gameEngine(gameIntroduction, gameGenerator);
};

export default gameProgression;
