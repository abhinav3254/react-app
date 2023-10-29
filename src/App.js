import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>This is Person Component</h1>
      <h4>First Name : {props.name}</h4>
      <h4>Last Name : {props.last}</h4>
      <p>Age :- {props.age}</p>
    </>
  );
}

const App = () => {
  const name = "abhinav"
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      {/* importing Person component here */}
      <Person name={'Abhinav'} last={'Jha'} age={24} />
      <Person name={'Kushi'} last={'Jha'} age={24} />
      <Person name={'Alice'} last={'Smith'} age={28} />
      <Person name={'Michael'} last={'Brown'} age={35} />
      <Person name={'Emma'} last={'Johnson'} age={24} />
    </div>
  );
}

export default App;
