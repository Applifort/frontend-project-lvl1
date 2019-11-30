import readlineSync from 'readline-sync';
import calc from './games/calc';
import even from './games/even';
import gcd from './games/gcd';
import prime from './games/prime';
import progression from './games/progression';

const games = {
  calc: () => calc(),
  even: () => even(),
  gcd: () => gcd(),
  prime: () => prime(),
  progression: () => progression(),
};

export default () => {
  const gameIndex = readlineSync.keyInSelect(Object.keys(games), 'Which game we want to play?');
  if (gameIndex === -1) return console.log('Exit');
  const chosenGame = Object.keys(games)[gameIndex];
  console.log(`Awesome! We gonna play ${chosenGame} game!`);
  return games[chosenGame]();
};
