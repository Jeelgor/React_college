import * as React from "react";

const initialState = {
  options: [
    { id: 1, name: "car", value: 20 },
    { id: 2, name: "plane", value: 70 },
    { id: 3, name: "apple", value: 90 },
    { id: 4, name: "toy", value: 80 },
  ],
  quantity: 1,
  selected: 1,
};


function reduceButtonState(state) {
  return {
    ...state,
    decrementDisabled: state.quantity === 1,
    incrementDisabled: state.quantity === 10, 
  };
}

function reduceTotal(state) {
  const option = state.options.find((opt) => opt.id === state.selected);
  return { ...state, total: state.quantity * (option ? option.value : 0) };
}

function reducer(state, action) {
  let newState;
  switch (action.type) {
      case "init":
        newState = reduceTotal(state);
        return reduceButtonState(newState);
    case "decrementQuantity":
      newState = { ...state, quantity: Math.max(state.quantity - 1, 1) };
      newState = reduceTotal(newState);
      return reduceButtonState(newState);
    case "incrementQuantity":
      newState = { ...state, quantity: Math.min(state.quantity + 1, 10) };
      newState = reduceTotal(newState);
      return reduceButtonState(newState);
    case "selectItem":
      newState = { ...state, selected: Number(action.id) };
      return reduceTotal(newState);
    default:
      return state;
  }
}

export default function RedEx2() {
  const [
    { options, selected, quantity, total, decrementDisabled, incrementDisabled },
    dispatch,
  ] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    dispatch({ type: "init" });
  }, []);

  return (
    <>
      <section>
        <button
          disabled={decrementDisabled}
          onClick={() => dispatch({ type: "decrementQuantity" })}
        >
          -
        </button>
        <button
          disabled={incrementDisabled}
          onClick={() => dispatch({ type: "incrementQuantity" })}
        >
          +
        </button>
        <input readOnly value={quantity} />
      </section>
      <section>
        <select
          value={selected}
          onChange={(e) =>
            dispatch({
              type: "selectItem",
              id: e.target.value,
            })
          }
        >
          {options.map((i) => (
            <option key={i.id} value={i.id}>
              {i.name}
            </option>
          ))}
        </select>
        {total}
      </section>
    </>
  );
}
