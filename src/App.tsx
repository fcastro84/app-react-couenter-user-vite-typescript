import Counter from './components/Counter';
import User from './components/User';

import TimerParent from './components/TimerParent';


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
    </>
  )
}

export default App
