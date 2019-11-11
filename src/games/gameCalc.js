import { cons } from '@hexlet/pairs';
import letRandom from './mymath';
import gameEngine from '..';

const gameGenerator = () => {
  const a = letRandom(0, 100);
  const b = letRandom(0, 10);
  const v = letRandom(1, 3);
  let stringExpr = null;
  let resultExpr = null;
  switch (v) {
    case 1:
      stringExpr = '+';
      resultExpr = a + b;
      break;
    case 2:
      stringExpr = '*';
      resultExpr = a * b;
      break;
    default:
      stringExpr = '/';
      resultExpr = a / b;
  }
  return cons(`${a} ${stringExpr} ${b}`, String(resultExpr));
};

const gameCalc = () => {
  const gameIntroduction = 'What is the result of the expression?';
  gameEngine(gameIntroduction, gameGenerator);
};

export default gameCalc;
