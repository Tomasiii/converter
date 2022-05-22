const addZero = (arg: string | number) => `0${arg}`.slice(-2);

const normalize = (time: Date) =>
  time.getFullYear() +
  "-" +
  addZero(time.getMonth() + 1) +
  "-" +
  addZero(time.getDate());

export const nowDate = () => {
  const time = new Date();
  return normalize(time);
};

export const yearBeforeDate = () => {
  // api the maximum time difference is 365 days,  so minus the year
  const oneYearFromNow = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );
  return normalize(oneYearFromNow);
};

export const threeMonthBeforeDate = () => {
  const time = new Date(new Date().setMonth(new Date().getMonth() - 3));
  return normalize(time);
};

export const weekBeforeDate = () => {
  const time = new Date(new Date().setDate(new Date().getDate() - 7));
  return normalize(time);
};
