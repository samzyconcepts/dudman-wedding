import { useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component
import Navbar from './component/Navbar';
import Home from './Pages/Home';

function App() {
  const info = useRef(null);
  const story = useRef(null);
  const party = useRef(null);
  const gallery = useRef(null);
  const home = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='App'>
      <Router>
        <Navbar
          func={scrollToSection}
          info={info}
          story={story}
          party={party}
          gallery={gallery}
          home={home}
        />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                info={info}
                story={story}
                party={party}
                gallery={gallery}
                home={home}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
