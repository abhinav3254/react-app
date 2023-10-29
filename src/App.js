import './App.css';

const Person = () => {
  return (
    <>
      <h1>This is Person Component</h1>
      <h4>First Name : John</h4>
      <h4>Last Name : Doe</h4>
      <p>Age :- {22 + 2}</p>
    </>
  );
}

const App = () => {
  const name = "abhinav"
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      {/* importing Person component here */}
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}

export default App;
