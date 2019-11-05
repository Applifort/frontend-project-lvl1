import readlineSync from 'readline-sync';

const actual = () => readlineSync.question('May I have your name? ');
export default actual;

export const inputAnswer = () => readlineSync.question('Your answer: ');
