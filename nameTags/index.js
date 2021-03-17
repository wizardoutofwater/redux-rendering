const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

document.getElementById("nameForm").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.name.value);

  let action = {
    type: "ADD_NAMETAG",
    newName: event.target.name.value,
  };

  dispatch(action);
});
