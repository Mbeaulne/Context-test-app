const initialState = { count: 0 };

export default (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1 + action.payload.status };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
