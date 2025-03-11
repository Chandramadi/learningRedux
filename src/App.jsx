import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './slices/counterSlice';
import { useState } from 'react';

function App() {

  const count = useSelector(state=>state.counter.value);

// Here the counter is the store name.
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  function incrementCount() {
    dispatch(increment()) // calling the action
  }

  function decrementCount() {
    dispatch(decrement()); // calling the action
  }

  function resetCount() {
    dispatch(reset()) // calling the action
  }

  function setInputValue(e) {
    setInput(e.target.value);
  }

  function incrementByValue() {
    const inputValue = Number(input);
    if(inputValue!==NaN && inputValue!==0) {
      dispatch(incrementByAmount(inputValue));
    }
    setInput('');
  }

  return (
    <div>
      <button onClick={incrementCount}> Increment</button>
      <p>count : {count}</p>
      <button onClick={decrementCount}> Decrement </button>
      <button onClick={resetCount}>Reset</button>
      <input
        value={input}
        type="number"
        onChange={setInputValue}
        placeholder='Enter the count'
      />
      <button onClick={incrementByValue}>Submit the Value</button>
    </div>
  )

}

export default App;