export {
  maxSearch,
  summary,
  average,
  getARandomNumber,
};

const maxSearch = (numbers: number[] = []): number => {
  return numbers.reduce((result: number, num: number): number => {
    return (result === null || num > result) ? num : result;
  }, null);
}

const summary = (numbers: number[] = []): number => {
  return numbers.reduce((acc: number, curr: number): number => acc + curr, 0);
};

const average = (numbers: number[] = []): number => {
  return summary(numbers) / numbers.length;
};

const getARandomNumber = (min: number = 0, max: number = 1): number => {
  return Math.random() * (max - min) + min;
}