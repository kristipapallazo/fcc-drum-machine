export const getItemTitle = (url) => {
  const i = url.lastIndexOf("/") + 1;
  const j = url.lastIndexOf(".");
  const title = url.slice(i, j);
  return title;
};
