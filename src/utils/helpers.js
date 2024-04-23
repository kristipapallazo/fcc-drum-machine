export const getArrStore = (arr) => {
  const finalArr = [];
  for (let i = 0; i < arr.length; ) {
    const slice = arr.slice(i, i + 3);
    finalArr.push(slice);
    i += 3;
  }
  return finalArr;
};
