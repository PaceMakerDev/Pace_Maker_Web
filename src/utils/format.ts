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

export const transformSecondToTime = (totalTime: number): string => {
  let remainTime: number = totalTime;
  let hour: string;
  let minute: string;
  let second: string;

  let temp: number;

  temp = Math.floor(remainTime / 3600);
  if (temp < 10) {
    hour = `0${temp}`;
  } else {
    hour = temp.toString();
  }
  remainTime %= 3600;

  temp = Math.floor(remainTime / 60);
  if (temp < 10) {
    minute = `0${temp}`;
  } else {
    minute = temp.toString();
  }
  remainTime %= 60;

  temp = remainTime
  if (temp < 10) {
    second = `0${temp}`;
  } else {
    second = temp.toString();
  }

  return `${hour}:${minute}:${second}`;
};
