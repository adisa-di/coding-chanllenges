import Game from './components/game/tictactoe';
import TicTacToe from './components/game/game-v2';
import Counter from './components/counter';
import Input from './components/form';
import API from './components/api';
import { FocusInput, FocusRef } from './components/refs';
import { ReduceCount, AnotherCount } from './components/reducers';

function App() {
  return (
    <div className='App'>
      <Game/>
      <TicTacToe/>
      {/* <Counter/>
      <Input/>
      <API/>
      <FocusInput/>
      <FocusRef />
      <ReduceCount />
      <AnotherCount initCount={4}/> */}
    </div>
  );
}

export default App;
