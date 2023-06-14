import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import axios from "axios";
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

 function App() {  
  const [postado, setpostado] = useState(false);
  const [data, setData] = useState("");
  return (
    <>
      <div>
      </div>
     <button id='btnSaibaMais'>
     <Link to="/">Saiba Mais</Link>
      </button>
    </>
  );
}

export default App;
