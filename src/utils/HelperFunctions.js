export const getDefaultDateValue = (pathname) => {
  const pointer = pathname.split("/")[2];
  let value;
  if (pointer === "today") {
    value = new Date();
  }
  return value;
};

export const getDefaultListValue = (pathname) => {
  const pointer = pathname.split("/")[3];
  return pointer;
};
