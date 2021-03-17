const initialState = ["Kamilah", "Stuart"];

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  const { type, newName } = action;

  if (type === "ADD_NAMETAG") {
    return [...state, newName];
  }
  return state;
};
