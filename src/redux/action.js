export const setData = (data) => ({
  type: 'SET-DATA',
  payload: data,
});

export const removeCard = (id) => ({
  type: 'REMOVE-CARD',
  payload: id,
});
