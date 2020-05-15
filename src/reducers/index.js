import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../reducers'

const reducer = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case ADD_ITEM:
      return [{ ...data }, ...state];
    case UPDATE_ITEM:
      return state.map(item => item.key === data.key ? { ...data } : item);
    case DELETE_ITEM:
      return state.filter(item => item.key !== data.key);
    default:
      return state;
  }
}

export default reducer;