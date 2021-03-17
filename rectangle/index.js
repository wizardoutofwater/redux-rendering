const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

const widthBtn = document.getElementById("width");
const heightBtn = document.getElementById("height");
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");

// +10 Width
widthBtn.addEventListener("click", () => {
  console.log("WIDE");
  let action = {
    type: "CHANGE_SIZE",
    payload: {
      attr: "width",
      value: 10,
    },
  };
  dispatch(action);
});
// +10 Height
heightBtn.addEventListener("click", () => {
  console.log("HIGH");
  let action = {
    type: "CHANGE_SIZE",
    payload: {
      attr: "height",
      value: 10,
    },
  };
  dispatch(action);
});
// Change Color - Red
redBtn.addEventListener("click", () => {
  console.log("RED");
  let action = {
    type: "CHANGE_COLOR",
    payload: {
      color: "red",
    },
  };
  dispatch(action);
});
// Change Color - Blue
blueBtn.addEventListener("click", () => {
  console.log("BLUE");
  let action = {
    type: "CHANGE_COLOR",
    payload: {
      color: "blue",
    },
  };
  dispatch(action);
});
