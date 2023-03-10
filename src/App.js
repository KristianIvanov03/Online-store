import { Routes, Route} from 'react-router-dom'
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
