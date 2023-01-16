const loadMoreUtil = (container, data, count) => {
  let end = data.length > count + 8 ? count + 8 : data.length;
  createList(container, data.slice(count, end));
  return end;
};
