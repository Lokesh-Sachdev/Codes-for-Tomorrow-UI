const initialState = {
  data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-DATA':
      return { ...state, data: action.payload };
    case 'REMOVE-CARD':
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
