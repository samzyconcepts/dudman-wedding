import { useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

// css
import './Home.css';

const Home = () => {
  const [text] = useTypewriter({
    words: [
      'We are getting married',
      'Celebrate with us',
      'Celebrating our wedding',
    ],
    loop: {},
  });

  return (
    <>
      <header id='home'>
        <div className='container'>
          <p>{text}</p>
          <h1>O&O</h1>
          <p>April 20, 2023 | Lagos, Nigeria</p>
        </div>
      </header>

      <section id='info'>
        <div className='container'>
          <div>
            <h3>
              We're really excited to see you, and hope you can join us for our
              special day!
            </h3>
            <Link to='#' className='btn btn-primary'>
              RSVP
            </Link>
          </div>
          <div>
            <div className='when'>
              <span>WHEN</span>
              <p>Thursday, April 20, 2023 @ 7:00am</p>
              <span>
                Engagement, Church joining and Reception follows at the Gallery
              </span>
            </div>
            <div className='where'>
              <span>WHERE</span>
              <p>
                CHRIST GOSPEL APOSTOLIC CHURCH (Chapel of Mercy/Oke Anu), 14,
                Holy Saviours College Road, Isolo, Lagos
              </p>
              <Link to='#'>Get Directions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
