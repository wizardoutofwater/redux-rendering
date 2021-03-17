const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const values = [2,3,4,5,6,7,8,9,10,'A','K','Q','J'];
const suits = ['C','D','H','S'];

const randomValue = () => values[Math.floor(Math.random() * values.length)];
const randomSuit = () => suits[Math.floor(Math.random() * suits.length)];

const aCardBtn = document.getElementById('card1Button')
const bCardBtn = document.getElementById('card2Button')

aCardBtn.addEventListener("click", () => {
    console.log("button 1 pressed")

    dispatch({
        type: "RANDOM_CARD_A",
        newValue: randomValue(),
        newSuit: randomSuit()
    })
})

bCardBtn.addEventListener("click", () => {
    
    dispatch({
        type: "RANDOM_CARD_B",
        newValue: randomValue(),
        newSuit: randomSuit()
    })
})