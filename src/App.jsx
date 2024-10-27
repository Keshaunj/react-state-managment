// src/App.jsx
import { useState } from 'react';
import './App.css';

// const App = () => {
 


// const [isDarkMode, setIsDarkMode] = useState(true)

// console.log("Our IsDarkMode state value is:", isDarkMode);
// return (

//   <div className= { isDarkMode ===true ? "dark" : "Light"}>

//     {/*           */}

//     <h1> Hello World!</h1>

//   </div>
// );
// };

// const [employee, setemployee] = useState({
//   firstName: 'keshaun',
//   lastName: 'jones',
//   age: 26,
//   hasPets: true,
//   console.log("The employee state value is",employee)
//   return (
//     <div className={isDarkMode === true ? "dark" : "light"}>
//   <h1> Hello Moto!</h1>  
//   <p>{renderedMessage}</p>
//   </div>
//   )
// });

 
// src/App.jsx


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
const [counter,setCounter] = useState("Light")

  // placeholder function for handling mode changes
  // we'll implement the functionality in the next step
  const handleDarkMode = () => {
    // TODO: implement the logic to handle a user clicking the dark mode button
    console.log('Dark Mode!');
  };

  const handleLightMode = () => {
    // TODO: implement the logic to handle a user clicking the light mode button
    console.log('Light Mode!');
  };

  // add a new div with buttons inside
  // wrap both divs in a fragment
  return (
    <>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <h1>Hello world!</h1>
      </div>
      <div>
        <button onClick{()=> setCounter(counter +1)}>count</button>
        <button onClick={handleDarkMode}>Dark Mode</button>
        <button onClick={handleLightMode}>Light Mode</button>
      </div>
    </>
  );
};

export default App;



