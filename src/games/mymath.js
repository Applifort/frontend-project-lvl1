export const letRandom = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const isEven = (number) => number % 2 === 0;
