import './App.css';
import { Routes, Route } from 'react-router-dom';
import ShoePage from './pages/ShoePage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/Dashboard/OrderPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ShoePage />} />
        <Route path='/shoe' element={<ShoePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/dashboard/order-list' element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;
