import { Routes, Route} from 'react-router-dom'
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/cart' exact element={<Cart/>}/>
      <Route path='/' exact element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
