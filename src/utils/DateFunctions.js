const today = new Date();
const todayDay = today.getDate();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();

export const displayDate = (date) => {
  return date.toLocaleString("default", {
    month: "short",
    day: "numeric",
    weekday: "short",
  });
};

export const inputDate = (date) => {
  const locDate = date
    .toLocaleString("default", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
    .split("/");

  [locDate[0], locDate[locDate.length - 1]] = [
    locDate[locDate.length - 1],
    locDate[0],
  ];

  return locDate.join("-");
};

// export const listDate = (date) => {
//   return new Date(date)
// }

export const filterToday = (date) => {
  if (
    date.getDate() === todayDay &&
    date.getMonth() === todayMonth &&
    date.getFullYear() === todayYear
  )
    return true;
  return false;
};

export const filterTomorrow = (date) => {
  if (date.getDate() === todayDay + 1 && date.getMonth() === todayMonth)
    return true;
  if (date.getDate() === 1 && date.getMonth() === todayMonth + 1) return true;
  if (
    date.getDate() === 1 &&
    date.getMonth() === 0 &&
    date.getFullYear() === todayYear + 1
  )
    return true;
  return false;
};

export const filterWeek = (date) => {
  if (
    date.getDate() <= todayDay + 7 &&
    date.getMonth() === todayMonth &&
    date.getFullYear() === todayYear
  )
    return true;
  if (
    date.getDate() <= 7 &&
    date.getMonth() === todayMonth + 1 &&
    date.getFullYear() === todayYear
  )
    return true;
  if (
    date.getDate() <= 7 &&
    date.getMonth() === 0 &&
    date.getFullYear() === todayYear + 1
  )
    return true;
  return false;
};
