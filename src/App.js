import './App.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function App() {
  const [text] = useTypewriter({
    words: ['Coming Soon...'],
    loop: {},
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          {text}
          <span>
            <Cursor />
          </span>
        </h1>
      </header>
    </div>
  );
}

export default App;
