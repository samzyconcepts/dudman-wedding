import { useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

// css
import './Home.css';

const Home = ({ info, story, gallery, party, home }) => {
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
      <header ref={home} id='home'>
        <div className='container'>
          <p>{text}</p>
          <h1>O&O</h1>
          <p>April 20, 2023 | Lagos, Nigeria</p>
        </div>
      </header>

      <section ref={info} id='info'>
        <div className='container'>
          <div className='rsvp'>
            <h3>
              We're really excited to see you, and hope you can join us for our
              special day!
            </h3>
            <Link to='#' className='btn btn-primary'>
              RSVP
            </Link>
          </div>
          <div className='detail'>
            <div className='when'>
              <span>WHEN</span>
              <p>Thursday, April 20, 2023 @ 7:00am</p>
              <p>
                Engagement, Church joining and Reception follows at the Gallery
              </p>
            </div>
            <div className='where'>
              <span>WHERE</span>
              <p>
                CHRIST GOSPEL APOSTOLIC CHURCH (Chapel of Mercy/Oke Anu), 14,
                Holy Saviours College Road, Isolo, Lagos
              </p>
              <Link to='/location'>Get Directions</Link>
            </div>
            <div className='dress'>
              <span>DRESS CODE</span>
              <p>White, Purple and Magenta</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={story} id='story'>
        <div className='container'>
          <h3>A BRIEF HISTORY OF LOVE</h3>
          <p className='story'>
            Oluwaseun and I met during my ND days in 2013. He just handed over
            as an exco in my campus fellowship CGACCF (Christ Gospel Apostolic
            Campus Fellowship). We hardly talk🤷🏿‍♀️ wetin I wan dey follow MOG a
            whole BABA DRAMA talk🤣. It was just greeting, no exchange of
            contacts. <br />
            Fast forward to 2015. I sent him msg on facebook saying "Ogami
            Sir"(I can't disrespect man of God now🤣🤣) and he replied with
            "Sister Timi Of God" 🤣🤣🤣. <br />
            We started chatting, talked at length so I told him about my fashion
            designing work and he promised to snap me for FREE, also helped with
            social media contents and extra tips to grow my fashion designing
            business (Very generous right🤭😊) We were friends for a while
            before I agreed to be his girlfriend in 2016. <br />
            N:B- Baba toasted me low-key😉 I told him I am his sister and he
            shouldn't think of such again. 🤷🏿‍♀️ baba was shy to talk to me again
            for few days. He later sent his friend emmanuel to me🤣🤣🤣😫And me
            as the hard girl!hard girl I sent emmy back and told him to tell dud
            to come back by himself this was in March 2016. Baba didn't say
            anything for a while o (I guess he was practicing how he would
            express himself🤣🤣🤪🤪). <br />
            To cut the long story short. April 9, 2016 I agreed to be his
            girlfriend (drumrolls💃) I said girlfriend "Not Wife"🤣🤣we didn't
            see each other through out a year ( It was a long distance
            relationship😫🤦🏿‍️) . <br />
            We finally saw each other in 2017 when we gained admission for our
            HND. While in school it wasn't smooth but this guy pulled me
            through! We had to struggle together to pay our school fees! Gather
            my friends to snap passport from him just to sustain ourselves on
            campus. I respect this guy on how he balanced his duty as an exco
            again in the fellowship with his side hustle (He's so dedicated and
            good at what he does 🙌🏿🙌🏿). <br />
            7yrs ago, I started this beautiful journey with my DUD and now we
            are taking it to forever💕💕..... <br />
            STIMMY and Dudman are getting married.... <br /> <br />
            <span>
              #Sti'Dud <br />
              #Dud'Sti In Love <br />
              #Thefashiondesignerandphotographerlovestory
            </span>
          </p>
        </div>
      </section>

      <section ref={party} className='party'>
        <div className='container'>
          <div className='box'>
            <div className='img'>
              <img src='./img/damilola.JPG' alt='Olaseni Damilola' />
            </div>
            <div className='text'>
              <span className='title'>BEST LADY</span>
              <p>Olaseni Damilola</p>
            </div>
          </div>

          <div className='box'>
            <div className='img'>
              <img src='./img/bukola.JPG' alt='Badejo Bukola' />
            </div>
            <div className='text'>
              <span className='title'>BRIDES MAID</span>
              <p>Badejo Bukola</p>
            </div>
          </div>

          <div className='box'>
            <div className='img'>
              <img src='./img/naomi.jpg' alt='Asala Naomi' />
            </div>
            <div className='text'>
              <span className='title'>BRIDES MAID</span>
              <p>Asala Naomi</p>
            </div>
          </div>

          <div className='box'>
            <div className='img'>
              <img src='./img/blessing.jpg' alt='Sonoiki Blessing' />
            </div>
            <div className='text'>
              <span className='title'>BRIDES MAID</span>
              <p>Sonoiki Blessing</p>
            </div>
          </div>

          <div className='box'>
            <div className='img'>
              <img src='./img/pelumi.jpg' alt='Afolabi Pelumi' />
            </div>
            <div className='text'>
              <span className='title'>BRIDES MAID</span>
              <p>Afolabi Pelumi</p>
            </div>
          </div>

          <div className='box'>
            <div className='img'>
              <img src='./img/progress.jpg' alt='Adeparusi Progress' />
            </div>
            <div className='text'>
              <span className='title'>BRIDES MAID</span>
              <p>Adeparusi Progress</p>
            </div>
          </div>
        </div>
      </section>
      <section ref={gallery} className='gallery'>
        <div className='container'>
          <div className='img-grid'>
            <img src='./img/IMG_8523.jpg' alt='' />
            <img src='./img/IMG_8529.jpg' alt='' />
            <img src='./img/IMG_8559.jpg' alt='' />
            <img src='./img/IMG_8565.jpg' alt='' />
            <img src='./img/IMG_8592.jpg' alt='' />
            <img src='./img/IMG_8594.jpg' alt='' />
          </div>
          {/* <Link>See More...</Link> */}
        </div>
      </section>

      <footer>
        <div className='container'>
          <p className='l-heading'>
            In lieu of gifts, we would greatly appreciate if they could be
            converted into monetary donations.
          </p>
          <div className='line'></div>
          <h3>O&O</h3>
          <span>April 20, 2023 </span>
        </div>
        <div className='container-lg'>
          <p>
            <span> #Sti'Dud </span>
            <span>#Dud'Sti In Love </span>
            <span>#Thefashiondesignerandphotographerlovestory</span>
          </p>
          <p>
            Created with ❤️ by <b>Samzy</b>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
