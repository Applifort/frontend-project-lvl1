import { cons } from '@hexlet/pairs';
import { letRandom } from './mymath';

const gameCalc = () => {
  const a = letRandom(0, 100);
  const b = letRandom(0, 10);
  const v = letRandom(1, 3);
  let stringExpr = null;
  let resultExpr = null;
  switch (v) {
    case 1:
      stringExpr = `${a} + ${b}`;
      resultExpr = a + b;
      break;
    case 2:
      stringExpr = `${a} * ${b}`;
      resultExpr = a * b;
      break;
    default:
      stringExpr = `${a} / ${b}`;
      resultExpr = a / b;
  }
  return cons(stringExpr, String(resultExpr));
};

export default gameCalc;
