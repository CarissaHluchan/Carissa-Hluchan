import { Router, Route, Routes } from 'react-router-dom';

import Name from '../Name/Name';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/about" element={<About /> } />
        <Route path="contact" element={<Contact /> } />
        <Route path="skills" element={<Skills /> } />
        <Route path="projects" element={<Projects />} />
        {/* <Footer /> */}
      </Routes>
    </div>
  );
}

export default App;
