export const createBirthdayFormat = (year: string, month: string, day: string): string => {
  let result = year;

  if (parseInt(month) < 10) {
    result += `-0${month}`;
  } else {
    result += `-${month}`;
  }

  if (parseInt(day) < 10) {
    result += `-0${day}`;
  } else {
    result += `-${day}`;
  }

  return result;
};