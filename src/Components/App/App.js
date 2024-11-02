import { useState } from 'react';
import { Route, Routes} from 'react-router-dom';

import Name from '../Name/Name';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  const [isLightMode, setLightMode] = useState(false);

  const root = document.getElementById('root');

  if (!isLightMode) {
    root.classList.add('dark');
  } else  {
    root.classList.remove('dark');
  };

  const handleClick = () => {
    setLightMode(prev => !prev);
  };

  return (
      <div className="App">
        <header className="header">
          <Name />
          <Nav isLightMode={isLightMode} handleClick={handleClick}/>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Name />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills isLightMode={isLightMode} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer isLightMode={isLightMode}/>
      </div>
  );
}

export default App;
