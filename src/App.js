import './App.css';
import { Button } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import GlobalNavbar from './components/layout/GlobalNavbar';

function App() {
  return (
    <>
      <GlobalNavbar />
      <div className="w-full h-full bg-red"></div>
    </>
  );
}

export default App;
