import { useState } from "react"



export default function Counter() {

    const [counter, setCounter] = useState(0);

    const incrementar = ( value: number = 1 ): void => {
        setCounter( counter + value );
    }

  return (
    <>
      <h2>Counter</h2>
      <span className="d-flex p-2">Value of Counter: { counter }</span>
      <button
        className="btn btn-primary me-3"
        onClick={ () => incrementar()}
      >
        + 1
      </button>
      <button
        className="btn btn-primary me-3"
        onClick={ () => incrementar(2)}
      >
        + 2
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={ () => setCounter(0)}
      >
        Reset
      </button>
    </>
  )
}
