import { cons } from '@hexlet/pairs';
import { l, random } from '@hexlet/pairs-data';
import letRandom from '../utils';
import gameEngine from '..';

const gameIntroduction = 'What is the result of the expression?';

const operatorsList = l('+', '/', '*');

const getQuestionAndAnswer = () => {
  const num1 = letRandom(0, 100);
  const num2 = letRandom(0, 10);
  const operator = random(operatorsList);
  let answer;
  switch (operator) {
    case '+':
      answer = String(num1 + num2);
      break;
    case '*':
      answer = String(num1 * num2);
      break;
    case '/':
      answer = String(num1 / num2);
      break;
    default:
      return false;
  }
  const question = `${num1} ${operator} ${num2}`;
  return cons(question, answer);
};

export default () => gameEngine(gameIntroduction, getQuestionAndAnswer);
