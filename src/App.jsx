import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {CartProvider} from "react-use-cart";
import Navbar from './components/Navbar';
import  Footer from './components/Footer';
import Main from './pages/Main';
import About from './pages/About';
import Sale from './pages/Sale';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Order from './pages/Order';

function App() {
  return (
  <div className="d-flex app-div">
    <CartProvider>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route  path='/pages/Main' element={<Main />} />
      <Route  path='/pages/About' element={<About />} />
      <Route  path='/pages/Sale' element={<Sale />} />
      <Route  path='/pages/Cart' element={<Cart />} />
      <Route  path='/pages/Contact' element={<Contact />} />
      <Route  path='/pages/Order' element={<Order />} />
    </Routes>
    <Footer />
    </Router>
    </CartProvider>
  </div>
  )
};

export default App;
