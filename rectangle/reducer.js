const initialState = {
  width: 100,
  height: 200,
  color: "#FF00FF",
};

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  const { type } = action;
  switch (type) {
    case "CHANGE_SIZE": // Trying to shrink to one case"update rectangle" or two "change size" + "change Color"
    console.log(action)  ;
    return {
        ...state,
        [action.payload.attr]:
          state[action.payload.attr] + action.payload.value,
      };
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.payload.color,
      };

    default:
      return state;
  }
};

