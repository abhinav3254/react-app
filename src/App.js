import { useState } from 'react';
import './App.css';

// const Person = (props) => {
//   return (
//     <>
//       <h1>This is Person Component</h1>
//       <h4>First Name : {props.name}</h4>
//       <h4>Last Name : {props.last}</h4>
//       <p>Age :- {props.age}</p>
//     </>
//   );
// }

const App = () => {
  const name = "abhinav"
  // whenever we create a function and it's name start with use we call it as hook
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>-</button>
      {/* importing Person component here */}
      {/* <Person name={'Abhinav'} last={'Jha'} age={24} />
      <Person name={'Kushi'} last={'Jha'} age={24} />
      <Person name={'Alice'} last={'Smith'} age={28} />
      <Person name={'Michael'} last={'Brown'} age={35} />
      <Person name={'Emma'} last={'Johnson'} age={24} /> */}
    </div>
  );
}

export default App;
