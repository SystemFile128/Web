import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Appbar } from './layout/Appbar';
import { Home } from './pages/Home';
import { Result } from './pages/Result';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Appbar />
            <Routes>
                <Route path="/" element={<></>}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/result" element={<Result />}></Route>
                </Routes>
                </BrowserRouter>
    </div>
  );
}

export default App;
