import { useTypewriter} from 'react-simple-typewriter';

// css
import './Home.css';

const Home = () => {
  const [text] = useTypewriter({
    words: ['We are getting married', 'Celebrate with us', 'Celebrating our wedding'],
    loop: {},
  });

  return (
    <header id='home'>
      <div className='container'>
        <p>{text}</p>
        <h1>O&O</h1>
        <p>April 20, 2023 | Lagos, Nigeria</p>
      </div>
    </header>
  );
};

export default Home;
