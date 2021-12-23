import Game from './components/tictactoe';
import Counter from './components/counter';
import Input from './components/form';
import API from './components/api';

function App() {
  return (
    <div className='App'>
      <Game/>
      <Counter/>
      <Input/>
      <API/>
    </div>
  );
}

export default App;
