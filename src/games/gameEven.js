import { letRandom, isEven, BoolAnswer, correctAnswer } from '../mymath';
import { inputAnswer } from '..';

const gameEven = (name = 'Гость') => {
  for (let i = 0; i < 3; i += 1) {
    const number = letRandom(0, 100);
    console.log(`question: ${number}`);
    const answer = inputAnswer();
    if (isEven(number) !== BoolAnswer(answer)) {
      console.log(`${answer} is wrong answer;(. Correct answer was ${correctAnswer(number)}`);
      console.log(`Let's try again, ${name}`);
      return gameEven(name);
    } console.log('Correct!');
  } return console.log(`Congratulations, ${name}!`);
};

export default gameEven;
