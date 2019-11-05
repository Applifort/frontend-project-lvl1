export const letRandom = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const isEven = (number) => number % 2 === 0;

export const BoolAnswer = (answer) => {
  switch (answer) {
    case 'no':
    case 'No': return false;
    case 'yes':
    case 'Yes': return true;
    default: return null;
  }
};

export const correctAnswer = (number) => {
  const answer = isEven(number) ? 'yes' : 'No';
  return answer;
};
