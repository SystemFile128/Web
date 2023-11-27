import logo from './logo.svg';
import './App.css';

function App() {
  const data = {
    name: "balli",
    rollno: 26,
    DAA: 70,
    CN: 80,
    WT: 70,
    SDM: 70,
    total: 0
  };
  function handleSubmit(e)
  {
    e.preventDefault();
    fetch("http://localhost:8080/student",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
     });
  }
     
  return (
    <div className="App">
     <button onClick={handleSubmit}>click</button> 
    </div>
  );
}

export default App;
