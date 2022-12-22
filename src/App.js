import './App.css';
import { Button } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import GlobalNavbar from './components/layout/GlobalNavbar';
import Home from './components/main/Home';
import Testimonials from './components/main/Testimonials';
import Available from './components/main/Available';
import About from './components/main/About';

function App() {
  return (
    <>
      <GlobalNavbar />
      <main>
        <Routes>
          <Route index path="/Home" element={<Home />} />
          <Route path="/Available" element={<Available />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
