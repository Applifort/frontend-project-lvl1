import { cons } from '@hexlet/pairs';
import { l, random } from '@hexlet/pairs-data';
import letRandom from '../mymath';
import gameEngine from '..';


const getQuestion = () => {
  const firstNumber = letRandom(0, 100);
  const secondNumber = letRandom(0, 10);
  const expressionsList = l('+', '/', '*');
  const expression = random(expressionsList);
  let answer = null;
  switch (expression) {
    case '+':
      answer = String(firstNumber + secondNumber);
      break;
    case '*':
      answer = String(firstNumber * secondNumber);
      break;
    default:
      answer = String(firstNumber / secondNumber);
  }
  const question = `${firstNumber} ${expression} ${secondNumber}`;
  return cons(question, answer);
};

const gameIntroduction = 'What is the result of the expression?';

const gameCalc = () => gameEngine(gameIntroduction, getQuestion);

export default gameCalc;
