import './App.css';
import Navbar from './componants/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './componants/Footer';
import Signup from './componants/Signup';
import PrivateComponant from './componants/PrivateComponant';
import Login from './componants/Login';
import AddProduct from './componants/AddProduct';
import ProductList from './componants/ProductList';
import UpdateProduct from './componants/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponant />}>
            <Route path='/' element={<ProductList />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
            <Route path='/logout' element={<h1>Logout Componant</h1>} />
            <Route path='/profile' element={<h1>Profile Componant</h1>} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
