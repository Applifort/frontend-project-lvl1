export const letRandom = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const isEven = (number) => number % 2 === 0;

export const nodAB = (a, b, i = b) => {
  if (a % i === 0 && b % i === 0) return i;
  const acc = i - 1;
  return nodAB(a, b, acc);
};
