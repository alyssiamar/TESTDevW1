import logo from './logo.svg';
import './App.css';
import "@fontsource/rubik";
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Triton Software Engineering
        </p>
        <a
          className="App-link"
          href="https://tritonse.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow TSE!
        </a>
        <div>
          <MyButton/>
        </div>
      </header>
    </div>
  );
}

function MyButton({}){
  //const [count, setCount] = useState(0);

  function handleButtonClick() {
    //setCount(count + 1);
    window.location.href = 'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg';
  };

  <button onClick={handleButtonClick}>
      Clicked on Me!
    </button>
}

export default App;