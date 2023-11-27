import logo from './logo.svg';
import './App.css';
import { NavBar } from './layout/navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Items } from './pages/Items';
import { AllItems } from './pages/Allitems';
import { Bill } from './pages/Bill';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<></>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/allitems' element={<AllItems/>}/>
        <Route path='/bill' element={<Bill/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
