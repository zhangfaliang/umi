const randomDate = () =>
  new Date(Date.parse(new Date()) + ~~(Math.random() * 315360000000)).toDateString();

export const GAME_CATEGORY_BY_DATE = Array.from({ length: 30 }, _ => ({
  date: randomDate(),
  count: Math.floor(Math.random() * 100),
}));
