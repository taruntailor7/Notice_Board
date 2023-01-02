import './App.css';
import { Login } from './Components/Login';
import { Notice } from './Components/Notice';

function App() {
  let username = JSON.parse(localStorage.getItem("username")) || null;

  return (
    <>
      {username ? <Notice /> : <Login />}
    </>
  );
}

export default App;
