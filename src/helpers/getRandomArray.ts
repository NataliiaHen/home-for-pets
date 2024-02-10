import { Pet } from '../types/Pet';

export const getRandomArray = (arr: Pet[], length: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  const limit = arr.length < length ? arr.length : length;

  return shuffled.slice(0, limit);
};
