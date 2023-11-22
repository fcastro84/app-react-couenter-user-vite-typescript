import Counter from './components/Counter';
import User from './components/User';

import TimerParent from './components/TimerParent';

import CounterRed from './components/CounterRed';

import Formulario from './components/Formulario';
import Formulario2 from './components/Formulario2';


function App() {

  return (
    <>
      <h1>Vite + React + TS</h1>
      <hr />
      <h2> useState </h2>
      <Counter />
      <User />

      <h2 className='mt-4'> useEffect - useRef </h2>
      <hr />

      <TimerParent />

      <h2 className='mt-4'> useReducer </h2>
      <hr />

      <CounterRed />

      <h2 className='mt-4'> customHooks </h2>
      <hr />

      <Formulario />
      <br />
      <br />
      <Formulario2 />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default App
