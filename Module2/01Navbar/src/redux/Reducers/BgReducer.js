const BgReducer = (state = { backgroundColor: 'grey'}, action ) => {
  if (action.type === "SET_BG_COLOR") {
    return {
      backgroundColor: action.payload,
    };
  }
  return state;
};

export default BgReducer;
