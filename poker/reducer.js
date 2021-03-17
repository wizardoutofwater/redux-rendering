const initialState = [
  {
    value: "K",
    suit: "C",
  },
  {
    value: "K",
    suit: "D",
  },
];

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  const { type, newValue, newSuit } = action;

  switch (type) {
    case "RANDOM_CARD_A":
      return [
        {
          value: newValue,
          suit: newSuit,
        },
        ...state.slice(1),
      ]

    case "RANDOM_CARD_B":
      return [
        ...state.slice(0, 1),
        {
          value: newValue,
          suit: newSuit,
        },
      ]
    default:
      return state;
  }
};


