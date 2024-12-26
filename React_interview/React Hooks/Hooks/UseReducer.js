import React, { useReducer } from "react";

{
  /* <h6>What is useReducer Hook?</h6>
 <p>
 It is used to manage state in our react application. useReducer is
 based on the concept of reducers, it is similar to how state updates
 work in Redux. Use Reducer used when we have lot of state and methods
 to handle. It takes two arguments (reducer, intialState).
</p>        */
}

const UseReducer = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT": {
        return { count: state.count + 1 };
      }
      case "DECREMENT": {
        return { count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span className="mx-2">{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default UseReducer;
