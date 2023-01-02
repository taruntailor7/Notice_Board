/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react'
import './App.css';
import { Login } from './Components/Login';
import { Notice } from './Components/Notice';

function App() {
  let username = JSON.parse(localStorage.getItem("username")) || null;

  useEffect(()=>{

  },[username])

  return (
    <>
      {username ? <Notice /> : <Login />}
    </>
  );
}

export default App;
