import logo from './logo.svg';
import './App.css';
import GetAllProducts from './productComponent/getAllProducts';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import GetCartItems from './productComponent/getCartItems';
import Register from './Auth/Register';
import Login from './Auth/Login';
import SearchData from './SearchData';
import GetSingleProduct from './productComponent/getSingleProduct';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
     <Route path='/register' element={<Register/>}/>
     <Route path='/' element={<Login/>}/>
      <Route path="/getAll" element={
        <ProtectedRoute>
        <GetAllProducts/>
        </ProtectedRoute>
        }/>
      <Route path="/cart" element={
        <ProtectedRoute>
        <GetCartItems/>
        </ProtectedRoute>
        }/>
      <Route path="/search" element={<SearchData/>}/>
      <Route path='/single/:id' element={<GetSingleProduct/>}/>
      
     </Routes>
      
    </div>
  );
}

export default App;